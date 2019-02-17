<template>
  <div class="search shadow rounded-border">
    <input
      @input="updateSearchFilter"
      type="text"
      class="search-input"
      placeholder="Find your place"
    >
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Search",
  data: () => {
    return {
      search: ""
    };
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
</style>
