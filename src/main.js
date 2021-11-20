import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'
import './style/reset.css'
import './style/common.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'
import store from './store'

const ethers = require('ethers');

Vue.config.productionTip = false
Vue.prototype.$ethers = ethers;

Vue.use(ElementUI);
Vue.use(Vuex);

const router = new VueRouter({
  routes
})
Vue.use(VueRouter)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
