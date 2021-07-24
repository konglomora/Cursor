// import _ from 'lodash'
import hello from './module'
import './main.scss'
import getMaxDigit from '/Users/arseniinetrebenko/Documents/Programming/Cursor/Homework/03_Functions/js/script'
// function component() {
// 	const element = document.createElement('div')

	// Lodash, now imported by this script
// 	element.innerHTML = _.join(['Hello', 'webpack'], ' ')

// 	return element
// }

// document.body.appendChild(component())

const item = {
	name: 'console of browser',
}

console.log(hello(item.name))
console.log(getMaxDigit(1234))

