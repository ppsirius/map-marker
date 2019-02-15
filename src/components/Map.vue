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
        position: { lat: 52.227, lng: 21.016 },
        center: { lat: 52.227, lng: 21.016 }
      },
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_KEY,
      myCoordinate: { lat: 52.222, lng: 21.012 },
      marker: null,
      clickedCoordinates: {}
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

    createMarker() {
      new this.google.maps.Marker({
        position: this.clickedCoordinates,
        map: this.myMap,
        title: 'Click to zoom'
      })
    },

    moveToMarker(marker) {
      this.myMap.panTo(marker.getPosition());
    }
  },
  async mounted() {
    const google = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    }).then(google => {
      this.google = google
      this.initializeMap();
    });


    this.google.maps.event.addListener(this.myMap, 'click', (e) => {
      this.clickedCoordinates = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
      this.createMarker()
    })

  }
};
</script>

<style scoped>
#map-container {
  height: 100vh;
  width: 100%;
}
</style>
