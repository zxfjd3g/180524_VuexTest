/*
包含n个getter计算属性的方法的对象
 */
export default {

  // 总数量
  totalCount (state) {
    return state.todos.length
  },

  // 完成的数量
  completeCount (state) {
    return state.todos.reduce((preTotal, todo) => preTotal + (todo.complete?1:0), 0)
  },

  // 是否需要全选
  isSelectAll (state, getters) {
    return getters.totalCount===getters.completeCount && getters.completeCount>0
  }
}