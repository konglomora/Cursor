const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = [
    'Диференційне рівняння',
    'Теорія автоматів',
    'Алгоритми і структури даних',
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs(students) {
    const studentsPairs = [
        [students[0], students[2]],
        [students[1], students[3]],
        [students[4], students[5]],
    ];
    return studentsPairs;
}
console.log('Function 1 result');
console.log(getPairs(students));

function getPairThemes(themes) {
    const pairs = getPairs(students);
    const pairsWithThemes = [
        pairs[0].concat(themes[1]),
        pairs[1].concat(themes[0]),
        pairs[2].concat(themes[2]),
    ];
    return pairsWithThemes;
}
console.log('Function 2 result');

console.log(getPairThemes(themes));

function getStudentmarks(students, marks) {
    let studentsMarks = [];
    for (let i = 0; i < students.length; i++) {
        studentsMarks.push([students[i], marks[i]]); // Пока итератор меньше длинны массива с студентами, присваивать массиву по 1 элементу с массивов студентов и оценок
    }
    return studentsMarks;
}
console.log('Function 3 result');

console.log(getStudentmarks(students, marks));

function getRandomMark() {
    let pairThemes = getPairThemes(themes);
    let result = [];
    for (let i = 0; i < pairThemes.length; i++) {
        let randomMark = Math.trunc(Math.random() * (5 - 1 + 1) + 4); // Генерируем рандомное число
        let partOfpairThemesMarked = [pairThemes[i].concat(randomMark)]; // Конкатенируем каждый элемент массива с парами людей и рандомное число, сохраняем в виде массива в новой переменной
        result = result.concat(partOfpairThemesMarked); // Конкатенируем пустой массив, и каждый элемент из массива partOfpairThemesMarked
    }
    return result;
}
console.log('Function 4 result');

console.log(getRandomMark());


// let functionsList = [
//     [getPairs(students)],
//     [getPairThemes(themes)],
//     [getStudentmarks(students, marks)],
//     [getRandomMark()],
// ];


// document.querySelectorAll('.array').forEach((n, i) => n.textContent = functionsList[i]);

