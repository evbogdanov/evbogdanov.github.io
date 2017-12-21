/*******************************************************************************
 *** State
 ******************************************************************************/

const state = {
  elHours:   null,
  elMinutes: null,
  elSeconds: null,

  initialUnixtime:   null,
  initialDegHours:   null,
  initialDegMinutes: null,
  initialDegSeconds: null,

  degHours:   null,
  degMinutes: null,
  degSeconds: null,

  diff: 0
}


/*******************************************************************************
 *** Update state
 ******************************************************************************/

function setInitialState(now) {
  const unixtime = now.getTime(),
        seconds  = now.getSeconds(),
        minutes  = now.getMinutes(),
        hours    = now.getHours()

  state.initialUnixtime = unixtime
  state.degHours        = state.initialDegHours   = (hours * 360 / 12) +
                                                    (minutes * 360 / 12 / 60)
  state.degMinutes      = state.initialDegMinutes = (minutes * 360 / 60) +
                                                    (seconds * 360 / 60 / 60)
  state.degSeconds      = state.initialDegSeconds = seconds * 360 / 60
}

function updateState(now) {
  const unixtime = now.getTime(),
        diff     = Math.round((unixtime - state.initialUnixtime) / 1000)
  
  if (diff === state.diff)
    return false

  state.diff       = diff
  state.degHours   = state.initialDegHours + (360 / 12 / 3600) * diff
  state.degMinutes = state.initialDegMinutes + (360 / 60 / 60) * diff
  state.degSeconds = state.initialDegSeconds + (360 / 60) * diff

  return true
}


/*******************************************************************************
 *** Update UI
 ******************************************************************************/

function render() {
  state.elHours.style.transform   = `rotate(${state.degHours}deg)`
  state.elMinutes.style.transform = `rotate(${state.degMinutes}deg)`
  state.elSeconds.style.transform = `rotate(${state.degSeconds}deg)`
}


/*******************************************************************************
 *** Tick
 ******************************************************************************/

function tick() {
  let now          = new Date(),
      shouldRender = true

  if (state.initialUnixtime === null)
    setInitialState(now)
  else
    shouldRender = updateState(now)

  if (shouldRender)
    render()
}


/*******************************************************************************
 *** Let's go
 ******************************************************************************/

function main() {
  state.elHours   = document.querySelector('.clock__layer_hours')
  state.elMinutes = document.querySelector('.clock__layer_minutes')
  state.elSeconds = document.querySelector('.clock__layer_seconds')
  
  setInterval(tick, 200)
}

document.addEventListener('DOMContentLoaded', main)
