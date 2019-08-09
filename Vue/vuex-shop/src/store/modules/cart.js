const state = {
  items: []
}
const mutations = {
  pushProductToCart(state, {id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  increamentItemQuantity(state, {id}) {
    const cartItem = state.items.find(
      item => item.id === product.id
    )
    cartItem.quantity++;
  },
}
const getters = {}
const actions = {
  addProductToCart({state, commit}, product) {
    if(product.inventory > 0) {
      // 检查一下items里面有没有
      const cartItem = state.items.find(
        item => item.id === id
      )
      if(!cartItem) {
        commit('pushProductToCart', { id: product.id })
      }else {
        commit('increamentItemQuantity', cartItem);
      }
      // 有 +1
      // 没有 push

    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}