<template>
<div class="flex row py-1 mx-1 shadow-sm p-3 mb-5 bg-body rounded" v-if="facts.length">
   <div class="card d-flex flex-row fact-card my-1" v-for="(fact,index) in facts" :key="fact.id">
       <div class="py-1 m-1 text" >
       <p class="text">{{fact.text}}</p>
       </div>
       <div class="m-1 d-flex flex-row">
           <div>
                <button type = "button" class="btn btn-secondary" data-bs-toggle="modal" :data-bs-target="`#elem_${fact.id}`" @click="()=>handleUpdate(fact.text)">Update</button>
                <div class="modal fade" :id="`elem_${fact.id}`" :aria-labelledby="`elem_${fact.id}`" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center">Update Cat fact</h5>
                    </div>
                     <form>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Text: </label>
                            <textarea class="form-control" rows="5" v-model="text"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="saveUpdate(fact.id, index)">Save</button>
                    </div>
                     </form>
                    </div>
                </div>
                </div>
                </div>
           <button class="btn btn-danger mx-1" @click="deleteFact(fact.id)">delete</button>
       </div>
   </div>
</div>
<div class="shadow-sm p-3 mb-5 bg-body rounded" v-else>
    <p class="text text-start">No records</p>
</div>
</template>
<script>
// import FormInput from './FormInput.vue';

export default {
  name: 'FactListComponent',
  props: {
    facts: Array,
  },
  data() {
    return {
      text: '',
    };
  },
  components: {
  },
  methods: {
    handleUpdate(text) {
      this.text = text;
    },
    saveUpdate(id, index) {
      const updatedData = {
        text: this.text,
        id,
        index,
      };
      this.$emit('handle-submit-update', updatedData);
      $(`#elem_${id}`).modal('hide');
    },
    deleteFact(id) {
      this.$emit('delete-fact', id);
    },
    handleChange() {
      console.log('HELLO"');
    },
  },
};
</script>
<style scoped>
.fact-card{
    justify-content: space-between;
    align-items: center;
}
.text{
    text-align: start;
}
</style>
