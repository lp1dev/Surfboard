<template>
<div class="flex-container">
  <div class="app-container synthetizers-list">
    <h2>Synthesizers</h2>
    <div>
      <div class="option-light"
      v-for="synth in synthetizers" :key="synth.name" 
      @click="onSelection(synth)" :class="{selected: synthetizer === synth}">{{ synth.name }}</div>
    </div>
  </div>
    <!-- Octave : {{ seaboard.firstKey / seaboard.numKeys }}<br/> -->
      <synth-graph v-if="synthetizer" id="synth-graph" :synth="synthetizer"/>
      <synth-details v-if="synthetizer" :synth="synthetizer"/>
</div>
</template>

<script>
import SynthGraph from '@/components/SynthGraph'
import SynthDetails from '@/components/SynthDetails'
import synthetizers from '@/utils/Synthetizers'

export default {
  name: 'Synthetizers',
  components: { SynthGraph, SynthDetails },
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
  width: 25%;
  height: 65vh;
  margin: 1vh;
  padding: 2vh;
}

</style>
