function isNotaNumber(n) {
    return isNaN(+n) || String(n).trim() === '';
}

// * Task 1
// ? Створити функцію getMaxDigit(number) – яка отримує будь-яке число
// ?  та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
    if (isNotaNumber(number)) return 'You entered not a number';

    number = String(number);
    let digits = [];

    for (let i = 0; i < number.length; i++)
        if (/[\d]/.test(number[i])) digits.push(+number[i]);
    return Math.max(...digits);
}

// * Task 2
// ? Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **.

function getNumPower(x, n) {
    if (isNotaNumber(x) || isNotaNumber(n)) return 'You entered not a number';

    let result = 1;
    for (i = 0; i < n; i++) {
        result = result * x;
    }
    return console.log(`${x} to the power of ${n} = ${result}`);
}

// * Task 3
// ? Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function capitalizeFirstletter(s) {
    s = String(s);
    return console.log(s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
}

// * Task 4
// ? Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function getAmountAfterTax(salarySum) {
    if (isNotaNumber(salarySum)) return 'You entered not a number';

    const taxPercent = 19.5;
    const taxSum = salarySum * (taxPercent / 100);
    const amountAfterTax = salarySum - taxSum;
    return `Salary sum after tax ${taxPercent}%  = ${amountAfterTax} UAH`;
}

// * Task 5
// ? Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
// ** Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(a, b) {
    maxNumber = Math.max(a, b);
    minNumber = Math.min(a, b);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

// * Task 6
// ? Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад:
// ** countLetter("а", "Асталавіста") -> 4

function countLetter(letter, str) {
    let count = 0;
    const strArray = str.split('');
    strArray.forEach((element) => {
        element.toLowerCase() == letter.toLowerCase() ? count++ : count;
    });
    return count;
}

// console.log(countLetter('v', 'oaaoa vvvv'));

// * Task 8
// ? Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// ** Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(passwordLength) {
    if (passwordLength == 0 || isNotaNumber(passwordLength))
        return 'Use integers to generate password';

    let password = [];
    for (let i = 0; i < passwordLength; i++) {
        let randomDigit = Math.trunc(Math.random() * 10);
        password.push(randomDigit);
    }
    password = +password.join('');
    return password;
}

// console.log(getRandomPassword(10));

// * Task 9
// ? Створіть функцію, яка видаляє всі букви з речення.
// ** Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letter, str) {
    if (letter.length !== 1) return 'Enter 1 character, please'; // Валидируем полученную строку

    const filtredStr = [...str] // Используем spread для сощдания массива из строки, которую получаем
        .filter(function (element) {
            // Фильтруем массив по значениям, которые не равны введённой букве
            return element.toLowerCase() !== letter.toLowerCase();
        })
        .join(''); // Объеденяем полученный массив в строку
    return filtredStr;
}
// console.log(deleteLetters('1', '11111111111SSSasdSSqwassssasdasdeassasdasdsdssszxfasdasdasd  asdasdas ADSADWQE ASSSS'));

// * Task 10
// ? Створіть функцію, яка перевіряє, чи є слово паліндромом.
// **  Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(str) {
    str = str.replace(/\s/g, '').toLowerCase(); // Удаляем пробелы из строки и переводим её в нижний регистр
    let n = str.length; // устанавливаем в переменную n длинну строки str

    for (let i = 0; i < n / 2; i++) {
        if (str.charAt(i) !== str.charAt(n - 1 - i))
            // Валидируем знаки в строке с двух концов
            return false;
    }
    return true;
}

// console.log(isPalyndrom('Я несу гусеня'));
// console.log(isPalyndrom('Я несу'));

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

// console.log(deleteDuplicateLetter('Бісквіт був дуже ніжним'));

document.writeln(`Функция №1 getMaxDigit(-781.9): ${getMaxDigit(-781.9)}
`);

document.querySelector('.functions--block').innerHTML = `
<span class="functions__item">Функція №1 getMaxDigit(123.9): ${getMaxDigit(
    123.9
)}</span>
<span class="functions__item">Функція №2: ${myFunc()}</span>
<span class="functions__item">Функція №4: ${myFunc()}</span>
<span class="functions__item">Функція №5: ${myFunc()}</span>
<span class="functions__item">Функція №6: ${myFunc()}</span>
<span class="functions__item">Функція №8: ${myFunc()}</span>
<span class="functions__item">Функція №9: ${myFunc()}</span>
<span class="functions__item">Функція №10: ${myFunc()}</span>
<span class="functions__item">Функція №11: ${myFunc()}</span>
<span class="functions__item">Функція №3: ${myFunc()}</span>

`;
