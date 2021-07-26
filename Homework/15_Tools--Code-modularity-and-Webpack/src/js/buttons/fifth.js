import { homeworkFunctionsObject as functions } from '../functions'

const seventhHomeworkButton = document.querySelector('#getTaxesButton')

seventhHomeworkButton.addEventListener('click', () => {
	const selectedCountry = document.querySelector(
		'#fifth-card-country-select'
	).value
	const countryObject = functions.seventh[`${selectedCountry}`]
	const userSalary = document.querySelector('.fifth-card--input').value
	const tax = functions.seventh.getMyTaxes.call(countryObject, userSalary)
	document.querySelector(
		'.fifth-card-result__wrapper'
	).innerHTML = `<span class="result">Result: <br /> ${tax}</span>`
})
