import shop from '../../api/shop'
const state = {
  all: []
}
const getters = {

}
const actions = {
  getAllProducts({commit}) {
    // 前后端分离 action => api
    shop.getProducts(products => {
      commit('setProducts', products);
    });
  }
}
const mutations = {
  setProducts(state, products) {
    state.all = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}