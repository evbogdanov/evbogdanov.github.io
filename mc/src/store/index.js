import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lang: 'en'
}

const getters = {
  isRussianLang(state) {
    return state.lang === 'ru'
  },
  isEnglishLang(state) {
    return state.lang === 'en'
  }
}

const mutations = {
  switchLangToEnglish(state) {
    state.lang = 'en'
  },
  switchLangToRussian(state) {
    state.lang = 'ru'
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
