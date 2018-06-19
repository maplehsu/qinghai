import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/view/index'
import Info from '@/view/info'
import Reserve from '@/view/reserve'
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
      path: '/reserve',
      name: 'reserve',
      component: Reserve
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    }
  ]
})

export default router
