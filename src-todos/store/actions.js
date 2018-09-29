/*
包含n个用于间接更新状态数据的方法的对象
 */
import storageUtils from '../utils/storageUtils'
import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL,
  DELETE_COMPLETE,
  RECEIVE_TODOS
} from './mutation-types'

export default {

  addTodo ({commit}, todo) {
    commit(ADD_TODO, {todo})
  },

  deleteTodo ({commit}, index) {
    commit(DELETE_TODO, {index})
  },

  selectAll ({commit}, isCheck) {
    commit(SELECT_ALL, {isCheck})
  },

  deleteComplete ({commit}) {
    commit(DELETE_COMPLETE)
  },

  getTodos ({commit}) {
    // 异步获取数据
    setTimeout(() => {
      const todos = storageUtils.readTodos()
      // 得到数据后, commit更新状态
      commit(RECEIVE_TODOS, {todos})
    }, 1000)

  }
}