const URL_SHORTCUTS = 'shortcuts.json',
      KEY_ENTER = 13,
      REPLACE = '{{s}}'

function readShortcuts(callback) {
    const request = new XMLHttpRequest()
    request.open('GET', URL_SHORTCUTS, true)
    request.onload = function () {
        if (this.status === 200)
            return callback(JSON.parse(this.response))
        return callback(null)
    }
    request.send()
}

function handleKey(key, shortcuts, elLink, elSearch) {
    const isEnter = key === KEY_ENTER,
          words = elSearch.value.split(' ')
    let link = ''
    if (words.length >= 2) {
        const shortcut = words[0]
        words.shift()
        if (shortcuts.hasOwnProperty(shortcut)) {
            const searchQuery = encodeURIComponent(words.join(' '))
            link = shortcuts[shortcut].replace(REPLACE, searchQuery)
        }
    }
    elLink.innerText = link
    elLink.href = link
    if (isEnter && link)
        window.open(link)
}

function main() {
    const elLink = document.getElementById('link-in'),
          elSearch = document.getElementById('search')
    readShortcuts(function (shortcuts) {
        if (!shortcuts) {
            console.error('No shortcuts')
            return
        }
        elSearch.addEventListener('keyup', function (ev) {
            handleKey(ev.which, shortcuts, elLink, elSearch)
        })
    })
}

document.addEventListener('DOMContentLoaded', main)
