import regeneratorRuntime from 'regenerator-runtime'

// * First task
export function* createIdGenerator() {
	for (let i = 1; i < Infinity; i++) {
		yield i
	}
}

const idGenerator = createIdGenerator()

const idGeneratorButton = document.querySelector('.id-generator__button')
const idGeneratorResult = document.querySelector('.id-generator__result')

idGeneratorButton.addEventListener('click', () => {
	idGeneratorResult.innerHTML = idGenerator.next().value
})


