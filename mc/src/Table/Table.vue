<template lang="pug">
	.table(
		:class="{'table_has-days': hasDays}"
	)
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
					en="Revenue"
					ru="Выручка"
				)
			.table__column-name
				app-trans(
					en="Daily revenue"
					ru="Дневная выручка"
				)

		.table__body
			app-day(
				v-for="(day, i) in days"
				:key="i"
				:day="day"
				:daily-revenue="dailyRevenues[i]"
			)
		.table__footer
			.table__new-day
				a.table__new-day-link(
					href="#"
					@click="addNewDay"
				)
					app-trans(
						en="New day"
						ru="Новый день"
					)
			.table__total-revenue
				app-trans(
					en="Total:"
					ru="Итого:"
				)
				span.table__total-revenue-number {{ totalRevenue.toFixed(2) }}
			.table__clear-days
				a.table__clear-days-link(
					href="#"
					@click="clearDays"
				)
					app-trans(
						en="Clear"
						ru="Сброс"
					)

</template>

<script src="./Table.js"></script>

<style lang="scss" src="./Table.scss"></style>
