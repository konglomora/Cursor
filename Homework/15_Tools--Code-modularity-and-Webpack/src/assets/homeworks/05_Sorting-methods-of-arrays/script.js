function isNotaNumber(n) {
	return isNaN(+n) || String(n).trim() === ''
}

export function getRandomArray(length, min, max) {
	if (
		isNotaNumber(length) ||
		isNotaNumber(min) ||
		isNotaNumber(max) ||
		!Number.isInteger(+length) ||
		!Number.isInteger(+min) ||
		!Number.isInteger(+max)
	) {
		return 'Please, use integer!'
	}
	const minNumber = Math.min(min, max)
	const maxNumber = Math.max(min, max)
	const randomArray = []
	for (let i = 0; i < length; i++) {
		const randomNumber = Math.trunc(
			minNumber + Math.random() * (maxNumber - minNumber)
		)
		randomArray.push(randomNumber)
	}
	return randomArray
}
