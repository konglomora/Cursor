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
import {
	Student,
	regularStudent,
} from '../assets/homeworks/08_Prototypes--ES6-classes/script'

import {
	generateBlocks,
	changeBlocksColor,
	generateBlocksInterval,
	getRandomColor,
	blocksWrapper,
	generateBlocksButton,
	intervalBlocksColorChangeButton,
} from '../assets/homeworks/09_DOM/script'

import {
	playSound,
	removeTransition,
	keys,
} from '../assets/homeworks/10_Events/js/script'

import {
	getChinese,
	lengthInput,
	resultBlock,
} from '../assets/homeworks/11_Async&Date&Promises/script'

import {
	getPlanetsButton,
	getPreviousPlanetsPageButton,
	getNextPlanetsPageButton,
	planetsBlock,
	planetsURL,
} from '../assets/homeworks/12_Work-with-server/js/planets'

import { createIdGenerator } from '../assets/homeworks/13_Symbols--Generators--Iterators/script'

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
	eighth: {
		StudentClass: Student,
		regularStudent: regularStudent,
	},
	ninth: {
		blocksWrapper: blocksWrapper,
		generateBlocksButton: generateBlocksButton,
		intervalBlocksColorChangeButton: intervalBlocksColorChangeButton,
		generateBlocks: generateBlocks,
		changeBlocksColor: changeBlocksColor,
		generateBlocksInterval: generateBlocksInterval,
		getRandomColor: getRandomColor,
	},
	tenth: {
		playSound: playSound,
		removeTransition: removeTransition,
		keys: keys,
	},
	eleventh: {
		getChinese: getChinese,
		lengthInput: lengthInput,
		resultBlock: resultBlock,
	},
	twelveth: {
		getPlanetsButton: getPlanetsButton,
		getPreviousPlanetsPageButton: getPreviousPlanetsPageButton,
		getNextPlanetsPageButton: getNextPlanetsPageButton,
		planetsBlock: planetsBlock,
		planetsURL: planetsURL,
	},
	thirteenth: {
		createIdGenerator: createIdGenerator,
	},
}
