import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    updateIncreaseCount(state) {
      state.count = state.count + 1;
    },
    updateDecreaseCount(state) {
      state.count = state.count - 1;
    }
  },
  actions: {
    increaseCount({ commit }) {
      commit('updateIncreaseCount');
    },
    decreaseCount({ commit }) {
      commit('updateDecreaseCount');
    }
  },
  modules: {
  }
})
