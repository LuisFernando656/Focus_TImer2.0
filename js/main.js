import {
  buttonPlay,
  minutesDisplay,
  secondsDisplay,
  buttonAdd,
  buttonDec,
  buttonStop,
  buttonTree,
  buttonRain,
  buttonCafe,
  buttonFire,
  bodyBackground
} from './config.js'
import Customize from './customize.js'
import Timer from './timer.js'
import Controls from './controls.js'

const controls = Controls({buttonPlay})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const customize = Customize({
  bodyBackground,
  buttonCafe,
  buttonRain,
  buttonFire,
  buttonTree
})

buttonPlay.addEventListener('click', function(){
  timer.countdown()
  timer.deefaultMinutes()
  controls.lockButtonPlay()
})

buttonStop.addEventListener('click', function() {
  controls.reset()
  timer.reset()
})

buttonAdd.addEventListener('click', timer.addMinutes)

buttonDec.addEventListener('click', timer.decrementMinutes)

buttonTree.addEventListener('click', customize.buttonTreeClick)

buttonRain.addEventListener('click', customize.buttonRainClick)

buttonCafe.addEventListener('click', customize.buttonCafeClick)

buttonFire.addEventListener('click', customize.buttonFireClick)