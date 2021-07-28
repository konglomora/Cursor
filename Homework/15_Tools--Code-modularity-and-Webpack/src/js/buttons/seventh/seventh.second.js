import { homeworkFunctionsObject as functions } from '/Users/arseniinetrebenko/Documents/Programming/Cursor/Homework/15_Tools--Code-modularity-and-Webpack/src/js/functions.js'

export const intervalBlocksColorChangeButton =
	functions.ninth.intervalBlocksColorChangeButton

const colorizeBlocksIntervalFunction = () => {
	functions.ninth.generateBlocksInterval()
	intervalBlocksColorChangeButton.removeEventListener(
		'click',
		colorizeBlocksIntervalFunction
	)
}

intervalBlocksColorChangeButton.addEventListener(
	'click',
	colorizeBlocksIntervalFunction
)
