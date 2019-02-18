<template>
  <transition name="search">
    <div v-if="places.length" class="search shadow rounded-border">
      <input
        @input="updateSearchFilter"
        type="text"
        class="search-input"
        placeholder="Find your place"
        :value="search"
      >
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Search",
  computed: {
    ...mapGetters(["search", "places"])
  },
  methods: {
    ...mapMutations(["updateFilteredPlaces", "updateSearch"]),
    updateSearchFilter(e) {
      this.updateSearch(e.target.value);
      this.updateFilteredPlaces();
    }
  }
};
</script>

<style lang="scss">
.search {
  position: absolute;
  display: flex;
  align-items: center;
  top: 20px;
  left: 20px;
  height: 40px;
  width: 300px;
  background-color: #fff;
  transition: all .3s ease-in;

  .search-input {
    width: 100%;
    padding: 0 10px;
    border: none;
    outline: none;
    font-size: 20px;
    background-color: transparent;
    color: #2c3e50;

    &::placeholder {
      color: #c5cbd3;
    }
  }
}

/* Animaition */
.search-enter,
.search-leave-active {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
