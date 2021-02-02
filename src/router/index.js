import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/:userId',
    name: 'UserProfile',
    component: () => import(/* webpackChunkName: "userprofile" */ '../views/UserProfile')
  }
]

const router = new VueRouter({
  routes
})

export default router
