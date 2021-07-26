// ? У стдентів повинні бути наступні властивості: university, course, fullName
// ? Вони передаються при створенні студента(в конструктор).

class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
        this.active = true;
    }

    // ? Створіть метод this.getInfo()
    // ? Mетод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
    }

    // ? Створіть геттер оцінок, який повертає масив оцінок студента
    get studentMarks() {
        if (this.active) return this.marks;
        return null;
    }

    // ? Створіть сеттер оцінок, який дозволяє поставити оцінку студенту
    set studentMarks(mark) {
        if (this.active) {
            console.log(`Поставлено оцiнку: ${mark}`);
            return this.marks.push(mark);
        }
        return null;
    }

    // ? Створіть метод отримання середнього балу
    getAverageMark() {
        if (this.active) {
            return (
                this.marks.reduce((accum, mark) => accum + mark) /
                this.marks.length
            );
        }
        return null;
    }

    // ? Створіть метод this.dismiss, який "виключить" студента.
    dismiss() {
        return (this.active = false);
    }

    // ? Створіть метод this.recover, який дозволить поновити студента
    recover() {
        return (this.active = true);
    }
}

const regularStudent = new Student(
    'Вищої Школи Психотерапії м.Одеса',
    1,
    'Остап Бендер'
);

console.group('Regular student');
console.log(`regularStudent.getInfo: ${regularStudent.getInfo()}`);

regularStudent.marks = [5, 4, 4, 5];
console.log(`regularStudent.getMarks: ${regularStudent.studentMarks}`);

regularStudent.studentMarks = 5;
console.log(`regularStudent.getMarks: ${regularStudent.studentMarks}`);

console.log(
    `regularStudent.getAverageMark(): ${regularStudent.getAverageMark()}`
);
console.group('Dismiss student');

regularStudent.dismiss();
regularStudent.marks = [5, 4, 4, 5];
console.log(`regularStudent.getMarks: ${regularStudent.studentMarks}`);

regularStudent.studentMarks = 5;
console.log(`regularStudent.getMarks: ${regularStudent.studentMarks}`);

console.log(
    `regularStudent.getAverageMark(): ${regularStudent.getAverageMark()}`
);

console.groupEnd();

console.group('Recover student');
regularStudent.recover();
regularStudent.marks = [5, 4, 4, 5];
console.log(`regularStudent.getMarks: ${regularStudent.studentMarks}`);

regularStudent.studentMarks = 5;
console.log(`regularStudent.getMarks: ${regularStudent.studentMarks}`);

console.log(
    `regularStudent.getAverageMark(): ${regularStudent.getAverageMark()}`
);

console.groupEnd();
console.groupEnd();

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        this.marks = [5, 5, 5];
        setInterval(this.getScholarship, 30000);
    }
    getScholarship = () => {
        if (this.getAverageMark() >= 4 && this.active) console.log(`Ви отримали 1400 грн. стипендії`);
        else console.log(
            'Ви не привiтались з старим преподом в коридорi, тому стипендії не отримали'
        );
    }
}

const botan = new BudgetStudent('Полтавське ПТУ', '1', 'Василь Кiт');

console.group('Budget student');
console.log(botan);
botan.dismiss()
console.groupEnd();
