import * as actions from './actions.js'
import * as el from './elements.js'
import state from './state.js'
import { uptadeDisplay } from './timer.js'
import * as sounds from './sounds.js'

export function registerControls () {
  el.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != 'function') {
      return
    }
    
    actions[action]()
  })
}

export function registerSounds () {
  el.sounds.addEventListener('click', function (event) {
    if (state.isMute == false) {
      state.isMute = true
      sounds.fire.pause()
      sounds.lofi.pause()
      sounds.floresta.pause()
      sounds.rain.pause()
      return
    } 
    
    state.isMute = false
    const action = event.target.dataset.action
    
    switch (action) {
      case 'floresta' :
        sounds.floresta.play()
        break
      case 'rain' :
        sounds.rain.play() 
        break
      case 'lofi' :
        sounds.lofi.play() 
        break
      case 'fire' :
        sounds.fire.play()  
    }
  })
}

export function setMinutes() {
  if (state.minutes < 6) {
    return
  }
  state.minutes = state.minutes - 5
  uptadeDisplay()
}  
 



