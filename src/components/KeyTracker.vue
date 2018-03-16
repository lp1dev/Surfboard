<template>
<div class="app-container visualizer-container">
  <visualizer :seaboard="seaboard"/>
  <p class="keys">C{{ octave }}</p>
</div>
</template>

<script>
import Visualizer from '@/components/Visualizer'

export default {
  name: 'KeyTracker',
  props: {seaboard: {required: true}},
  computed: {
    octave () {
      let result = (this.seaboard.firstKey / this.seaboard.numKeys)
      if (!Number.isInteger(result)) {
        result += 0.5
      }
      return result - 1      
    }
  },
  components: { Visualizer }
}
</script>

<style>
.visualizer-container {
  margin: 0 1vh;
  padding: 1vh;
  width: 99%;
  box-sizing: border-box;
}
.keys {
  margin: auto;
  width: 1150px;
  text-align: left;
}
</style>
