<template>
<div class="modal-backdrop">
  <div class="modal">
    <h2 v-if="title">{{ title }}</h2>
    <div class="modal-content">
    <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: [ 'title' ]
}
</script>

<style scoped>
.modal-backdrop {
  top: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.5);
}
.modal {
  background-color: #e2e2e2;
  color: #424242;
  border-radius: 1vh;
  margin: 10vh;
  height: 80%;
}
.modal-content {
  padding: 4vh;
}
select {
  background-color: #424242 !important;
}
option {
  color: #e2e2e2;
}
</style>
