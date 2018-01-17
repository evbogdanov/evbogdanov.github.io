function addEmptyDay(state) {
	state.days.push({
		name: '',
		records: []
	})
}

function addEmptyRecord(day) {
	day.records.push({
		price: '',
		quantity: ''
	})
}

export const mutations = {
	switchLangToEnglish(state) {
		state.lang = 'en'
	},

	switchLangToRussian(state) {
		state.lang = 'ru'
	},

	addNewDay(state) {
		addEmptyDay(state)
		const dayIndex = state.days.length - 1,
			day = state.days[dayIndex]
		addEmptyRecord(day)
	},

	updateDayName(state, { day, name }) {
		day.name = name
	},

	addNewRecord(state, day) {
		addEmptyRecord(day)
	},

	updateRecordQuantity(state, { record, quantity }) {
		record.quantity = quantity
	},

	updateRecordPrice(state, { record, price }) {
		record.price = price
	},

	clearDays(state) {
		state.days = []
	}
}
