export const studentsArray = [
	'Олександр',
	'Ігор',
	'Олена',
	'Іра',
	'Олексій',
	'Світлана',
]
export const themes = [
	' Диференційне рівняння',
	' Теорія автоматів',
	' Алгоритми і структури даних',
]

export function getPairs(students) {
	const studentsPairs = [
		[students[0], students[2]],
		[students[1], students[3]],
		[students[4], students[5]],
	]
	return studentsPairs
}

export function getPairThemes(themes) {
	const pairs = getPairs(studentsArray)
	const pairsWithThemes = [
		[[pairs[0].join(' i '), themes[1]]],
		[[pairs[1].join(' i '), themes[0]]],
		[[pairs[2].join(' i '), themes[2]]],
	]
	return pairsWithThemes
}
