<template>
<div class="app-container synth-graph">
<div v-if="synth.custom">
  <svg width="80vh" height="60vh" :viewBox="`0 0 ${width} ${height}`">
    <rect :fill="backgroundColor" :width="width" :height="height"/>
    <line x1="0" :y1="height / 2" :x2="width" :y2="height / 2" :stroke="axesColor" stroke-width="0.1"/>
    <line x1="2" y1="0" x2="2" :y2="height" :stroke="axesColor" stroke-width="0.1"/>
    <!-- sin -->
    <circle v-for="(sin, index) in synth.sin" :key="index+'-sinDot'" r="0.2" :stroke="sinColor" stroke-width="0.2" :cx="(index) * stepX + 2" :cy="-sin + (height / 2)"/>
    <line v-for="(sin, index) in synth.sin"  :key="index+'-sinLine'" v-if="index" :x1="(index - 1) * stepX + 2" :y1="-synth.sin[index - 1] + (height / 2)" :x2="index * stepX + 2" :y2="-sin + (height / 2)" :stroke="sinColor" stroke-width="0.1" />
    <!-- cosin -->
    <circle v-for="(cosin, index) in synth.cosin" :key="index+'-cosinDot'" r="0.2" :stroke="cosColor" stroke-width="0.2" :cx="(index) * stepX + 2" :cy="-cosin + (height / 2)"/>
    <line v-for="(cosin, index) in synth.cosin"  :key="index+'-cosinLine'" v-if="index" :x1="(index - 1) * stepX + 2" :y1="-synth.cosin[index - 1] + (height / 2)" :x2="index * stepX + 2" :y2="-cosin + (height / 2)" :stroke="cosColor" stroke-width="0.1" />
     <!-- sin + cosin -->
    <circle v-for="(sincos, index) in sinCos" :key="index+'-sincosDot'" r="0.2" :stroke="sinCosColor" stroke-width="0.2" :cx="(index) * stepX + 2" :cy="-sincos + (height / 2)"/>
    <line v-for="(sincos, index) in sinCos"  :key="index+'-sincosLine'" v-if="index" :x1="(index - 1) * stepX + 2" :y1="-sinCos[index - 1] + (height / 2)" :x2="index * stepX + 2" :y2="-sincos + (height / 2)" :stroke="sinCosColor" stroke-width="0.1" />
  </svg>
</div>
<div v-else>
  Only custom synthetizers can be represented by a graph
</div>
</div>
</template>

<script>
export default {
  name: 'Synthgraph',
  props : {'synth': {required: true}},
  data() {
    return {
      stepX: 20,
      sinCosColor: 'rgb(0, 243, 255)',
      sinColor: 'rgb(144, 40, 59)',
      cosColor: 'rgb(100, 100, 100)',
      backgroundColor: 'transparent',
      axesColor: '#e2e2e2'
    }
  },
  computed: {
    width () {
      return (this.synth.sin.length - 1) * this.stepX + 2
    },
    height () {
      if (this.synth.sin) {
        const height = this.synth.amplitude
        return (height + (height / 2))
      }
      return 60
    },
    sinCos () {
      const output = []
      this.synth.sin.forEach((sin, i) => {
        // https://webaudio.github.io/web-audio-api/#waveform-generation
        const a = sin
        const b = this.synth.cosin[i]
        const t = i
        const result = (a * Math.cos(2 * Math.PI * t)) + (b * Math.sin(2 * Math.PI * t))
        output.push(result)
      })
      return output
    }
  }
}
</script>

<style scoped>
.synth-graph {
  height: 65vh;
  width: 35%;
  margin: 0;
  padding: 2vh;
  margin-top: 1vh;
}
</style>
