// import _ from 'lodash'
import hello from './module'
import './main.css'

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
