<template lang="pug">
	.table
		.table__head
			.table__column-name Day
			.table__column-name Quantity
			.table__column-name Price
			.table__column-name Daily revenue
			.table__column-name Total revenue

		.table__body
			.table__days
				app-day(
					v-for="(day, i) in days"
					v-on:recordAdded="addNewRecordForDay"
					v-on:recordChanged="updateRecord"
					v-on:dayNameChanged="updateDayName"
					:key="i"
					:index="i"
					:name="day.name"
					:records="day.records"
					:daily-revenue="dailyRevenues[i]"
				)
				.table__day
					a.table__new-day(
						href="#"
						@click="addNewDay"
					) New day
			.table__total-revenue {{ totalRevenue }}
</template>

<script src="./Table.js"></script>

<style lang="scss" src="./Table.scss"></style>
