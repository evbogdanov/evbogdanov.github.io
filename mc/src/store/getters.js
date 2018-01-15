import { getRevenue } from '../util'

export const getters = {
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
        return revenue + getRevenue(record.price, record.quantity)
      }, 0)
    })
  },

  totalRevenue(state, getters) {
    return getters.dailyRevenues.reduce((total, daily) => {
      return total + daily
    }, 0)
  }

}
