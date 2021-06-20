const students = [
    {
        name: 'Tanya',
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4],
        },
    },
    {
        name: 'Victor',
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5],
        },
    },
    {
        name: 'Anton',
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5],
        },
    },
];

// * Task 1
// ? Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
// ? Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

const getSubjects = (studentIndex) => {
    const studentSubjectsArray = Object.keys(students[studentIndex].subjects);
    return studentSubjectsArray.map((item) => {
        return (
            item.charAt(0).toUpperCase() + item.substr(1).replaceAll('_', ' ')
        );
    });
};

// console.log(getSubjects(0));

// * Task 2
// ? Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента
// ! НЕ МАСИВА СТУДЕНТІВ.
// ? Оцінку округліть до 2ого знаку.
// ? Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverage(...numbers) {
    return (numbers.reduce((a, b) => a + b) / numbers.length).toFixed(2);
}

const getAverageMark = (studentIndex) => {
    const student = students[studentIndex];
    const studentsSubjecstMarks = Object.values(student.subjects);
    const studentAllMarksArray = studentsSubjecstMarks.reduce((accum, item) => {
        return item.concat(accum);
    }, []);
    const averageStudentMark = +getAverage(...studentAllMarksArray);
    return averageStudentMark;
};

// console.log(getAverageMark(0));

// * Task 3
// ? Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79}
// ? яка повертає інформацію загального виду по переданому студенту
// ! вам знадобиться функція з попереднього завдання
// ? Повинна бути виведена інформація: курс, ім'я, середня оцінка.

const getStudentInfo = (studentIndex) => {
    const student = students[studentIndex];
    const { course, name } = student;
    const averageMark = getAverageMark(studentIndex);
    return { course, name, averageMark };
};

// console.log(getStudentInfo(0));

// * Task 4
// ? Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"]
// ? Яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = (students) => {
    const studentNames = students.reduce((accum, item) => {
        return accum.concat(item.name).sort();
    }, []);
    return studentNames;
};
// console.log(getStudentsNames(students));

// * Task 5
// ? Створіть функцію getBestStudent(students) --> "Anton"
// ? Яка повертає кращого студента зі списку по показнику середньої оцінки.

const getBestStudent = (students) => {
    let bestStudents = [];
    bestMark = Math.max(...students.map((student, i) => getAverageMark(i)));
    for (i = 0; i < students.length; i++) {
        students[i]['Average mark'] = getAverageMark(i);
        if (students[i]['Average mark'] === bestMark)
            bestStudents.push(students[i].name);
    }
    return bestStudents;
};

// console.log(getBestStudent(students));

// * Task 6
// ? Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1
// ? Яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

const calculateWordLetters = (word) => {
    const letterCountObject = word.split('').reduce((counter, item) => {
        if (counter[item]) {
            counter[item]++;
        } else counter[item] = 1;
        return counter;
    }, {});
    return letterCountObject;
};

// console.log(
//     calculateWordLetters('тесттесттесттесттесттесттесттесттесттесттест')
// );
