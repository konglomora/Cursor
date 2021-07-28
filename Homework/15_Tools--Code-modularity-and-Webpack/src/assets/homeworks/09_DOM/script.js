export const blocksWrapper = document.querySelector('.blocks__wrapper')
export const generateBlocksButton = document.querySelector('#generateBlocksButton')
export const intervalBlocksColorChangeButton = document.querySelector(
	'#colorizeBlocksButton'
)

export function getRandomColor() {
	const colorSchemeArray = []
	for (let i = 0; i < 3; i++) {
		const colorProportion = Math.trunc(Math.random() * (0 - 255) + 255)
		colorSchemeArray.push(colorProportion)
	}
	return `rgb(${colorSchemeArray.join()})`
}

export const generateBlocks = () => {
	const blocksCount = 25
	for (let i = 0; i < blocksCount; i++) {
		const block = document.createElement('div')
		block.classList.add('block')
		blocksWrapper.append(block)
    console.log('block generated');
	}
	changeBlocksColor()
	generateBlocksButton.onclick = null
}

export const changeBlocksColor = () => {
	const allBlocks = document.querySelectorAll('.block')
	allBlocks.forEach(block => (block.style.backgroundColor = getRandomColor()))
}

export const generateBlocksInterval = () => {
	setInterval(changeBlocksColor, 1000)
	intervalBlocksColorChangeButton.onclick = null
}
