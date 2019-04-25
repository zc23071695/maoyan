import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieList: [1, 5, 6]
  },
  mutations: {
    setList(state, list) {
      state.movieList = list
    }
  },
  actions: {
    getList({ commit }) {
      Axios.get(
        '/maoyan/ajax/comingList?ci=30&token=3WfWQnZplDpXQ3q7ZqeBGMdTGW0AAAAAPAgAAGMmxf8otzxNym35VHVI_x5s-EDAmg5krV7WMHljzuBlw5nLup4eJ27vP5LSorhZPg&limit=10'
      ).then(res => {
        console.log(res.data)
        commit('setList', res.data.coming)
      })
    }
  }
})
