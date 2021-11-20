
// initial state
const state = () => ({
  userInfo: {}
})

// getters
const getters = {}

// actions
const actions = {
  // setUserInfoAction ({ commit }) {
  //   shop.getProducts(products => {
  //     commit('setProducts', products)
  //   })
  // }
}

// mutations
const mutations = {
  setUserInfo (state, payload) {
    state.loginIng = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}