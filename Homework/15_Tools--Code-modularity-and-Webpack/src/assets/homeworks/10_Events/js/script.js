import anxyety from '../assets/sounds/anxiety.wav'
import blaster from '../assets/sounds/blaster.wav'
import chameleonTongue from '../assets/sounds//chameleon-tongue.wav'
import drums from  '../assets//sounds/drums.wav'
import jump from '../assets/sounds/jump.wav'
import newFloor from '../assets/sounds/new-floor.wav'
import shurikenThrow from '../assets/sounds/shuriken-throw.wav'
import smallDrums from '../assets/sounds/small-drums.wav'
import spaceMosquito from '../assets/sounds/space-mosquito.wav'
import successfulDownload from '../assets/sounds/successful-download.mov'
import takeoff from '../assets/sounds/takeoff.wav'
import teleport from '../assets/sounds/teleport.wav'

export function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)
	if (!audio) return
	audio.currentTime = 0
	audio.play()
	key.classList.add('down')
}

export function removeTransition() {
	this.classList.remove('down')
}

export const keys = document.querySelectorAll('.key')

keys.forEach(key => {
	key.onclick = function () {
		const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`)
		audio.currentTime = 0
		audio.play()
		key.classList.add('down')
	}
	key.addEventListener('transitionend', removeTransition)
})

window.addEventListener('keydown', playSound)
