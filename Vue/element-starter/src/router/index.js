import Vue from 'vue'
import VueRouter from 'vue-router'
import {index} from 'pages/index'
// this.$router this.$route


Vue.use(VueRouter);
const routers = [
  {
    path:'/',
    name: '登录',
    // hidden: true,
    component: index
  }
];

export default new VueRouter({
  routers,
  // strict: ProcessingInstruction.env.NODE_ENV !== 'production'
})
