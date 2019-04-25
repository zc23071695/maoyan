import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import { Tab, Tabs,List,Search } from 'vant'

import './css/style.scss'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant)
    .use(Tab)
    .use(Tabs)
    .use(List)
    .use(Search)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
