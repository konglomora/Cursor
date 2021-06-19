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
        isNotaNumber(length) ||
        isNotaNumber(min) ||
        isNotaNumber(max) ||
        !Number.isInteger(+length) ||
        !Number.isInteger(+min) ||
        !Number.isInteger(+max)
    ) {
        return 'Please, use integer!';
    }
    minNumber = Math.min(min, max);
    maxNumber = Math.max(min, max);
    const randomArray = [];
    for (let i = 0; i < length; i++) {
        const randomNumber = Math.trunc(
            minNumber + Math.random() * (maxNumber - minNumber)
        );
        randomArray.push(randomNumber);
    }
    return randomArray;
}

// console.log(getRandomArray(54, 1, 10));

// * Task 2
// ? Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.
// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// ** Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

const getModa = (...args) => {
    // Валидируем
    if (!args.length) return 'You have not entered anything';
    else if (args.some(isNotaNumber))
        return 'You entered not a number or did not use a comma';

    const intNumbers = skipNotInteger(args).sort((a, b) => a - b); // Пропускаем нецелые числа и сортируем
    let repetitionCounter = 1;
    const repetitionValues = [];

    intNumbers.forEach((number, i) => {
        if (number === intNumbers[++i]) {
            repetitionCounter++; // Если элементы рядом и они равны друг другу, то увеличиваем счётчик
        } else repetitionCounter = 1; // А если рядом с элементом нет равных ему значений - значит он такой 1
        repetitionValues.push(repetitionCounter);
    });

    const maxRepetition = Math.max(...repetitionValues); // Получаем значения максимальных повторений
    const modaArray = [];

    repetitionValues.forEach((repetitonCount, i) => {
        if (repetitonCount === maxRepetition) {
            // Если значение повторения максимальное, то можно пушить в массив элемент который соответствует этому повторению
            modaArray.push(intNumbers[i]);
        }
    });
    if (modaArray.length === 1) return `Moda value = ${String(modaArray)}`;
    // Если значение моды это 1 число
    else if (modaArray.length > 1)
        return `Moda values = ${String(modaArray.join(' and '))}`; // Если значений моды несколько
};

// console.log(getModa()); // [ 6, 2]

// * Task 3
// ? Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// ** Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...numbers) {
    if (!numbers.length) return 'You have not entered anything';
    else if (numbers.some(isNotaNumber))
        return 'You entered not a number or did not use a comma';

    const intNumbers = skipNotInteger(numbers);
    return (intNumbers.reduce((a, b) => a + b) / intNumbers.length).toFixed(2);
}

// * Task 4
// ? Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.
// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// ** Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23
// ** Приклад: getMedian(1, 2, 3, 4) –> 2.5
// ** Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...numbers) {
    if (!numbers.length) return 'You have not entered anything';
    else if (numbers.some(isNotaNumber))
        return 'You entered not a number or did not use a comma';

    const intNumbers = skipNotInteger(numbers);
    const half = Math.floor(intNumbers.length / 2);
    intNumbers.sort((a, b) => a - b);

    if (intNumbers.length % 2) {
        return intNumbers[half];
    } else {
        return (intNumbers[half - 1] + intNumbers[half]) / 2;
    }
}

// * Task 5
// ? Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// ** Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
    if (!numbers.length) return 'You have not entered anything';
    else if (numbers.some(isNotaNumber))
        return 'You entered not a number or did not use a comma';

    return numbers.filter((number) => number % 2);
}

// * Task 6
// ?  Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// ** Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
    if (!numbers.length) return 'You have not entered anything';
    else if (numbers.some(isNotaNumber))
        return 'You entered not a number or did not use a comma';

    return numbers.reduce((count, number) => {
        if (number > 0) count++;
        return count;
    }, 0);
}

// * Task 7
// ? Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// ** Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(...numbers) {
    if (!numbers.length) return 'You have not entered anything';
    else if (numbers.some(isNotaNumber))
        return 'You entered not a number or did not use a comma';

    const filtredNumbers = numbers.filter((number) => number % 5 === 0);
    if (!filtredNumbers.length) return 'No matching numbers';
    return filtredNumbers;
}

// * Task 8
// ? Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// ? При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), після чого масив необхідно буде склеїти .join(" ")
// ? Погані слова: shit та fuck.
// ? Передбачте можливість розширювати список цих слів у майбутньому.
// ** Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?"
// ** Приклад: replaceBadWords("Holy shit!") -> "Holy ****!"
// ** Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

function replaceBadWords(str, ...swearing) {
    if (!str.length) return 'You have not entered anything'; // Валидация полученных аргументов
    const badWords = ['fuck', 'shit', ...swearing]; // Массив из ругательств
    let stringWords = str.split(/[\s,]+/); // Массив из слов, которые разделены пробелами через регулярное выражение, для случая, когда пробелов больше чем 1
    stringWords = stringWords.map((wordFromString) => {
        if (
            // Если хоть 1 элемент из массива stringWords содержит элемент из badWords
            badWords.some((badWord) =>
                wordFromString.toLowerCase().includes(badWord)
            )
        ) {
            // Фильтруем элементы из stringWords которые содержат элементы из badWords, и складываем в массив swearingAtString
            const swearingAtString = badWords.filter((badWord) =>
                wordFromString.toLowerCase().includes(badWord)
            );
            swearingAtString.forEach((badWord) => {
                // Для каждого элемента из swearingAtString
                const symbolsToReplace = '*'.repeat(badWord.length); // Считаем сколько нужно * в зависимости от длинны ругательства которое мы нашли
                // Меняем ругательство из badWords которое мы нашли, на symbolsToReplace, в котором высчитали длинну этого ругательства
                wordFromString = wordFromString.replaceAll(
                    badWord,
                    symbolsToReplace
                );
            });
        }
        return wordFromString; // Возвращаем зацензуренное слово
    });
    return stringWords.join(' ');
}

// console.log(replaceBadWords('funck fucking shit with bitches', 'bitch'));

// * Task 9
// ? Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// ? Якщо букв менше трьох – не розбиває.
// ! Пробіли завжди видаляються. Рядок приводится до нижнього регістру.
// ** divideByThree("Commander) -> ["com", "man", "der"]
// ** Приклад: divideByThree("live") -> ["liv", "e"]

function divideBySyllables(word, numberOfSyllables = 3) {
    if (!word.length) return 'Please, input something';
    if (numberOfSyllables < 0 || !Number.isInteger(numberOfSyllables))
        return 'Please, use positive integer number for number of syllables';

    let wordsArr = word.toLowerCase().replaceAll(' ', '');
    let result = [];
    if (wordsArr.length > numberOfSyllables) {
        for (let i = 0; i < wordsArr.length; i += numberOfSyllables) {
            result.push(wordsArr.slice(i, i + numberOfSyllables));
        }
    } else {
        return wordsArr;
    }
    return result;
}


