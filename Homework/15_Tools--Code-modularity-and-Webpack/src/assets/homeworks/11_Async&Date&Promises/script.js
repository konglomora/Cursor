

export async function getChinese(length) {
	let resultString = ''

	while (length) {
		const charGenerator = new Promise(resolve => {
			setTimeout(() => {
				const sign = Date.now().toString().slice(-5)
				const char = String.fromCharCode(sign)
				resolve(char)
			}, 50)
		})
		resultString += await charGenerator
		length--
	}
	return resultString
}

export const lengthInput = document.getElementById('length__input')
export const resultBlock = document.querySelector('.result')

lengthInput.onchange = event => {
	getChinese(event.target.value).then(
		string => (resultBlock.textContent = string)
	)
}
