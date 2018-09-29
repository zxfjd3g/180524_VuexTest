/*
操作local storage数据的工具模块
 */
const TODOS_KEY = 'todos_key'
export default {
  // 保存todos
  saveTodos (todos) {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  // 读取todos
  readTodos () {
    return JSON.parse(localStorage.getItem(TODOS_KEY) || '[]')
  }
}