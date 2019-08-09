## 技能思路

- 购物车
Goods > GoodsItem
共享数据 库存 -> 购物车
- 组件让我们从容的进行切分页面
- vuex data 不适合放共享数据
  props 父子组件传值，但是event bus不如 vuex
  computed 数据从中央到地方的对接点
  
- store module(products.all) []
  mapState({ products: state => state.all })

  all <-mutation <- actions axios 请求(后端api)
  modules state.products.all

  ** vuex开发套路：
  dispatch('products/getAllProducts') -> action -> api ->mutation -> state -> MVVM -> 界面
  methods