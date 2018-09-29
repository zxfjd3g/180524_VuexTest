/*
vuex最核心的管理对象
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  firstView: true,
  loading: false,
  users: [],
  errorMsg: ''
}

const mutations = {
  // 请求中
  REQUESTING (state) {
    state.firstView = false
    state.loading = true
    state.users = []
    state.errorMsg = ''
  },

  // 请求成功
  REQ_SUCCESS (state, users) {
    state.loading = false
    state.users = users
  },

  // 请求失败
  REQ_FAIL (state, errorMsg) {
    state.loading = false
    state.errorMsg = errorMsg
  }
}


const actions = {
  async search ({commit}, searchName) {
    // 更新为请求中的状态
    commit('REQUESTING')
    // 发异步ajax请求获取数据
    const url = `http://api.github.com/search/users?q=${searchName}`
    try { // 成功了, 更新为成功的状态
      const response = await axios.get(url)
      const result = response.data
      const users = result.items.map(item => ({
        url: item.html_url,
        avatar_url: item.avatar_url,
        name: item.login
      }))
      commit('REQ_SUCCESS', users)
    } catch (e) { // 失败了, 更新为失败的状态
      console.log('---', e)
      commit('REQ_FAIL', '请求失败')
    }
  }
}

const getters = {}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})