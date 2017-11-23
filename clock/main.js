// TODO: fix animation when tab is inactive
// https://stackoverflow.com/questions/5927284/how-can-i-make-setinterval-also-work-when-a-tab-is-inactive-in-chrome

const els = {seconds: null, minutes: null, hours: null},
      degs = {seconds: null, minutes: null, hours: null}

function render() {
  if (degs.seconds === null) {
    const now = new Date(),
          seconds = now.getSeconds(),
          minutes = now.getMinutes(),
          hours = now.getHours()
    degs.seconds = seconds * 360 / 60
    degs.minutes = (minutes * 360 / 60) + (seconds * 360 / 60 / 60)
    degs.hours = (hours * 360 / 12) + (minutes * 360 / 12 / 60)
  }
  else {
    degs.seconds += 360 / 60
    degs.minutes += 360 / 60 / 60
    degs.hours += 360 / 12 / 3600
  }
  els.seconds.style.transform = `rotate(${degs.seconds}deg)`
  els.minutes.style.transform = `rotate(${degs.minutes}deg)`
  els.hours.style.transform = `rotate(${degs.hours}deg)`
}

function main() {
  els.seconds = document.querySelector('.seconds')
  els.minutes = document.querySelector('.minutes')
  els.hours = document.querySelector('.hours')
  setInterval(render, 1000)
}

document.addEventListener('DOMContentLoaded', main)
