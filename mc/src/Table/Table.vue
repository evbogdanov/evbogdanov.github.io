<template lang="pug">
	.table
		.table__head
			.table__column-name
				app-trans(
					en="Day"
					ru="День"
				)
			.table__column-name
				app-trans(
					en="Quantity"
					ru="Количество"
				)
			.table__column-name
				app-trans(
					en="Price"
					ru="Цена"
				)
			.table__column-name
				app-trans(
					en="Daily revenue"
					ru="Дневная выручка"
				)
			.table__column-name
				app-trans(
					en="Total revenue"
					ru="Общая выручка"
				)

		.table__body
			.table__days
				app-day(
					v-for="(day, i) in days"
					:key="i"
					:day="day"
					:daily-revenue="dailyRevenues[i]"
				)
				.table__new-day
					a.table__new-day-link(
						href="#"
						@click="addNewDay"
					)
						app-trans(
							en="New day"
							ru="Новый день"
						)
			.table__total-revenue {{ totalRevenue.toFixed(2) }}
</template>

<script src="./Table.js"></script>

<style lang="scss" src="./Table.scss"></style>
