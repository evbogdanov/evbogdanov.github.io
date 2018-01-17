import { LANG_STORAGE_KEY, DAYS_STORAGE_KEY } from './local-storage'

export const state = {
	lang: window.localStorage.getItem(LANG_STORAGE_KEY) || 'en',
	days: JSON.parse(window.localStorage.getItem(DAYS_STORAGE_KEY) || '[]')
}
