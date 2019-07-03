import Vue from "vue";
import App from "./App.vue";
import VueComponentsSsrDemo from "vue-components-ssr-demo";

Vue.use(VueComponentsSsrDemo);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
