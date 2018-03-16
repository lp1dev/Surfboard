<template>
  <div id="app">
    <div id="app-header">
      <h3>Surfboard</h3>
    </div>
    <div class="app-container midi-input-select" v-if="seaboardInputs.length && !seaboard">
      <h3>Which MIDI Input should we use?</h3>
      <div class="option-light"
        v-for="(seaboardInput, index) in seaboardInputs"
        :key="index"
        @click="selected = seaboardInput"
        :class="{selected: selected === seaboardInput}">{{seaboardInput.name}}
      </div>
      <button v-if="selected" @click="connect">Connect</button>
    </div>
    <div class="app-container midi-input-select" v-if="!seaboardInputs.length">
      No MIDI Input found, please check the connection and hit <button @click="loadSeaboardInputs">Reload</button>
    </div>
    <div v-if="seaboard">
      <synthetizers :seaboard="seaboard"/>
      <key-tracker :seaboard="seaboard"/>   
    </div>
  </div>
</template>

<script>
import { MIDIController } from "@/utils/MIDI"
import Seaboard from "@/utils/Seaboard"
import Synthetizers from '@/components/Synthetizers'
import KeyTracker from '@/components/KeyTracker'
import Sample from '@/components/Sample'

export default {
  name: "App",
  components: { Synthetizers, KeyTracker },
  data() {
    return {
      seaboardInputs: [],
      selected: null,
      seaboard: null
    };
  },
  created() {
    this.loadSeaboardInputs();
  },
  methods: {
    loadSeaboardInputs() {
      MIDIController.getInputs()
        .then(inputs => {
          this.seaboardInputs = inputs
        })
    },
    connect() {
      this.seaboard = new Seaboard(this.selected)
      this.seaboard
        .connect()
        .then(MIDIPort => console.log(MIDIPort))
        .catch(error => console.error(error))
    }
  }
};
</script>

<style>
h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0;
}
body {
  background-color: rgb(60, 60, 60);
  color: #e2e2e2;
  font-family: 'IBM Plex Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
}
button {
  background-color: rgb(70, 70, 70);
  color: white;
  border: 0;
  margin-top: 1vh;
  border-radius: 1vh;
  padding: 1vh;
}
button:hover {
  transition: color 1s;
  background-color: rgb(124, 123, 123);
}
::-webkit-scrollbar {
  width: 11px;
  height: 11px;
}

::-webkit-scrollbar-thumb {
  background: #333;
  border: 1px solid #222;
  border-radius: 50px;
}
::-webkit-scrollbar-track {
  background: #666;
  border: none;
  border-radius: 53px;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
.flex-container {
  display: flex;
}
#app-header {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
}
.app-container {
  background-color: rgb(42, 42, 42);
  border-radius: 1vh;
  margin: 1vh;
  overflow-y: auto;
}
.midi-input-select {
  max-width: 100vh;
  padding: 5vh;  
  margin: auto;  
  margin-top: 2vh;  
}
.option-light {
  background-color: rgb(70, 70, 70);
  border-radius: 1vh;
  padding: 0 1vh;
  margin-top: 1vh;
}
.option-light.selected {
  background-color: rgb(124, 123, 123);
}
</style>
