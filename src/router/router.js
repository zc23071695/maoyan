import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../components/index/Index.vue'
import Movie from '../components/index/Movie.vue'
import Cinema from '../components/index/Cinema.vue'
import User from '../components/index/User.vue'
import City from '../components/city/City.vue'
import Serch from '../components/serch/Serch.vue'
import Detail from '../components/detail/Detail.vue'

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      { path: 'movie', component: Movie, name:'movie', meta: { tabNumber: 0 }},
      { path: 'cinema', component: Cinema, name:'cinema', meta: { tabNumber: 1 }},
      { path: 'user', component: User, name:'user', meta: { tabNumber: 2 }},
      { path: '', redirect: '/movie/NowHot'}
    ]
  },
  { path: '/movie/:id', component: Detail, name: 'detail' },
  { path: 'city', component: City, name: 'city' },
  { path: 'serch', component: Serch, name: 'serch' },
  { path: '*', redirect: '/movie/NowHot' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;
