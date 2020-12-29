import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./style/base.scss";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [
  "a-scene",
  "a-entity",
  "a-camera",
  "a-box",
  "a-sky",
  "a-assets",
  "a-marker",
  "a-marker-camera"
];

new Vue({
  render: h => h(App)
}).$mount("#app");
