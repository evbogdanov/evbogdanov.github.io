<template>
  <div class="table__record">
    <div class="table__quantity">
      <input class="table__input" type="text" :value="quantity" v-on:input="quantityChanged">
    </div>
    <div class="table__price">
      <input class="table__input" type="text" :value="price" v-on:input="priceChanged">
    </div>
  </div>  
</template>

<script>
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
</script>
