
// initial state
const state = () => ({
  loginIng: false,
  // 弹窗类型，-1：无， 1：deposit
  toastType: -1
})

// getters
const getters = {}

// actions
const actions = {
  // getAllProducts ({ commit }) {
  //   shop.getProducts(products => {
  //     commit('setProducts', products)
  //   })
  // }
}

// mutations
const mutations = {
  changeGlobalMask (state, payload) {
    if(!payload.toastType) {
      alert('请添加弹窗类型')
      return
    }
    state.loginIng = !state.loginIng;
    state.toastType = payload.toastType;
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}