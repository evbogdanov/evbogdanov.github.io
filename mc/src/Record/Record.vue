<template lang="pug">
	.record
		.record__quantity
			input.input(
				type="text"
				:value="record.quantity"
				@input="quantityChanged"
			)
		.record__price
			input.input(
				type="text"
				:value="record.price"
				@input="priceChanged"
			)
		.record__revenue {{ revenue.toFixed(2) }}
</template>

<script src="./Record.js"></script>

<style lang="scss" src="./Record.scss"></style>
