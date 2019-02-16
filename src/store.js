import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    places: [],
    filteredPlaces: [],
    showModal: false,
    clickedCoordinates: {}
  },
  getters: {
    modalState: state => state.showModal,
    places: state => state.places
  },
  mutations: {
    toggleModal(state) {
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
    }
  },
  actions: {}
});
