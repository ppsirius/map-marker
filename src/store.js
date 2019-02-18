import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    places: [],
    filteredPlaces: [],
    showModal: false,
    editableModal: true,
    clickedCoordinates: {},
    placeName: ""
  },
  getters: {
    modalState: state => state.showModal,
    places: state => state.places,
    filterPlace: state => state.filteredPlaces,
    placeName: state => state.placeName,
    modalMode: state => state.editableModal,
    search: state => state.search
  },
  mutations: {
    toggleModal(state) {
      state.editableModal = true;
      state.showModal = !state.showModal;
    },
    addPlace(state, payload) {
      state.places.push({
        position: state.clickedCoordinates,
        title: payload
      });
    },
    setDeletePlace(state, payload) {
      state.places = state.places.filter(place => place.title !== payload);
    },
    setCoordinates(state, payload) {
      state.clickedCoordinates = { ...payload };
    },
    setPlaceName(state, payload) {
      state.placeName = payload;
    },
    setEditableModalMode(state, payload) {
      state.editableModal = payload;
    },
    updateFilteredPlaces(state) {
      state.filteredPlaces = state.places.filter(place => {
        return place.title.toLowerCase().includes(state.search.toLowerCase());
      });
    },
    updateSearch(state, payload) {
      state.search = payload;
    },
    clearSearch(state) {
      state.search = "";
    }
  },
  actions: {}
});
