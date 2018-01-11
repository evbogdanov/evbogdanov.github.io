import Record from '../Record/Record.vue'

export default {
  props: [
    'index',
    'name',
    'records',
    'daily-revenue'
  ],
  components: {
    'app-record': Record
  },
  methods: {
    addNewRecord(ev) {
      ev.preventDefault()
      this.$emit('recordAdded', this.index)
    },
    updateRecord(recordIndex, price, quantity) {
      this.$emit('recordChanged', this.index, recordIndex, price, quantity)
    },
    updateName(ev) {
      this.$emit('dayNameChanged', this.index, ev.target.value)
    }
  }
}
