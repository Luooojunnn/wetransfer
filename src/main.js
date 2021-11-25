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
import VueClipboard from 'vue-clipboard2'
import VueI18n from 'vue-i18n'
import * as ethers from 'ethers';

Vue.config.productionTip = false
Vue.prototype.$ethers = ethers;

Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(VueClipboard)
Vue.use(VueI18n) ;

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale 
  messages: {
    'zh-CN': require('./common/lang/zh'),   // 中文语言包
    'en-US': require('./common/lang/en')    // 英文语言包
  }
})

const router = new VueRouter({
  routes
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
