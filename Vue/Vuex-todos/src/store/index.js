import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: window.localStorage.getItem((STORAGE_KEY) || '[]')
  },
  actions: {}
})