/*
vuex最核心管理对象
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 包含状态数据的对象, 相当于data
const state = {
  count: 1
}

/*
包含n个用于直接更新状态数据的方法的对象
 */
const mutations = {
  // 增加1
  INCREMENT (state) {
    state.count++
  },
  // 减少1
  DECREMENT (state) {
    state.count--
  }
}

/*
包含n个用于间接更新状态数据的方法的对象,
通过调用commit()来触发某个mutation调用
 */
const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },

  decrement ({commit}) {
    commit('DECREMENT')
  },

  incrementIfOdd ({commit, state}) {
    if(state.count%2===1) {
      commit('INCREMENT')
    }
  },

  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

/*
包含n个get计算属性方法的对象
 */
const getters = {
  evenOrOdd (state) {
    return state.count%2===0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})