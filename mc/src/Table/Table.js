import Day from '../Day/Day.vue'
import { mapGetters } from 'vuex'

export default {
	components: {
		'app-day': Day
	},

	data() {
		return {
			modalShown: false
		}
	},

	computed: mapGetters(['days', 'hasDays', 'dailyRevenues', 'totalRevenue']),

	methods: {
		addNewDay(ev) {
			ev.preventDefault()
			this.$store.commit('addNewDay')
		},

		showModal(ev) {
			ev.preventDefault()
			this.modalShown = true
		},

		hideModal(ev) {
			ev.preventDefault()
			this.modalShown = false
		},

		hideModalAndClearDays(ev) {
			ev.preventDefault()
			this.$store.commit('clearDays')
			this.modalShown = false
		}
	}
}
