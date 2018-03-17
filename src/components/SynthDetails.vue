<template>
<div class="synth-details">
  <div class="app-container synth-conf" v-if="synth.type !== 'classic'">
    <h3>{{ synth.name }}</h3>
    <p>Type: {{ synth.type }} synthetizer</p>
    <p>Amplitude: {{ synth.amplitude }} Hz</p>
    <p>Gain Variation: {{ synth.configuration.gain || 0}}</p>
    <p>Samples: {{ synth.sin.length }}</p>
    <p v-if="synth.type === 'function'">Function: {{ synth.function.toString() }}</p>
  </div>
  <div class="app-container synth-filter" v-if="synth.filter">
    <h3>Filter</h3>
    <p>Type:
    <select v-model="synth.filter.type" @input="synth.filter.updateType()">
      <option v-for="(type, index) in synth.filter.types" :key="index">
        {{ type }}
      </option>
    </select>      
      </p>
    <p>Frequency: <input type="number" v-model="synth.filter.frequency" @input="synth.filter.updateFrequency()"></p>
    <p>Gain: <input type="number" v-model="synth.filter.gain" @input="synth.filter.updateGain()"></p>
    <p>Q: <input type="number" v-model="synth.filter.q" @input="synth.filter.updateQ()"></p>
  </div>
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
  width: 40%;
}
.synth-conf{
  padding: 1vh
}
</style>
