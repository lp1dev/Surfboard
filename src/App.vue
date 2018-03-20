<template>
  <div id="app">
    <div id="app-header">
      <h3>Surfboard</h3>
    </div>
    <card v-if="!compatibleBrowser" title="Ooops">
      <div class="app-error">
        I'm sorry but unfortunately your browser isn't yet supported by the APIs Surfboard is using! Please try again with a recent Chrome or Chromium version.
        Thanks!
      </div>
    </card>
    <card class="midi-input-select" v-if="seaboardInputs.length && !seaboard" title="Which MIDI Input should we use?">
      <div class="option-light midi-input-option"
        v-for="(seaboardInput, index) in seaboardInputs"
        :key="index"
        @click="selected = seaboardInput"
        :class="{selected: selected === seaboardInput}">{{seaboardInput.name}}
      </div>
      <button v-if="!selected" class="option-dark button" @click="loadSeaboardInputs">Reload</button>
      <button v-else class="option-dark button" @click="connect">Connect</button>
    </card>
    <div title="No Input Found" class="midi-input-select" v-if="!seaboardInputs.length && compatibleBrowser">
      No MIDI Input found, please check the connection and hit <button @click="loadSeaboardInputs">Reload</button>
    </div>
    <div v-if="seaboard">
      <!-- <tracks/> -->
      <synthetizers :seaboard="seaboard"/>
      <key-tracker :seaboard="seaboard"/>
    </div>
  </div>
</template>

<script>
import { MIDIController } from "@/lib/seaboard-api/js/MIDI"
import { Synthetizers, KeyTracker, Tracks } from '@/components/UI/Windows'
import Card from '@/components/UI/Card'
import Seaboard from "@/lib/seaboard-api/js/Seaboard"

export default {
  name: 'App',
  components: { Synthetizers, KeyTracker, Tracks, Card },
  data() {
    return {
      seaboardInputs: [],
      selected: null,
      seaboard: null,
      compatibleBrowser: MIDIController.compatibleBrowser
    }
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
  font-family: 'Oxygen', sans-serif;
  /* font-family: 'Nanum Gothic', sans-serif;   */
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
  transition: 0.5 all;
  background-color: rgb(124, 123, 123);
  color: rgb(12, 12, 12);
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
#app {
  max-width: 1920px;
  margin: auto;
}
.app-error {
  padding: 20vh;
}
.midi-input-select {
  max-width: 100vh;
  margin: auto !important;  
  margin-top: 2vh;
}
.midi-input-option {
  margin: 1vh;
}
input {
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid rgb(0, 243, 255);
  color: white !important;
  font-size: 1.6vh;
  padding: 1vh;
}
select {
  background-color: transparent !important;
  padding: 0.5 1vh;
  color: white !important;
  font-size: 1.6vh;  
}
option {
  color: black !important;
}
@media screen and (max-width: 1050) {

}
</style>
