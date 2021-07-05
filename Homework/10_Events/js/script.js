function playSound(element) {
  const audio = document.querySelector(`audio[data-key="${element.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${element.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('down');
}

function removeTransition(element) {
  if (element.propertyName !== 'transform') return;
  this.classList.remove('down');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
