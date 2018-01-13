export default {
  props: [
    'record'
  ],
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
    }
  }
}
