function isNotaNumber(n) {
    // Валидатор чисел
    return isNaN(+n) || String(n).trim() === '';
}

// * Task 1
// ? Створити функцію getMaxDigit(number) – яка отримує будь-яке число
// ?  та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
    if (isNotaNumber(number)) return 'You entered not a number';

    number = String(number); // Переводим число в строку, что б оперировать её методами
    let digits = [];

    for (let i = 0; i < number.length; i++)
        if (/[\d]/.test(number[i])) {
            // Если символ с индексом которому равен итератор это еденичное число
            digits.push(number[i]); // Пушим его в массив
        }
    const maxDigit = Math.max(...digits); // Получаем максимальное число из созданного массива благодаря spread
    return maxDigit;
}

export {getMaxDigit as default}

// * Task 2
// ? Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **.

function getNumPower(x, n) {
    if (isNotaNumber(x) || isNotaNumber(n)) return 'You entered not a number';

    let result = 1;
    for (i = 0; i < n; i++) {
        result = result * x; // Пока итератор меньше степени n, умножаем число само на себя
    }
    return result;
}

// * Task 3
// ? Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function capitalizeFirstletter(s) {
    s = String(s);
    const result = s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(); // Знак с нулевым индексом переводим в upper case и к нему добавляем остальную строку с символа с индексом 1,  которую перевели в lower case
    return result;
}

// * Task 4
// ? Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function getAmountAfterTax(salarySum) {
    if (isNotaNumber(salarySum)) return 'You entered not a number';
    const taxPercent = 19.5;
    const taxSum = salarySum * (taxPercent / 100);
    const amountAfterTax = salarySum - taxSum;
    return `${amountAfterTax.toFixed(2)} UAH`;
}

// * Task 5
// ? Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
// ** Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(a, b) {
    if (isNotaNumber(a) || isNotaNumber(b)) return 'You entered not a number';
    const maxNumber = Math.max(a, b);
    const minNumber = Math.min(a, b);
    const result =
        Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    return result;
}

// * Task 6
// ? Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад:
// ** countLetter("а", "Асталавіста") -> 4

function countLetter(letter, str) {
    let count = 0;
    const strArray = str.split('');
    strArray.forEach((element) => {
        element.toLowerCase() == letter.toLowerCase() ? count++ : count; // Для каждого элемента в строке, если он равен букве которую мы получили от юзера, счетчик увеличивается
    });
    return count;
}

// * Task 8
// ? Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// ** Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(passwordLength = 8) {
    if (passwordLength.trim() === '') passwordLength = 8;
    if (passwordLength < 0 || isNotaNumber(passwordLength))
        // Валидируем параметр
        return 'Use integers to generate password';

    let password = [];
    for (let i = 0; i < passwordLength; i++) {
        const randomDigit = Math.trunc(Math.random() * 10);
        password.push(randomDigit); // Пушим в массив рандомное число пока итератор меньше параметра, который получили от юзера
    }
    password = password.join(''); // Собираем массив значений в строку
    return password;
}

// * Task 9
// ? Створіть функцію, яка видаляє всі букви з речення.
// ** Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letter, str) {
    if (letter.length !== 1) return 'Enter 1 character, please'; // Валидируем полученную строку

    const filtredStr = [...str] // Используем деструктуризацию для создания массива из строки, которую получаем
        .filter(function (element) {
            // Фильтруем массив по значениям, которые не равны введённой букве
            return element.toLowerCase() !== letter.toLowerCase();
        })
        .join(''); // Объеденяем полученный массив в строку
    return filtredStr;
}

// * Task 10
// ? Створіть функцію, яка перевіряє, чи є слово паліндромом.
// **  Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(str) {
    str = str.replace(/\s/g, '').toLowerCase(); // Удаляем пробелы из строки и переводим её в нижний регистр
    const n = str.length; // устанавливаем в переменную n длинну строки str

    for (let i = 0; i < n / 2; i++) {
        if (str.charAt(i) !== str.charAt(n - 1 - i))
            // Валидируем знаки в строке с двух концов
            return false;
    }
    return true;
}

// * Task 11
// ? Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
// ** Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(str) {
    const strArray = str.toLowerCase().split(''); // Переводим строку в lower case, и результат сохраняем в массив

    const uniqueLettersArray = strArray.filter(function (item, position) {
        return strArray.indexOf(item) === strArray.lastIndexOf(item); // проверяем равен ли индекс символа последнему индексу этого символа, и возвращаем этот символ в массив uniqueLettersArray
    });
    const uniqueLettersString = uniqueLettersArray.join(''); // конвертируем массив в строку
    return uniqueLettersString;
}

