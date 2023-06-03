import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";
Vue.use(VueViewer);

import vmodal from "vue-js-modal";
Vue.use(vmodal);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
