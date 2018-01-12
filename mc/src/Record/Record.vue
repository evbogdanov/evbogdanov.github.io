<template lang="pug">
	.record
		.record__quantity
			input.table__input(
				type="text"
				:value="quantity"
				@input="quantityChanged"
			)
		.record__price
			input.table__input(
				type="text"
				:value="price"
				@input="priceChanged"
			)
</template>

<script src="./Record.js"></script>

<style lang="scss" src="./Record.scss"></style>
