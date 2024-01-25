import state from './state.js'
import * as timer from './timer.js'
import * as events from './events.js'

export function play () {
  state.isRunning = true
  timer.countdown()
}

export function reset () {
  state.isRunning = false  
  state.minutes = 0
  state.seconds = 0
  timer.uptadeDisplay()
}

export function aumentar () {
  state.minutes = state.minutes + 5
  timer.uptadeDisplay()
}

export function diminuir () {
  events.setMinutes()
}





