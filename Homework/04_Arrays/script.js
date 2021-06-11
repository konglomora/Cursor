const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = [
    'Диференційне рівняння',
    'Теорія автоматів',
    'Алгоритми і структури даних',
];
const marks = [4, 5, 5, 3, 4, 5];

// * Task 1
// ? Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
// **  У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function getPairs(students) {
    const studentsPairs = [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]],
    ];
    return studentsPairs;
}

console.log('\nFunction 1 result');
console.log(getPairs(students));

// * Task 2
// ? Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
// **  Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]


function getPairThemes(themes) {
    const pairs = getPairs(students);
    const pairsWithThemes = [
        [pairs[0].join(' i '), themes[1]],
        [pairs[1].join(' i '), themes[0]],
        [pairs[2].join(' i ') ,themes[2]],
    ];
    return pairsWithThemes;
}

console.log('\nFunction 2 result');
console.log(getPairThemes(themes));

// * Task 3
// ? Зіставте оцінки(marks) зі студентом(students)
// **  [["Саша", 4], [...], [...]]



function getStudentmarks(students, marks) {
    let studentsMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentsMarks.push([students[i], marks[i]]); // Пока итератор меньше длинны массива с студентами, присваивать массиву по 1 элементу с массивов студентов и оценок
    }
    return studentsMarks;
}

console.log('\nFunction 3 result');
console.log(getStudentmarks(students, marks));

// * Task 4
// ? Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
// ** [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function getRandomMark() {
    const pairThemes = getPairThemes(themes);
    let result = [];
    for (let i = 0; i < pairThemes.length; i++) {
        const randomMark = Math.trunc(Math.random() * (5 - 1 + 1) + 4); // Генерируем рандомное число
        const partOfpairThemesMarked = [pairThemes[i].concat(randomMark)]; // Конкатенируем каждый элемент массива с парами людей и рандомное число, сохраняем в виде массива в новой переменной
        result = result.concat(partOfpairThemesMarked); // Конкатенируем пустой массив, и каждый элемент из массива partOfpairThemesMarked
    }
    return result;
}

console.log('\nFunction 4 result');
console.log(getRandomMark());
