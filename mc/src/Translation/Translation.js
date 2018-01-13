import { mapGetters } from 'vuex'

export default {
  props: [
    'en',
    'ru'
  ],
  computed: mapGetters([
    'isRussianLang'
  ])
}
