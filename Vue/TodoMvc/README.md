- el: #root 根挂载节点，
- App component + Vue-router + vuex 混合在一起应用

new Vue({
  el: '#app',
  render: h => h(App)
})

- vue的难点是 数据管理
  组件状态， data() {},
  当两兄弟组件共享状态，登录
  props 传递过去
  应用状态？

- 当页面上多个组件要共享状态时
  将共享的状态放置在这些组件的共同的父组件data来管理
  状态要唯一，放在一个地方（共同的父组件） 方便管理
  如果不统一，状态有可能不同步
  父子组件的通信， v-on:increment="incrementCount"
  props: this.$emits();
  很多状态要共享，很多组件，组件的关系也错综复杂
  App 全局数据管理 vuex 应用状态管理

- vue组件开发， 两部分
  组件开发(协作) vuex数据管理(要考虑整个应用程序的数据流)

  store 超市 new Vuex.Store({
     state
  })

  中央 组件 地方
  读   this.$store.state.count
  写   actions， mutations， getters， 公司的概念
  vuex 不是什么时候都要  大项目离不开vuex
  CEO 旅梦 {state}
  财务 mutations  唯一可以修改state的地方
  审核一下，对状态的修改是否是被允许的

- Vue 实现核心mvvm， 其他的通过Vue.use()插入
   this.$store
   this.$router
  读
  写

- data() 将会被 state取代