import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/test1',
      name: 'test1',
      component: () => import('@/components/Test1')
    },
    {
      path: '/test2',
      name: 'test2',
      component: () => import('@/components/Test2')
    }
  ]
})
