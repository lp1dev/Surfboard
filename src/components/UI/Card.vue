<template>
  <div class="card">
    <div v-if="title" class="card-header">
      {{ title }}
    </div>
    <div class="card-content">
      <slot></slot>      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props : [ 'title' ]
}
</script>

<style>
.card {
  background-color: rgb(42, 42, 42);
  border-radius: 1vh;
  margin: 1vh;
  overflow-y: auto;
}
.card-header {
  background-color: rgb(12, 12, 12);
  padding: 1vh;
  font-weight: bold;
}
.card-content {
}
.option-light {
  background-color: rgb(70, 70, 70);
  border-radius: 1vh;
  padding: 1vh 1vh;
  margin-top: 1vh;
}
.option-dark {
  background-color: rgb(12, 12, 12);
  border-radius: 1vh;
  padding: 1vh 1vh;
  margin-top: 1vh;
}
.option-light.selected {
  background-color: rgb(124, 123, 123);
}
.option-light:hover {
  transition: 0.5 all;
  background-color: rgb(100, 100, 100);
}
.button {
  margin: 1vh;
  padding: 1vh 5vh;
  font-size: 1.6vh;
}
</style>
