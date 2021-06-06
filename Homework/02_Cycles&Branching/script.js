let N = prompt('Enter first integer number', 0); // Запрашиваем первое число

while ( N.trim() === '' || isNaN(+N) || !Number.isInteger(+N) ) {// Валидируем
    N = prompt('It`s not a integer number, please try again', 0); // Запрашиваем первое число пока валидация не пройдена
}

let M = prompt('Enter second integer number', 0); // Запрашиваем второе число

while (M.trim() === '' || isNaN(+M) || !Number.isInteger(+M)) {// Валидируем
    M = prompt('It`s not a integer number, pslease try again', 0); // Запрашиваем второе число пока валидация не пройдена
}

const skipParity = confirm('Skip paired numbers when adding?'); // Запрашиваем пропускать парные или нет?
let sumOfnumbers = 0;
let minNumber = Math.min(+N, +M); // Определяем минимальное знаечение из N и M
let maxNumber = Math.max(+N, +M); // Определяем максимальное знаечение из N и M

for (let i = minNumber; i <= maxNumber; i++) {
    if (skipParity && i % 2 == 0) {// Проверяем пропускать парные или нет
        continue;
    }
    sumOfnumbers += i; // Складываем сумму всех чисел в промежутке
}

alert(`Sum of numbers from ${minNumber} to ${maxNumber} is ${sumOfnumbers}`);
