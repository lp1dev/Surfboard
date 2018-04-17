<template>
  <card title="Tracks">
    <div id="tracks-container">
      <track-component @delete="remove(track)" v-for="(track, index) in tracks" :key="index" :track="track"/>
    </div>
    <button class="button" @click="add">Add</button>
  </card>
</template>

<script>
import Track from '@/utils/Track'
import TrackComponent from './Track'
import Card from '@/components/UI/Card'

export default {
  name: 'Tracks',
  components: { Card, TrackComponent },
  data () {
    return {
      tracks: []
    }
  },
  methods: {
    add () {
      this.tracks.push(new Track(`Track ${this.tracks.length}`))
    },
    remove (trackToRemove) {
      this.tracks = this.tracks.filter((track) => track !== trackToRemove)
    }
  }
}
</script>

<style scoped>
#tracks-container {
  display: flex;
  overflow-x: auto;
}
</style>
