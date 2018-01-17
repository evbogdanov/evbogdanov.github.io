import { mapGetters } from 'vuex'

export default {
	computed: mapGetters(['isRussianLang', 'isEnglishLang']),
	methods: {
		switchLangToEnglish(ev) {
			ev.preventDefault()
			this.$store.commit('switchLangToEnglish')
		},
		switchLangToRussian(ev) {
			ev.preventDefault()
			this.$store.commit('switchLangToRussian')
		}
	}
}
