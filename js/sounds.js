export const sounds = {
  rainSound: new Audio('./sounds/Chuva.wav'),
  forestSound: new Audio('./sounds/Floresta.wav'),
  cafeteriaSound: new Audio('./sounds/Cafeteria.wav'),
  fireSound: new Audio('./sounds/Lareira.wav'),

  stopSounds(sound1, sound2, sound3) {
    sound1.pause()
    sound2.pause()
    sound3.pause()
  }
}

sounds.rainSound.loop = true
sounds.cafeteriaSound.loop = true
sounds.fireSound.loop = true
sounds.forestSound.loop = true
