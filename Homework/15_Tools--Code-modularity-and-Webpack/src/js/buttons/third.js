import { homeworkFunctionsObject as functions } from '../functions'

export const fifthhomeworkButton = document.querySelector(
	'#getRandomArrayButton'
)

fifthhomeworkButton.addEventListener('click', () => {
	const arrayLength = document.querySelector(
		'.third-card-array-length--input'
	).value
	const minNumberOfArray = document.querySelector(
		'.third-card-min--input'
	).value
	const maxNumberOfArray = document.querySelector(
		'.third-card-max--input'
	).value
	const randomArray = functions.fifth(
		arrayLength,
		minNumberOfArray,
		maxNumberOfArray
	)
	if (Array.isArray(randomArray)) {
		document.querySelector('.third-card-result__wrapper').innerHTML = `
    <span class="result">Result: [${randomArray}]</span>
    `
	} else {
		document.querySelector('.third-card-result__wrapper').innerHTML = `
    <span class="result">Result: ${randomArray}</span>
    `
	}
})
