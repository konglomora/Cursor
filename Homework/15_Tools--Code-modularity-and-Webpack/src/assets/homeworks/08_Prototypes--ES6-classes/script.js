export class Student {
	constructor(university, course, fullName) {
		this.university = university
		this.course = course
		this.fullName = fullName
		this.marks = []
		this.active = true
	}

	getInfo() {
		return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`
	}
}

export const regularStudent = new Student(
	'Вищої Школи Психотерапії м.Одеса',
	1,
	'Остап Бендер'
)
