<template>
  <div>
    <h2>Select your sample</h2>
    <div>
      <select v-model="selected" @input="onSelection($event.target.value)">
       <option disabled value="">Choose</option>
       <option v-for="sample in samples" :key="sample" selected> {{ sample }}</option>
      </select>
    </div>
    <!-- <pre>{{ JSON.stringify(message) }}</pre> -->
  </div>
</template>

<script>
import BufferLoader from '@/utils/BufferLoader'
const samples = ['static/piano.wav']

export default {
  name: 'Sample',
  props: {'seaboard': {required: true}},
  data () {
    return {
      message: '',
      samples: samples,
      selected: ''
    }
  },
  created () {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
    this.bufferLoader = new BufferLoader(this.audioContext, ['static/piano.wav'], (data) => this.bufferLoaded(data))
    this.bufferLoader.load()

    this.seaboard.subscribeToMessages(message => {
      this.message = message
      switch (message.type) {
        case 'Note ON':
        this.playNote(message)
        break
      }
    })
  },
  methods: {
    onSelection (name) {
      console.log('Sample :: selected', name)
      this.selected = name
    },
    playNote (message) {
      this.source = this.audioContext.createBufferSource();
      this.source.buffer = this.buffer
      console.log(this.source)
      this.source.connect(this.audioContext.destination)
      this.source.start()
      console.log('Playing note', message.note)
    },
    bufferLoaded (bufferList) {
      console.log('bufferLoaded', bufferList)      
      this.buffer = bufferList[0]
    }
  }
}
</script>

<style>

</style>
