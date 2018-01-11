<template>
  <div class="table__record">
    <div class="table__quantity">
      <input class="table__input" type="text" :value="quantity" @input="quantityChanged">
    </div>
    <div class="table__price">
      <input class="table__input" type="text" :value="price" @input="priceChanged">
    </div>
  </div>  
</template>

<script src="./Record.js"></script>
