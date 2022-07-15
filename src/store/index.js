import { getItem, setItem } from '@/utils/storage'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const TOKEN_KEY = 'HAOKE_USER'
export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_KEY)
  },
  getters: {},

  mutations: {
    setUser (state, data) {
      state.user = data
      setItem(TOKEN_KEY, state.user)
    }
  },
  actions: {},
  modules: {}
})
