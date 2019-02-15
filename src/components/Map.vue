<template>
  <div id="map-container" ref="map"></div>
</template>

<script>
/* eslint-disable */
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  name: "Map",
  data: () => {
    return {
      google: null,
      markers: [],
      places: [],
      mapConfig: {
        zoom: 12,
        center: { lat: 52.227, lng: 21.016 }
      },
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_KEY
    };
  },
  methods: {
    addMarker() {
      const marker = {
        lat: 52.227,
        lng: 21.015
      };
      this.markers.push(marker);
    },
    logEvent(e) {
      console.log(google.maps);
    },
    initializeMap(){
      const { Map } = this.google.maps;
      this.map = new Map(this.$refs.map, this.mapConfig);
    }
  },
  created() {

  },
  mounted() {
    GoogleMapsApiLoader({
      apiKey: this.apiKey
    }).then(google => {
      this.google = google
      this.initializeMap();
    });
  }
};
</script>

<style scoped>
#map-container {
  height: 100vh;
  width: 100%;
}
</style>
