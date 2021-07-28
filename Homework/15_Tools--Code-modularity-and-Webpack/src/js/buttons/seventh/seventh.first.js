import { homeworkFunctionsObject as functions } from '/Users/arseniinetrebenko/Documents/Programming/Cursor/Homework/15_Tools--Code-modularity-and-Webpack/src/js/functions.js'

export const generateBlocksButton = functions.ninth.generateBlocksButton

const generateBlocksFunction = () => {
	functions.ninth.generateBlocks()
	functions.ninth.intervalBlocksColorChangeButton.classList.remove('hidden')
	generateBlocksButton.removeEventListener('click', generateBlocksFunction)
}

generateBlocksButton.addEventListener('click', generateBlocksFunction)
