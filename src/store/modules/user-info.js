
// initial state
const state = () => ({
  userInfo: {
    adr: '',
    etherString: '',
    walletAdressShow:''
  }
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
  setUserInfo(state, payload) {
    console.log('payload', payload);
    state.userInfo = payload
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}