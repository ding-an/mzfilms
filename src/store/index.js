import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  //当前城市，默认北京
  currentCity: {
    cityId: '310100',
    name: '上海',
    pinyin: 'shanghai'
  },
  //当前电影列表
  films: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
