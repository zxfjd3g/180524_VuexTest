import Vue from 'vue'

import App from './App.vue'
import store from './vuex/store'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>', // 将<App/>渲染到页面的el元素中
  store
})
