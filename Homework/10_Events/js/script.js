function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('down');
  console.log(key);
}

function removeTransition(element) {
  if (element.propertyName !== 'transform') return;
  this.classList.remove('down');
}

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
  key.onclick = function () {
    const audio = document.querySelector(
      `audio[data-key="${key.dataset.key}"]`
    );
    audio.currentTime = 0;
    audio.play();
    key.classList.add('down');
  };
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
