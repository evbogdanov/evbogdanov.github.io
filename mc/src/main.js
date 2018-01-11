import Vue from 'vue'
import App from './App/App.vue'
import Header from './Header/Header.vue'
import Table from './Table/Table.vue'

Vue.component('app-header', Header)
Vue.component('app-table', Table)

new Vue({
  el: '.app',
  render: h => h(App)
})
