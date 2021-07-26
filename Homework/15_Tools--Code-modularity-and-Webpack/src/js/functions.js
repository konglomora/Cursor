import getMaxDigit from '../assets/homeworks/03_Functions/script'
import {
	studentsArray,
	themes,
	getPairs,
	getPairThemes,
} from '../assets/homeworks/04_Arrays/script'
import getRandomArray from '/Users/arseniinetrebenko/Documents/Programming/Cursor/Homework/05_Sorting-methods-of-arrays/js/script.js'
import {
	studentsObjectsArray,
	getSubjects,
} from '../assets/homeworks/06_Objects--Rest&spread-operations/script'
import {
	ukraine,
	latvia,
	litva,
	getMyTaxes,
} from '../assets/homeworks/07_Closure--Keyword-This/script'

export const homeworkFunctionsObject = {
	third: getMaxDigit,
	fourth: {
		getPairs: getPairs,
		getPairThemes: getPairThemes,
		studentsArray: studentsArray,
		themesArray: themes,
	},
	fifth: getRandomArray,
	sixth: {
		studentsObjectsArray: studentsObjectsArray,
		getSubjects: getSubjects,
	},
	seventh: {
		ukraine: ukraine,
		latvia: latvia,
		litva: litva,
		getMyTaxes: getMyTaxes,
	},
}
