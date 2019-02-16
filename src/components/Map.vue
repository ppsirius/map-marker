<template>
  <div id="map-container" ref="map"></div>
</template>

<script>
/* eslint-disable */
import { mapMutations, mapGetters } from "vuex";
import GoogleMapsApiLoader from "google-maps-api-loader";
import { snazzyMaps } from "../utils/snazzyMaps";
export default {
  name: "Map",
  data: () => {
    return {
      mapConfig: {
        zoom: 11,
        center: { lat: 52.227, lng: 21.016 },
        styles: snazzyMaps
      },
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_KEY,
      google: null,
      myMap: null
    };
  },
  computed: {
    ...mapGetters(["places"])
  },
  methods: {
    ...mapMutations([
      "toggleModal",
      "addPlace",
      "setCoordinates",
      "setPlaceName",
      "setEditableModalMode"
    ]),
    initializeMap() {
      const { Map } = this.google.maps;
      this.myMap = new this.google.maps.Map(this.$refs.map, this.mapConfig);
    },

    moveToMarker(marker) {
      this.myMap.panTo(marker.getPosition());
    },

    updateMarkers() {
      this.places.forEach(place => {
        const marker = new this.google.maps.Marker({
          position: place.position,
          map: this.myMap,
          title: place.title
        });
        marker.addListener("click", e => {
          this.moveToMarker(marker);
          this.setPlaceName(marker.title);
          this.toggleModal();
          this.setEditableModalMode(false);
        });
      });
    }
  },
  watch: {
    places() {
      this.updateMarkers();
    }
  },
  async mounted() {
    const google = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    }).then(google => {
      this.google = google;
      this.initializeMap();
    });

    this.google.maps.event.addListener(this.myMap, "click", e => {
      this.setCoordinates({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      });
      this.toggleModal();
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
