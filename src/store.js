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
    placeName: state => state.placeName,
    modalMode: state => state.editableModal
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
    setCoordinates(state, payload) {
      state.clickedCoordinates = { ...payload };
    },
    setPlaceName(state, payload) {
      state.placeName = payload;
    },
    setEditableModalMode(state, payload) {
      state.editableModal = payload;
    }
  },
  actions: {}
});
