<template lang="pug">
	.table__day
		.table__day-name
			input.table__input.table__input_big(
				type="text"
				:value="name"
				@input="updateName"
			)
		.table__records
			app-record(
				v-for="(record, i) in records"
				v-on:recordChanged="updateRecord"
				:key="i"
				:index="i"
				:quantity="record.quantity"
				:price="record.price"
			)
			.table__record
				a.table__new-record(
					href="#"
					@click="addNewRecord"
				) New record
		.table__daily-revenue {{ dailyRevenue }}
</template>

<script src="./Day.js"></script>
