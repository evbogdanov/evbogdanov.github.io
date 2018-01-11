export default {
  props: [
    'index',
    'price',
    'quantity'
  ],
  methods: {
    quantityChanged(ev) {
      this.$emit('recordChanged', this.index, this.price, ev.target.value)
    },
    priceChanged(ev) {
      this.$emit('recordChanged', this.index, ev.target.value, this.quantity)
    }
  }
}
