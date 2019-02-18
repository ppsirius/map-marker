<template>
  <div id="app">
    <Map />
    <Modal />
    <div class="places-controls">
      <Search />
      <List />
    </div>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import Modal from "./components/Modal.vue";
import List from "./components/List";
import Search from "./components/Search";

export default {
  name: "app",
  components: {
    Map,
    Modal,
    List,
    Search
  }
};
</script>

<style lang="scss">
$shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

html {
  box-sizing: border-box;
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}

.shadow {
  box-shadow: $shadow;
}

.rounded-border {
  border-radius: 10px;
}

.btn {
  padding: 8px 16px;
  display: inline-block;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 6px;
  box-shadow: $shadow;
  cursor: pointer;

  &:hover {
  }

  &-primary {
    background-color: #18b1f6;
    color: #fff;
  }
}
</style>
