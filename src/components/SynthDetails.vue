<template>
  <div class="app-container synth-details" v-if="synth.type !== 'classic'">
    <h3>{{ synth.name }}</h3>
    <p>Type: {{ synth.type }} synthetizer</p>
    <p>Amplitude: {{ synth.amplitude }} Hz</p>
    <p>Gain Variation: {{ synth.configuration.gain || 0}}</p>
    <p>Samples: {{ synth.sin.length }}</p>
    <p v-if="synth.type === 'function'">Function: {{ synth.function.toString() }}</p>
  </div>
  <div class="app-container synth-details" v-else>
    Select a custom synthetizer to display its details
  </div>
</template>

<script>
export default {
  name: 'SynthDetails',
  props: {synth: {required: true}}
}
</script>
<style>
.synth-details {
  margin: 1vh;
  width: 40%;
  padding: 1vh
}
</style>
