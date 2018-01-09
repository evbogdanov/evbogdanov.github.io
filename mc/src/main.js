import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Table from './Table.vue'

Vue.component('app-header', Header)
Vue.component('app-table', Table)

new Vue({
  el: '.app',
  render: h => h(App)
})
