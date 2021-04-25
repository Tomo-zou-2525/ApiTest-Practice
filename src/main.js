import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

//ボタンの色をグローバルに設定
const options = {
  confirmButtonColor: "#41b882",
  cancelButtonColor: "#ff7674",
};

Vue.use(VueSweetalert2, options);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
