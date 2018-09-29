<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
          <span>已完成{{completeCount}}</span> / 全部{{totalCount}}
        </span>
    <button class="btn btn-danger" v-show="completeCount" @click="deleteComplete">清除已完成任务</button>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {

    computed: {
      ...mapGetters(['totalCount', 'completeCount', 'isSelectAll']),

      isCheck: {
        get () { // 计算得到一个决定是否勾选的boolean值
          return this.isSelectAll
        },

        set (value) { // 用户操作勾选框时调用
          // this.selectAll(value)
          this.$store.dispatch('selectAll', value)
        }
      }
    },

    methods: {
      deleteComplete () {
        this.$store.dispatch('deleteComplete')
      }
    }
  }
</script>
<style>
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>