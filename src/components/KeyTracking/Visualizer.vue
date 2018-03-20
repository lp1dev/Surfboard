<template>
  <svg v-if="seaboard"
      :width="width"
      :height="height"
      :viewPort="`0 0 ${width} ${height}`"
      >
      <rect 
      width="100%" 
      height="100%" 
      fill="transparent" 
      rx="10" 
      ry="10"

      />
      <line v-for="n in 24"
        :key="n+'-keyline'" 
        :x1="n * (width / 23)" y1="20"
        :x2="n * (width / 23)" :y2="height - (height / 5)"
        stroke="rgba(255, 255, 255, 0.3)"
        stroke-width="1"/>
      <line 
        v-for="id in [1,3,6,8,10,13,15,18,20,22]" 
        :key="id+'-black-keyline'"
        :x1="id * (width / 23)" y1="20"
        :x2="id * (width / 23)" :y2="height / 2.5"
        stroke="rgba(255, 255, 255, 0.7)"
        stroke-width="2"/>
      <circle 
        v-for="(coordinates, index) in seaboard.getCoordinates()"
        :key="index"
        :cx="coordinates.x * 50"
        :cy="coordinates.y * (height / 140)"
        stroke-width="1"
        stroke="white"
        :fill="`rgb(0, ${coordinates.size}, ${coordinates.size + 40})`"
        :r="coordinates.size"/>
    </svg>
</template>

<script>
export default {
  name: 'Visualizer',
  props: {'seaboard': {required: true}},
  data() {
    return {
      height: 200,
      width: 1150
    }
  },
  created () {
    this.seaboard.subscribeToMessages(channels => {
      this.$forceUpdate()
    })
  }
}
</script>

<style scoped>

</style>
