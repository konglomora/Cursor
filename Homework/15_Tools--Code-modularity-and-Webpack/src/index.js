import hello from './js/module'
import '../src/main.scss'
import getMaxDigit from '/Users/arseniinetrebenko/Documents/Programming/Cursor/Homework/03_Functions/js/script'

const item = {
	name: 'console of browser',
}

const button = document.querySelector('#getMaxDigitButton')
button.addEventListener('click', () => {
	console.log('Max digit:');
	console.log(getMaxDigit(Math.random()))
})
console.log(button)

console.log(hello(item.name))
console.log(getMaxDigit(1234))
