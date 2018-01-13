import Record from '../Record/Record.vue'

export default {
  props: [
    'day',
    'daily-revenue'
  ],

  components: {
    'app-record': Record
  },

  methods: {
    addNewRecord(ev) {
      ev.preventDefault()
      this.$store.commit('addNewRecord', this.day)
    },

    updateName(ev) {
    	this.$store.commit({
    		type: 'updateDayName',
    		day: this.day,
    		name: ev.target.value
    	})
    }
  }
}
