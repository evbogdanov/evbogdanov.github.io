import Vue from 'vue'
import App from './App/App.vue'
import Translation from './Translation/Translation.vue'
import store from './store'

Vue.component('app-trans', Translation)

new Vue({
	el: '.app',
	store,
	render: h => h(App)
})
