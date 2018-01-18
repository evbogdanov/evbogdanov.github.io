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
					ru="Доход"
				)
			.table__column-name
				app-trans(
					en="Daily revenue"
					ru="Дневной доход"
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
					@click="showModal"
				)
					app-trans(
						en="Clear"
						ru="Сброс"
					)
		.table__modal(
			v-if="modalShown"
		)
			.table__modal-box
				.table__modal-heading
					app-trans(
						en="Clear?"
						ru="Сбросить?"
					)
				a.table__modal-action(
					href="#"
					@click="hideModalAndClearDays"
				)
					app-trans(
						en="Yes"
						ru="Да"
					)
				a.table__modal-action(
					href="#"
					@click="hideModal"
				)
					app-trans(
						en="No"
						ru="Нет"
					)
</template>

<script src="./Table.js"></script>

<style lang="scss" src="./Table.scss"></style>
