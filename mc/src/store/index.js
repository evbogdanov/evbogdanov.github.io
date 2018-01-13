import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lang: 'en',
  days: [] // [{ name, records: [{price, quantity}] }]
}

const getters = {
  isRussianLang(state) {
    return state.lang === 'ru'
  },

  isEnglishLang(state) {
    return state.lang === 'en'
  },

  days(state) {
    return state.days
  },

  dailyRevenues(state) {
    return state.days.map(day => {
      return day.records.reduce((revenue, record) => {
        const price = parseFloat(record.price) || 0,
              quantity = parseInt(record.quantity, 10) || 0
        return revenue + price * quantity
      }, 0)
    })
  },

  totalRevenue(state, getters) {
    return getters.dailyRevenues.reduce((total, daily) => {
      return total + daily
    }, 0)
  }

}

function addEmptyDay(state) {
  state.days.push({
    name: '',
    records: []
  })
}

function addEmptyRecord(day) {
  day.records.push({
    price: '',
    quantity: ''
  })
}

const mutations = {
  switchLangToEnglish(state) {
    state.lang = 'en'
  },

  switchLangToRussian(state) {
    state.lang = 'ru'
  },

  addNewDay(state) {
    addEmptyDay(state)
    const dayIndex = state.days.length - 1,
          day = state.days[dayIndex]
    addEmptyRecord(day)
    addEmptyRecord(day)
    addEmptyRecord(day)
  },

  updateDayName(state, {day, name}) {
    day.name = name
  },

  addNewRecord(state, day) {
    addEmptyRecord(day)
  },

  updateRecordQuantity(state, {record, quantity}) {
    record.quantity = quantity
  },

  updateRecordPrice(state, {record, price}) {
    record.price = price
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})
