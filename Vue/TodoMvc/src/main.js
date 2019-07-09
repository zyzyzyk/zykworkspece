import Vue from 'vue'
import App from './App.vue'
import store from '../src/components/Store'

new Vue({
  el: '#app',
  store, 
  render: h => h(App)
})