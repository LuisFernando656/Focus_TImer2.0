import { sounds } from './sounds.js'

export default function Customize({
  bodyBackground,
  buttonCafe,
  buttonRain,
  buttonFire,
  buttonTree
}) {
  const buttonTreeClick = () => {
    buttonSelected(buttonTree, buttonCafe, buttonFire, buttonRain)
    changeColor(120, '100%')
    bodyBackground.classList.add('tree')
    bodyBackground.classList.remove('rain', 'cafe', 'fire')
    sounds.forestSound.play()
    sounds.stopSounds(sounds.cafeteriaSound, sounds.fireSound, sounds.rainSound)
  }

  const buttonRainClick = () => {
    buttonSelected(buttonRain, buttonFire, buttonCafe, buttonTree)
    changeColor(240, '21%')
    bodyBackground.classList.add('rain')
    bodyBackground.classList.remove('cafe', 'tree', 'fire')
    sounds.rainSound.play()
    sounds.stopSounds(
      sounds.cafeteriaSound,
      sounds.fireSound,
      sounds.forestSound
    )
  }

  const buttonCafeClick = () => {
    buttonSelected(buttonCafe, buttonFire, buttonRain, buttonTree)
    changeColor(100, '100%')
    bodyBackground.classList.add('cafe')
    bodyBackground.classList.remove('rain', 'tree', 'fire')
    sounds.cafeteriaSound.play()
    sounds.stopSounds(sounds.rainSound, sounds.fireSound, sounds.forestSound)
  }

  const buttonFireClick = () => {
    buttonSelected(buttonFire, buttonRain, buttonCafe, buttonTree)
    changeColor(45, '100%')
    bodyBackground.classList.add('fire')
    bodyBackground.classList.remove('cafe', 'tree', 'rain')
    sounds.fireSound.play()
    sounds.stopSounds(
      sounds.cafeteriaSound,
      sounds.rainSound,
      sounds.forestSound
    )
  }

  const buttonSelected = (bt1, bt2, bt3, bt4) => {
    bt1.classList.add('selected')
    bt2.classList.remove('selected')
    bt3.classList.remove('selected')
    bt4.classList.remove('selected')
  }

  const changeColor = (cor, blackandwhite) => {
    document.documentElement.style.setProperty('--base-color', cor)
    document.documentElement.style.setProperty('--black-white', blackandwhite)
  }

  return {
    buttonCafeClick,
    buttonFireClick,
    buttonRainClick,
    buttonTreeClick
  }
}