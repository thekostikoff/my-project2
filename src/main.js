import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./assets/AddNewTask.scss";
import "./assets/NullingStyle.scss";
import "./assets/GeneralButtons.scss";
import "./assets/GeneralPanel.scss";
import "./assets/PostsList.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
