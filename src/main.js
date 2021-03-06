import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//ボタンの色をグローバルに設定
const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

Vue.use(VueSweetalert2, options);
// Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(require("vue-moment"));

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
