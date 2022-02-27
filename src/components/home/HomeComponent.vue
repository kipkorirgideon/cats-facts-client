<template>
<div class="m-1">
  <div class="py-1 px-2 carousel-dark">
      <FormInput @add-new-fact = "addNewFact"/>
      <FactListComponent :facts = "this.facts"  @delete-fact="deleteFact" @handle-submit-update= "saveUpdate"/>
  </div>
</div>
</template>
<script>
import FactListComponent from '../facts/FactList.vue';
import FormInput from '../facts/FormInput.vue';

export default {
  name: 'HomeComponent',
  components: {
    FactListComponent,
    FormInput,
  },
  data() {
    return {
      facts: [],
    };
  },
  async created() {
    const response = await fetch('http://localhost:3001/cats/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    const facts = await response.json();
    this.facts = facts;
  },
  methods: {
    async saveUpdate(data) {
      await fetch(`http://localhost:3001/cats/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            this.facts.splice(data.index, 1, result[0]);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async deleteFact(id) {
      await fetch(`http://localhost:3001/cats/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
        .then((res) => res.json())
        .then((status) => {
          if (status) {
            this.facts = this.facts.filter((fact) => fact.id !== id);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async addNewFact(text) {
      const newFact = {
        text,
      };
      await fetch('http://localhost:3001/cats/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(newFact),
      })
        .then((res) => res.json())
        .then((status) => {
          if (status) {
            this.facts = [status[0], ...this.facts];
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
