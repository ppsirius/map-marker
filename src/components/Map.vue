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
      myMap: null,
      markers: [],
      places: [],
      mapConfig: {
        zoom: 11,
        center: { lat: 52.227, lng: 21.016 }
      },
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_KEY,
      myCoordinate: { lat: 52.222, lng: 21.012 },
      marker: null
    };
  },
  methods: {
    initializeMap(){
      const { Map } = this.google.maps;
      this.myMap = new this.google.maps.Map(this.$refs.map, this.mapConfig);

      this.marker = new this.google.maps.Marker({
        position: this.myCoordinate,
        map: this.myMap,
        title: 'Click to zoom'
      });
    },
  },
  async mounted() {
    const google = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    }).then(google => {
      this.google = google
      this.initializeMap();
    });

    this.myMap.addListener('click', (e) => {
      console.log(e)
    });

    this.google.maps.event.addListener(this.myMap, 'click', (e) => {
      console.log(e.latLng)
    });

    window.setTimeout(() => {
      this.myMap.panTo(this.marker.getPosition());
    }, 3000);
  }
};
</script>

<style scoped>
#map-container {
  height: 100vh;
  width: 100%;
}
</style>
