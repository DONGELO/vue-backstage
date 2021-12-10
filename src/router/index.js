import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    meta:{
      name: '登录'
    },
    component: () => import( '../views/login/index.vue')
  },
  {
    path: '/home',
    name: 'Homes',
    redirect: 'home',
    meta:{
      name: '首页', icon: 'home'
    },
    component: () => import( '../views/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        meta:{
          name: '首页'
        },
        component: () => import( '../views/home/index.vue'),
      }
    ]
  },
  {
    path: '/shop',
    name: 'Shops',
    meta:{
      name: '商品', icon: 'shop-01'
    },
    component: () => import( '../views/layout/index.vue'),
    children: [
      {
        path: '/shop',
        name: 'Shop',
        meta:{
          name: '商品管理'
        },
        component: () => import( '../views/shop/index.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
