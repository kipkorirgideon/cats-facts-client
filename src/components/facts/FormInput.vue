<template>
<div class="py-1 d-flex flex-end">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-fact">Add new fact</button>
<div class="modal fade" id="add-fact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add new fact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <form>
            <div class="mb-3">
                <label for="message-text" class="col-form-label">Add new cat facts</label>
                <textarea class="form-control" v-model="text" rows = '5' id="message-text"></textarea>
            </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="saveNewFact()">Save</button>
        </div>
    </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'FormInput',
  data() {
    return {
      text: '',
    };
  },
  methods: {
    saveNewFact() {
      this.$emit('add-new-fact', this.text);
      $('#add-fact').modal('hide');
    },
  },
};
</script>
