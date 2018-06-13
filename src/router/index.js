import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Info from '@/view/info'
import Reseve from '@/view/reseve'
import Error from '@/view/error'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/reseve',
      name: 'reseve',
      component: Reseve
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    }
  ]
})

export default router
