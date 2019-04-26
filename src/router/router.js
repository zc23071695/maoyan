import Vue from 'vue'
import VueRouter from 'vue-router'

// import Index from '../components/index/Index.vue'
// import Movie from '../components/index/Movie.vue'
// import Cinema from '../components/index/Cinema.vue'
// import User from '../components/index/User.vue'
// // import City from '../components/city/City.vue'
// import Serch from '../components/serch/Serch.vue'
// import Detail from '../components/detail/Detail.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../components/index/Index.vue'),
    children: [
      {
        path: 'movie',
        component: () => import('../components/index/Movie.vue'),
        name: 'movie',
        meta: { tabNumber: 0 }
      },
      {
        path: 'cinema',
        component: () => import('../components/index/Cinema.vue'),
        name: 'cinema',
        meta: { tabNumber: 1 }
      },
      { path: 'user', component: () => import('../components/index/User.vue'), name: 'user', meta: { tabNumber: 2 } },
      { path: '', redirect: '/movie' }
    ]
  },
  // { path: '/city', component: City, name: 'city' },
  { path: 'serch', component: () => import('../components/serch/Serch.vue'), name: 'serch' },
  { path: '/movie/:id', component: () => import('../components/detail/Detail.vue'), name: 'detail' },
  { path: '*', redirect: '/movie' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
