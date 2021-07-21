// * First task
function* createIdGenerator() {
	for (let i = 0; i < Infinity; i++) {
		yield i
	}
}

const idGenerator = createIdGenerator()

const idGeneratorButton = document.querySelector('.id-generator__button')
const idGeneratorResult = document.querySelector('.id-generator__result')

idGeneratorButton.addEventListener('click', () => {
	idGeneratorResult.innerHTML = idGenerator.next().value
})

// * Second task

function* newFontGenerator(startFontSize = 14) {
	let resultFontSize = yield startFontSize
	while (true) {
		resultFontSize =
			resultFontSize === 'up'
				? (startFontSize += 2)
				: resultFontSize === 'down'
				? (startFontSize -= 2)
				: resultFontSize
		resultFontSize = yield startFontSize
	}
}

const fontGenerator = newFontGenerator()

const fontSizeGeneratorButtonUp = document.querySelector(
	'.font-size-generator__button--up'
)
const fontSizeGeneratorButtonDown = document.querySelector(
	'.font-size-generator__button--down'
)

const fontSizeGeneratorResult = document.querySelector(
	'.font-size-generator__result'
)

fontSizeGeneratorButtonUp.addEventListener('click', () => {
	const fontSize = fontGenerator.next('up').value
	fontSizeGeneratorResult.style.fontSize = `${fontSize}px`
	console.log(fontSize)
})

fontSizeGeneratorButtonDown.addEventListener('click', () => {
	const fontSize = fontGenerator.next('down').value
	fontSizeGeneratorResult.style.fontSize = `${fontSize}px`
	console.log(fontSize)
})
