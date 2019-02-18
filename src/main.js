import Vue from "vue";
import VueLodash from "vue-lodash";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueLodash);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
