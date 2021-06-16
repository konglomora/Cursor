function isNotaNumber(n) {
    // Валидатор чисел
    return isNaN(+n) || String(n).trim() === '';
}

function skipNotInteger(array) {
    // Функция для пропуска не целых чисел
    const integerNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            integerNumbers.push(array[i]);
        }
    }
    return integerNumbers;
}

// * Task 1
// ? Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// ? У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
// ** Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

function getRandomArray(length, min, max) {
    if (
        !Number.isInteger(length) ||
        !Number.isInteger(min) ||
        !Number.isInteger(max)
    ) {
        return 'Please, use integer!';
    }
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.trunc(min + Math.random() * (max - min));
        randomArray.push(randomNumber);
    }
    return randomArray;
}

// console.log(getRandomArray(5, 1, 10));

// * Task 2
// ? Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// ** Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

function getModa(...args) {
    let modaCount = 0; // Счётчик количества повторений значения моды
    let repetitionCounter = 0; // Счетчик повторений каждого значения массива
    let modaValue = args[0]; // Значение моды
    for (let i = 0; i < args.length; i++) {
        if (repetitionCounter > modaCount) {
            modaCount = repetitionCounter;
            modaValue = args[i +  1];
        }
        repetitionCounter = 0;
        for (let j = i; j < args.length; j++) {
            if (args[j] == args[i])
                repetitionCounter++

        }
    }

    return `moda value = ${modaValue}`;

}

// console.log(getModa(1, 2, 3, 5, 5, 5, 5));

// * Task 3
// ? Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// ** Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
    const intNumbers = skipNotInteger(numbers);
    return intNumbers.reduce((a, b) => a + b) / intNumbers.length;
}

// console.log(getAverage(1.2, 2.1,4, 2, 1, 3, 3.2, '11'));

// * Task 4
// ? Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// ** Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// ** Приклад: getMedian(1, 2, 3, 4) –> 2.5
// ** Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
    const intNumbers = skipNotInteger(numbers);
    const half = Math.floor(intNumbers.length / 2);
    intNumbers.sort((a, b) => a - b);

    if (intNumbers.length % 2) {
        return intNumbers[half];
    } else {
        return (intNumbers[half - 1] + intNumbers[half]) / 2;
    }
}

// console.log(getMedian(1, 2 ,3 , 4 , 5, 6, 7, 12.2));

// * Task 5
// ? Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// ** Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2) result.push(numbers[i]);
    }
    return result;
}

// console.log(filterEvenNumbers(1, 2 ,3 ,4 , 5, 6));

// * Task 6
// ?  Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// ** Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        } else {
            count;
        }
    }
    return count;
}

// console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

// * Task 7
// ? Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// ** Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(...numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (!(numbers[i] % 5)) result.push(numbers[i]);
    }
    return result;
}

// console.log(
//     getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
// );
