import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/basic.css";

import axios from "axios";
Vue.prototype.$http = axios;

import REAURL from "./store/realurl.js";
Vue.prototype.REAURL = REAURL.realurl;

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
