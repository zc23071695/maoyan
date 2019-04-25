import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Vant, { Tab, Tabs, List, Search } from 'vant'
import city from './vuex/city.js'
import './css/style.scss'
import VueResource from 'vue-resource'
import 'vant/lib/index.css'
Vue.use(VueResource)
Vue.use(Vant)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Search)

Vue.config.productionTip = false

new Vue({
  city,
  router,
  render: h => h(App)
}).$mount('#app')
