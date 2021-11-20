import Vue from 'vue'
import Vuex from 'vuex'
import globalMmask from './modules/global-mask'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    globalMmask,
  },
  // strict: debug,
})