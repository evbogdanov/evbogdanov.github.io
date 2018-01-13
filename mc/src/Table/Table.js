import Day from '../Day/Day.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    'app-day': Day
  },

  computed: mapGetters([
    'days',
    'dailyRevenues',
    'totalRevenue'
  ]),

  methods: {
    addNewDay(ev) {
      ev.preventDefault()
      this.$store.commit('addNewDay')
    }
  }
}
