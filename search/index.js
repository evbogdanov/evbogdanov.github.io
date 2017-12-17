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

function handleKey(key, shortcuts, elLink, elSearch, elDismiss) {
  const isEnter = key === KEY_ENTER,
        searchText = elSearch.value,
        words = searchText.split(' ')
  let link = ''

  if (searchText)
    elDismiss.style.display = 'block'
  else
    elDismiss.style.display = 'none'

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
        elSearch = document.getElementById('search'),
        elDismiss = document.getElementById('dismiss')
  readShortcuts(function (shortcuts) {
    if (!shortcuts) {
      console.error('No shortcuts')
      return
    }
    elSearch.addEventListener('keyup', function (ev) {
      handleKey(ev.which, shortcuts, elLink, elSearch, elDismiss)
    })
    elDismiss.addEventListener('click', function () {
      elSearch.value = ''
      elLink.innerText = ''
      elDismiss.style.display = 'none'
      elSearch.focus()
    })
  })
}

document.addEventListener('DOMContentLoaded', main)
