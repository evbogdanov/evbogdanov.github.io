<template lang="pug">
	.table__record
		.table__quantity
			input.table__input(
				type="text"
				:value="quantity"
				@input="quantityChanged"
			)
		.table__price
			input.table__input(
				type="text"
				:value="price"
				@input="priceChanged"
			)
</template>

<script src="./Record.js"></script>
