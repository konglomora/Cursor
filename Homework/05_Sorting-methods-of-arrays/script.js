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

// console.log(getRandomArray(54, 1, 10));

// * Task 2
// ? Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// ** Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2
// TODO: Support for multiple mod values

function getModa(...args) {
    if (!args.length || args.some(isNaN)) return 'Please, try again!';
    const intNumbers = skipNotInteger(args);
    let modaCount = 0; // Счётчик количества повторений значения моды
    let repetitionCounter = 0; // Счетчик повторений каждого значения массива
    let modaValue = intNumbers[0]; // Значение моды
    for (let i = 0; i < intNumbers.length; i++) {
        if (repetitionCounter > modaCount) {
            modaCount = repetitionCounter;
            modaValue = intNumbers[i - 1];
        }
        repetitionCounter = 0;
        for (let j = i; j < intNumbers.length; j++) {
            if (intNumbers[j] == intNumbers[i]) repetitionCounter++;
        }
    }

    return `Moda value = ${modaValue}`;
}

// console.log(getModa(1, 1, 1, 2, 2, 2));

// * Task 3
// ? Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// ** Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
    if (!numbers.length) return 'You have not entered anything';
    else if (numbers.some(isNaN)) return 'You entered not a number';
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
    return numbers.filter((number) => number % 2);
}
// console.log(`Even numbers = ${filterEvenNumber(1, 2, 3, 4, 5, 6)}`); // 1, 3, 5

// * Task 6
// ?  Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// ** Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
    if (numbers.some(isNotaNumber)) {
        return 'Use number, please';
    }
    return numbers.reduce((count, number) => {
        if (number > 0) count++;
        return count;
    }, 0);
}

// console.log(countPositiveNumbers(1, -2, 3, -5, 6)); // 3

// * Task 7
// ? Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// ** Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(...numbers) {
    if (numbers.some(isNotaNumber)) {
        return 'Use number, please';
    }
    return numbers.filter((number) => number % 5 === 0);
}

// console.log(
//     getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) // [ 55, 55 ]
// );

// * Task 8
// ? Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// ? При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ")
// ? Погані слова: shit та fuck.
// ? Передбачте можливість розширювати список цих слів у майбутньому.
// ** Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?"
// ** Приклад: replaceBadWords("Holy shit!") -> "Holy ****!"
// ** Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

// const replaceBadWords = (str) => {
//     let strToArray = str.split(' ');
//     const badWords = ['fuck', 'shit', 'whore'];

//     strToArray = strToArray.map((word, i, array) => {
//         console.log(array);
//         if (String(word).includes(badWords[i])) {
//             array[i] = String(word).replace(badWords[i], '****');
//         }
//     });

//     return strToArray;
// };

// let symbolToReplace = '';
// for (let j = 0; j < String(badWords[i]).length; j++) {
// Счётчик знаков для замены слова из badwords
//     symbolToReplace += '*';
// }


function replaceBadWords(str, ...swearing) {
    if (!str.length) return 'You have not entered anything';
    const badWords = ['fuck', 'shit', ...swearing];
    let stringWords = str.split(/[\s,]+/);
    stringWords = stringWords.map((wordFromString) => {
        if (
            badWords.some((badWord) =>
                wordFromString.toLowerCase().includes(badWord)
            )
        ) {
            let swearingAtString = badWords.filter((badWord) =>
                wordFromString.toLowerCase().includes(badWord)
            );
            swearingAtString.forEach((badWord) => {
                let symbolsToReplace = '*'.repeat(badWord.length);
                let badWordpattern = new RegExp(badWord, 'g');
                wordFromString = wordFromString.replaceAll(
                    badWordpattern,
                    symbolsToReplace
                );
            });
        };
        return wordFromString;
    });
    return stringWords.join(' ');
}

console.log(replaceBadWords('fuckfuck shite asd asdasd fuck fuckfuck'));

// * Task 9
// ? Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// ? Якщо букв менше трьох – не розбиває.
// ! Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// ** divideByThree("Commander) -> ["com", "man", "der"]
// ** Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(word) {
    if (!word.length) return 'Please, input something';
    let wordsArr = word.toLowerCase().replaceAll(' ', '');
    let result = [];
    if (wordsArr.length > 3) {
        for (let i = 0; i < wordsArr.length; i += 3) {
            result.push(wordsArr.slice(i, i + 3));
        }
    } else {
        return wordsArr;
    }
    return result;
}

// console.log(divideByThree('live')); // ["cas", "do"]
