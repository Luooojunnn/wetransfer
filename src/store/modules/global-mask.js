
// initial state
const state = () => ({
  loginIng: false
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
  changeGlobalMask (state) {
    state.loginIng = !state.loginIng
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}