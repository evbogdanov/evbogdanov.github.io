<template lang="pug">
	.day
		.day__name
			input.table__input.table__input_big(
				type="text"
				:value="day.name"
				@input="updateName"
			)
		.day__records
			app-record(
				v-for="(record, i) in day.records"
				:key="i"
				:record="record"
			)
			.day__new-record
				a.day__new-record-link(
					href="#"
					@click="addNewRecord"
				) +
		.day__revenue {{ dailyRevenue.toFixed(2) }}
</template>

<script src="./Day.js"></script>

<style lang="scss" src="./Day.scss"></style>
