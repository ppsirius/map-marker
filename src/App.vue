<template>
  <div id="app">
    <Map />
    <Modal />
  </div>
</template>

<script>
import Map from "./components/Map.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "app",
  components: {
    Map,
    Modal
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
