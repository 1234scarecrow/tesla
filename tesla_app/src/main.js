import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MintUI from 'mint-ui'
import "mint-ui/lib/style.css"
Vue.use(MintUI);
import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:4000/"
axios.defaults.withCredentials=true;
Vue.config.productionTip = false
Vue.prototype.axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
