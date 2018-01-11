import Day from '../Day/Day.vue'

export default {
  components: {
    'app-day': Day
  },

  data() {
    return {
      days: []
    }
  },

  computed: {
    dailyRevenues() {
      return this.days.map(day => {
        return day.records.reduce((revenue, record) => {
          const price = parseFloat(record.price) || 0,
                quantity = parseInt(record.quantity, 10) || 0
          return revenue + price * quantity
        }, 0)
      })
    },
    totalRevenue() {
      return this.dailyRevenues.reduce((total, daily) => total + daily, 0)
    }
  },

  methods: {
    addNewDay(ev) {
      ev.preventDefault()
      this.days.push({name: '', records: []})
    },
    addNewRecordForDay(dayIndex) {
      this.days[dayIndex].records.push({price: '', quantity: ''})
    },
    updateRecord(dayIndex, recordIndex, price, quantity) {
      this.days[dayIndex].records[recordIndex].price = price
      this.days[dayIndex].records[recordIndex].quantity = quantity
    },
    updateDayName(dayIndex, dayName) {
      this.days[dayIndex].name = dayName
    }
  }
}
