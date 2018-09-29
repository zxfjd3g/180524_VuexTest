<template>
  <!--模板中读取的是组件对象的属性数据-->
  <ul class="todo-main">
    <Item v-for="(todo, index) in todos" :key="index" :todo="todo" :index="index"/>
  </ul>
</template>
<script>
  import {mapState} from 'vuex'
  import Item from './Item.vue'
  import storageUtils from '../utils/storageUtils'

  export default {
    computed: {
      ...mapState(['todos'])
    },

    components: {
      Item
    },

    watch: {
      todos: { // 深度监视todos属性
        deep: true,
        handler: storageUtils.saveTodos
      }
    }
  }
</script>
<style>
  .todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
  }

  .todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
  }
</style>