const URL_SHORTCUTS = 'shortcuts.json',
	KEY_ENTER = 13,
	REPLACE = '{{s}}'

let EL_LINK = null,
	EL_SEARCH = null,
	EL_DISMISS = null

function handleKey(key) {
	if (key !== KEY_ENTER) return

	const link = EL_LINK.innerText
	if (link) window.open(link)
}

function handleInput(input, shortcuts) {
	EL_DISMISS.style.display = input ? 'block' : 'none'

	const words = input.split(' ')
	let link = ''
	if (words.length >= 2) {
		const shortcut = words[0]
		words.shift()
		if (shortcuts.hasOwnProperty(shortcut)) {
			const searchQuery = encodeURIComponent(words.join(' '))
			link = shortcuts[shortcut].replace(REPLACE, searchQuery)
		}
	}

	EL_LINK.innerText = link
	EL_LINK.href = link
}

function handleDismiss() {
	EL_SEARCH.value = ''
	EL_LINK.innerText = ''
	EL_DISMISS.style.display = 'none'
	EL_SEARCH.focus()
}

function processShortcuts(shortcuts) {
	EL_SEARCH.addEventListener('keyup', function(ev) {
		handleKey(ev.which)
	})
	EL_SEARCH.addEventListener('input', function(ev) {
		handleInput(ev.target.value, shortcuts)
	})
	EL_DISMISS.addEventListener('click', handleDismiss)
}

function main() {
	EL_LINK = document.getElementById('link-in')
	EL_SEARCH = document.getElementById('search')
	EL_DISMISS = document.getElementById('dismiss')

	fetch(URL_SHORTCUTS)
		.then(response => response.json())
		.then(shortcuts => processShortcuts(shortcuts))
		.catch(() => console.error('No shortcuts'))
}

document.addEventListener('DOMContentLoaded', main)
