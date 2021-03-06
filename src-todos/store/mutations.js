/*
包含n个用于直接更新状态数据的方法的对象
 */
import {
  ADD_TODO,
  DELETE_TODO,
  SELECT_ALL,
  DELETE_COMPLETE,
  RECEIVE_TODOS
} from './mutation-types'

export default {
  [ADD_TODO](state, {todo}) {
    state.todos.unshift(todo)
  },
  [DELETE_TODO](state, {index}) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL](state, {isCheck}) {
    state.todos.forEach(todo => todo.complete = isCheck)
  },
  [DELETE_COMPLETE](state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },
  [RECEIVE_TODOS](state, {todos}) {
    state.todos = todos
  },
}