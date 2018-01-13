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
