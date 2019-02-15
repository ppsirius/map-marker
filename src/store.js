import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    places: [],
    filteredPlaces: [],
    showModal: false
  },
  getters: {
    modalState: state => state.showModal
  },
  mutations: {
    toggleModal(state) {
      state.showModal = !state.showModal;
    }
  },
  actions: {}
});
