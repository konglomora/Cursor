function isNotaNumber(n) {
	return isNaN(+n) || String(n).trim() === ''
}

export default function getMaxDigit(number) {
	if (isNotaNumber(number)) return 'You entered not a number'

	number = String(number)
	let digits = []

	for (let i = 0; i < number.length; i++)
		if (/[\d]/.test(number[i])) {
			digits.push(number[i])
		}
	const maxDigit = Math.max(...digits)
	return maxDigit
}
