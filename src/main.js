import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'
import './style/reset.css'

Vue.config.productionTip = false
const router = new VueRouter({
  routes
})
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
