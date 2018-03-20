<template>
  <card class="visualizer-container">
    <visualizer :seaboard="seaboard"/>
    <p class="keys">C{{ octave }}</p>
  </card>
</template>

<script>
import Visualizer from './Visualizer'
import Card from '@/components/UI/Card'

export default {
  name: 'KeyTracker',
  components: { Visualizer, Card },
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
