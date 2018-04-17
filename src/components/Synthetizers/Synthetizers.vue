<template>
<div class="flex-container">
  <card class="synthetizers" title="Synthetizers">
    <div class="synthetizers-list">
      <div class="option-light"
      v-for="synth in synthetizers" :key="synth.name" 
      @click="onSelection(synth)" :class="{selected: synthetizer === synth}">{{ synth.name }}</div>
    </div>
  </card>
    <!-- Octave : {{ seaboard.firstKey / seaboard.numKeys }}<br/> -->
      <synth-graph v-if="synthetizer" id="synth-graph" :synth="synthetizer"/>
      <synth-details v-if="synthetizer" :synth="synthetizer"/>
</div>
</template>

<script>
import SynthGraph from '@/components/Synthetizers/SynthGraph'
import SynthDetails from '@/components/Synthetizers/SynthDetails'
import Card from '@/components/UI/Card'
import { synthetizers } from '@/utils/Synthetizers'

export default {
  name: 'Synthetizers',
  components: { SynthGraph, SynthDetails, Card },
  props: {'seaboard': {required: true}},
  data () {
    return {
      message: '',
      synthetizers: synthetizers,
      selected: '',
      synthetizer: null,
      subscription: null
    }
  },
  created () {
    this.subscription = this.seaboard.subscribeToMessages(message => {
      if (this.synthetizer) {
        this.synthetizer.handleMessage(message)
      }
      this.message = message
    })
  },
  methods: {
    onSelection (synth) {
      console.log('Synthetizers :: selected', name)
      this.synthetizer = synth
    }
  },
  destroyed () {
    this.seaboard.unsubscribeToMessages(this.subscription)
  }
}
</script>

<style scoped>
.synthetizers-list {
  height: 65vh;
  padding: 1vh;
  overflow-y: auto;
}
.synthetizers {
  width: 30%;
  overflow: hidden;
}
</style>
