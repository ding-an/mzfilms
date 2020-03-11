import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  currentCity: {
    cityId: '110100',
    name: '北京',
    pinyin: 'beijing'
  },
  films: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
