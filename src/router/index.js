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
    redirect: '/films/nowPlaying',
    component: () =>import('@/views/films/Films'),
    children: [
      {
        path: '/films/nowPlaying',
        component: () => import('@/views/films/nowplaying/NowPlaying')
      },
      {
        path: '/films/comingSoon',
        component: () => import('@/views/films/comingsoon/ComingSoon')
      }
    ]
  },
  {
    path: '/cinemas',
    component: () => import('@/views/cinemas/Cinemas')
  },
  {
    path: '/cinemas/search',
    component: () => import('@/views/cinemas/search/Search')
  },
  {
    path: '/cinemas/:cinemaId/film',
    component: () => import('@/views/cinemas/film/CinemaFilm')
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
