<template>
  <div id="app">
    <Map/>
    <Modal/>
    <List/>
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import Modal from "./components/Modal.vue";
import List from "./components/List";

export default {
  name: "app",
  components: {
    Map,
    Modal,
    List
  }
};
</script>

<style lang="scss">
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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
