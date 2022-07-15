import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  { path: '/regist', component: () => import('@/views/Regist') },
  {
    path: '/',

    component: () => import('@/views/Layout'),

    children: [
      { path: '', name: 'home', component: () => import('@/views/Home') },
      {
        path: '/search',
        name: 'search',
        component: () => import('@/views/Search')
      },
      {
        path: '/information',
        name: 'information',
        component: () => import('@/views/Information')
      },
      { path: '/my', name: 'layout', component: () => import('@/views/My') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
