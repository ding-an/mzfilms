import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/films'
  },
  {
    path: '/films',
    component: () =>import('@/views/films/Films')
  },
  {
    path: '/cinemas',
    component: () =>import('@/views/cinemas/Cinemas')
  },
  {
    path: '/info',
    component: () =>import('@/views/info/Info')
  },
  {
    path: '/profile',
    component: () =>import('@/views/profile/Profile')
  },
  {
    path: '/city',
    component: () => import('@/views/city/City')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
