<template>
  <div id="map-container" ref="map"></div>
</template>

<script>
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
        styles: snazzyMaps,
        disableDefaultUI: true
      },
      apiKey: process.env.VUE_APP_GOOGLE_MAPS_KEY,
      google: null,
      myMap: null,
      markers: []
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
      this.myMap = new this.google.maps.Map(this.$refs.map, this.mapConfig);
    },

    moveToMarker(marker) {
      this.myMap.panTo(marker.getPosition());
    },

    addMarker(location, title) {
      const marker = new this.google.maps.Marker({
        position: location,
        map: this.myMap,
        title: title
      });

      marker.addListener("click", () => {
        this.moveToMarker(marker);
        this.setPlaceName(marker.title);
        this.toggleModal();
        this.setEditableModalMode(false);
      });

      this.markers.push(marker);
    },

    deleteMarker(title) {
      for (let i = 0; i < this.markers.length; i++) {
        if (this.markers[i].title === title) {
          this.markers[i].setMap(null);
          return;
        }
      }
    }
  },
  watch: {
    places(newPlaces, oldPlaces) {
      if (oldPlaces.length <= newPlaces.length) {
        const lastAddedPlace = newPlaces[newPlaces.length - 1];
        this.addMarker(lastAddedPlace.position, lastAddedPlace.title);
      } else {
        const newTitle = newPlaces.map(place => place.title);
        const oldTitle = oldPlaces.map(place => place.title);
        const deletedPlace = this._.difference(
          [...newTitle, ...oldTitle],
          newTitle
        );
        this.deleteMarker(...deletedPlace);
      }
    }
  },
  async mounted() {
    await GoogleMapsApiLoader({
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
