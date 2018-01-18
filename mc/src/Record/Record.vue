<template lang="pug">
	.record
		.record__quantity
			input.input(
				type="number"
				min="0"
				:value="record.quantity"
				@input="quantityChanged"
			)
		.record__price
			input.input(
				type="number"
				min="0"
				step="any"
				:value="record.price"
				@input="priceChanged"
			)
		.record__revenue
			a.record__delete-link(
				v-if="!record.quantity && !record.price"
				href="#"
				@click="deleteRecord"
			) +
			span(v-else) {{ revenue.toFixed(2) }}
</template>

<script src="./Record.js"></script>

<style lang="scss" src="./Record.scss"></style>
