<template>
  <div>
    <p>click {{count}} times, count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>
<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {
    /*computed: {
      count () {
        return this.$store.state.count
      },

      evenOrOdd () {
        return this.$store.getters.evenOrOdd
      }
    },*/
    computed: {
      ...mapState(['count']), // mapState()返回对象, 包含指定名称的方法, 方法中读取并返回对应的state数据
      ...mapGetters(['evenOrOdd']) // mapGetters()返回对象, 包含指定名称的方法, 方法中读取并返回对应的getter数据
    },

    /*methods: {
      increment () {
        this.$store.dispatch('increment')
      },
      decrement () {
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
        this.$store.dispatch('incrementAsync')
      },
    }*/
    methods: {
      // mapActions()返回对象, 包含指定名称的方法, 方法中会分发给对应名称的action
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
    }
  }
</script>
<style>

</style>