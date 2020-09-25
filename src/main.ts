import Vue from "vue";
import App from "./App.vue";
import UI from "@unicoderns/ui/src";

Vue.config.productionTip = false;
Vue.use(UI);

new Vue({
  render: h => h(App)
}).$mount("#app");
