import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  count: 1
}

var mutations = {
  incCount(){
    ++state.count;
  }
}

const store = new Vuex.Store({
  state,
  mutations:mutations
})

export default store
