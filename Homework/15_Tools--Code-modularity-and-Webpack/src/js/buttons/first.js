import { homeworkFunctionsObject as functions } from '../functions'

const thirdHomeWorkCardInput = document.querySelector('.first-card--input')
export const thirdHomeWorkCardButton =
	document.querySelector('#getMaxDigitButton')

thirdHomeWorkCardButton.addEventListener('click', () => {
	const number = thirdHomeWorkCardInput.value
	const maxDigit = functions.third(number)
	console.log(`Max digit of ${number} is ${maxDigit}`)
	document.querySelector(
		'.first-card-result__wrapper'
	).innerHTML = `<span class="result">Результат: ${maxDigit}</span>`
})
