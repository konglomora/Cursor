import { homeworkFunctionsObject as functions } from '../functions'

export const fourthHomeworkButton = document.querySelector('#getStudentpairsButton')
fourthHomeworkButton.addEventListener('click', () => {
	const studentslist = functions.fourh.data
	const studentsPairs = functions.fourh.function(studentslist)
	console.log(`Student pairs of [${studentslist}]  is : ${studentsPairs}`)
})
