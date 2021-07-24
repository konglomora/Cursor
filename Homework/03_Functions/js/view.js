// ! HTML -----------------------------------------------------------------------------------------------

// * Task 1 ---------------------------------------------------------------------------------------------

function runFirstTask() {
	const number = document.querySelector('.function1__input').value
	document.querySelector(
		'.function1__result'
	).innerHTML = `<span class="result">Результат: ${getMaxDigit(number)}</span>`
}

document.querySelector('.function1__submit').onclick = runFirstTask

// * Task 2 ---------------------------------------------------------------------------------------------

function runSecondTask() {
	const num = document.querySelector('.function2__input1').value
	const pow = document.querySelector('.function2__input2').value
	document.querySelector(
		'.function2__result'
	).innerHTML = `<span class="result">Результат: ${getNumPower(
		num,
		pow
	)}</span>`
}

document.querySelector('.function2__submit').onclick = runSecondTask

// * Task 3 ---------------------------------------------------------------------------------------------

function runThirdTask() {
	const str = document.querySelector('.function3__input').value
	document.querySelector(
		'.function3__result'
	).innerHTML = `<span class="result">Результат: ${capitalizeFirstletter(
		str
	)}</span>`
}

document.querySelector('.function3__submit').onclick = runThirdTask

// * Task 4 ---------------------------------------------------------------------------------------------

function runFourthTask() {
	const number = document.querySelector('.function4__input').value
	document.querySelector(
		'.function4__result'
	).innerHTML = `<span class="result">Результат: ${getAmountAfterTax(
		number
	)}</span>`
}

document.querySelector('.function4__submit').onclick = runFourthTask

// * Task 5 ---------------------------------------------------------------------------------------------

function runFifthTask() {
	const startNumber = document.querySelector('.function5__input1').value
	const endNumber = document.querySelector('.function5__input2').value
	document.querySelector(
		'.function5__result'
	).innerHTML = `<span class="result">Результат:  ${getRandomNumber(
		startNumber,
		endNumber
	)}</span>`
}

document.querySelector('.function5__submit').onclick = runFifthTask

// * Task 6 ---------------------------------------------------------------------------------------------

function runSixthTask() {
	const letter = document.querySelector('.function6__input1').value
	const str = document.querySelector('.function6__input2').value
	document.querySelector(
		'.function6__result'
	).innerHTML = `<span class="result">Результат:  ${countLetter(
		letter,
		str
	)}</span>`
}

document.querySelector('.function6__submit').onclick = runSixthTask

// * Task 8 ---------------------------------------------------------------------------------------------

function runEighthTask() {
	const n = document.querySelector('.function8__input').value
	document.querySelector(
		'.function8__result'
	).innerHTML = `<div class="result">Результат: ${getRandomPassword(n)}</div>`
}

document.querySelector('.function8__submit').onclick = runEighthTask

// * Task 9 ---------------------------------------------------------------------------------------------

function runNinthTask() {
	const letter = document.querySelector('.function9__input1').value
	const str = document.querySelector('.function9__input2').value
	document.querySelector(
		'.function9__result'
	).innerHTML = `<span class="result">Результат: ${deleteLetters(
		letter,
		str
	)}</span>`
}

document.querySelector('.function9__submit').onclick = runNinthTask

// * Task 10 ---------------------------------------------------------------------------------------------

function runTenthTask() {
	const str = document.querySelector('.function10__input').value
	document.querySelector(
		'.function10__result'
	).innerHTML = `<span class="result">Результат: ${isPalyndrom(str)}</span>`
}

document.querySelector('.function10__submit').onclick = runTenthTask

// * Task 11---------------------------------------------------------------------------------------------

function runEleventhTask() {
	const str = document.querySelector('.function11__input').value
	document.querySelector(
		'.function11__result'
	).innerHTML = `<span class="result">Результат: ${deleteDuplicateLetter(
		str
	)}</span>`
}

document.querySelector('.function11__submit').onclick = runEleventhTask
