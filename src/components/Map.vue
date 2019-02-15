<template>
  <gmap-map :center="center" :zoom="11" style="width:100%;  height: 600px;">
    <gmap-marker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      @click="center = m.position"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
export default {
  name: "map",
  data: () => {
    return {
      center: { lat: 52.227, lng: 21.016 },
      markers: [],
      places: [],
      currentPlace: null
    };
  }
};
</script>

<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  margin: 0 auto;
  background: gray;
}
</style>
