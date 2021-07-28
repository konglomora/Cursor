import { homeworkFunctionsObject as functions } from '../functions'

export const sixthhHomeworkButton = document.querySelector(
	'#getStudentinfoButton'
)

sixthhHomeworkButton.addEventListener('click', () => {
	document.querySelector(
		'.sixth-card-result__wrapper'
	).innerHTML = `<span class="result">Result: <br /> ${functions.eighth.regularStudent.getInfo()}</span>`
})
