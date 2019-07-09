import Vue from 'vue'
import Router from 'vue-router'
import { networkInterfaces } from 'os';
Vue.use(Router)

import {getToken} from '@/utils/auth'
// 当进入/ 如果没有token 就去登录 ?


const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component:
        () => import('@/pages/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component:
       () => import('@/pages/login.vue')
    },
  ]
})
let token = getToken
const whiteList = ['/login','/signup',
 '/auth-redirect']
router.beforeEach((to, from, next) => {
  if (token) {

  } else {
    console.log(to.path);
    if (whiteList.includes(to.path)) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
})
export default router;

// to  from $router path  /
