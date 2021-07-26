import { homeworkFunctionsObject as functions } from '../functions'

const sixthHomeworkButton = document.querySelector('#getStudentSubjectsButton')

sixthHomeworkButton.addEventListener('click', () => {
	const studentindex = document.querySelector('.fourth-card--input').value - 1
	document.querySelector(
		'.fourth-card-result__wrapper'
	).innerHTML = `<span class="result">Result: <br /> ${functions.sixth.getSubjects(
		studentindex
	)}</span>`
})
