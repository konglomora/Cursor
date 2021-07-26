import { homeworkFunctionsObject as functions } from '../functions'

export const fourthHomeworkButton = document.querySelector(
	'#getStudentpairsButton'
)

fourthHomeworkButton.addEventListener('click', () => {
	const studentslist = functions.fourth.studentsArray
	const themes = functions.fourth.themesArray
	const studentsPairs = functions.fourth.getPairs(studentslist)
	const studentsPairsWithThemes = functions.fourth.getPairThemes(themes)
	document.querySelector(
		'.second-card-result__wrapper'
	).innerHTML = `<span class="result">Result: <br /> ${studentsPairsWithThemes[0]} <br/> ${studentsPairsWithThemes[1]} <br/> ${studentsPairsWithThemes[2]}</span>`
})
