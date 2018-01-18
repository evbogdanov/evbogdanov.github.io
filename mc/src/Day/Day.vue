<template lang="pug">
	.day
		.day__name
			input.input.input_big(
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
		.day__revenue
			a.day__delete-link(
				v-if="!day.records.length"
				href="#"
				@click="deleteDay"
			) +
			span(v-else) {{ dailyRevenue.toFixed(2) }}
</template>

<script src="./Day.js"></script>

<style lang="scss" src="./Day.scss"></style>
