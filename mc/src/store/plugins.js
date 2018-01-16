import { LANG_STORAGE_KEY, DAYS_STORAGE_KEY } from './local-storage'

const localStoragePlugin = store => {
	store.subscribe((mutation, { days, lang }) => {
		window.localStorage.setItem(LANG_STORAGE_KEY, lang)
		window.localStorage.setItem(DAYS_STORAGE_KEY, JSON.stringify(days))
	})
}

export default [localStoragePlugin]
