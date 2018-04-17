<template>
  <div id="track">
  <modal v-if="modal.display" :title="'Add a new Input'">
    What kind of Input is it?
    <select v-model="modal.input.type">
      <option>Synthetizer</option>
      <option>Microphone</option>
      <option>Filter</option>
    </select>
    Which one?
    <select v-if="modal.input.type === 'Synthetizer'" v-model="modal.selected">
      <option v-for="(synthetizer, index) in synthetizers" :key="index" :value="synthetizer" >{{ synthetizer.name }}</option>
    </select>
    <select v-if="modal.input.type === 'Filter'" v-model="modal.selected">
      <option v-for="(filter, index) in filters" :key="index" :value="filter">{{ filter.type }}</option>
    </select>
    <button @click="addInput(modal.selected)" v-if="modal.selected">Add</button>
  </modal>
    <div class="track-controls-header">
      <span v-if="!edits.name" @click="edits.name = true">{{ track.name() }}</span>
      <input v-else @keyup.enter="edits.name = false" @blur.native="edits.name = false" v-model="track._name"/><br/>
      <button @click="$emit('delete', track.name)">Delete</button>
    </div>
    <div class="controls">
      <p>Active <input type="checkbox" v-model="track.active"/></p>      
      <p>Gain: <input type="number" v-model="gain" @input="track.gain(gain)"/></p>
      <div class="track-input">
        <p v-for="input in track.inputs" :key="input.name">{{ input.name }}</p>
        <button @click="modal.display = true">Add Input</button>
      </div>
    </div>
  </div>
</template>

<script>
import { synthetizers, filtersArray } from '@/utils/Synthetizers'
import Modal from '@/components/UI/Modal'

export default {
  name: 'Track',
  props: {track: {required: true}},
  components: { Modal },
  data () {
    return {
      gain: this.track.gain(),
      edits: {name: false},
      modal: {
        display: false,
        input: {
          type: null,
        },
        selected: null
      },
      synthetizers: synthetizers,
      filters: filtersArray,
    }
  },
  methods: {
    addInput (input) {
      this.track.addInput(input)
      this.modal.display = false
    }
  },
  created () {
    console.log('synthetizers', this.synthetizers)
  }
}
</script>

<style scoped>
#track {
  border: 1px solid black;
  width: 22vh;
  height: 40vh;
}
.track-controls-header {
  padding: 1vh 0;
  background-color: rgb(90, 90, 90);
}
.controls {
  display: flex;
  flex-direction: column;
}
</style>
