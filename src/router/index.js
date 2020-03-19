import Vue from 'vue'
import VueRouter from 'vue-router'

const svg = () => import('@/views/Svg.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SvgDemo',
    component: svg
  }
]

const router = new VueRouter({
  routes
})

export default router
