import { getRevenue } from '../util'

export default {
	props: ['record'],

	computed: {
		revenue() {
			return getRevenue(this.record.price, this.record.quantity)
		}
	},

	methods: {
		quantityChanged(ev) {
			this.$store.commit({
				type: 'updateRecordQuantity',
				record: this.record,
				quantity: ev.target.value
			})
		},

		priceChanged(ev) {
			this.$store.commit({
				type: 'updateRecordPrice',
				record: this.record,
				price: ev.target.value
			})
		},

		deleteRecord(ev) {
			ev.preventDefault()
			this.$store.commit('deleteRecord', this.record)
		}
	}
}
