function isNotaNumber(n) {
    return isNaN(+n) || String(n).trim() === '';
}

// * Task 1
// ? Створити функцію getMaxDigit(number) – яка отримує будь-яке число
// ?  та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
    if (isNotaNumber(number)) return 'You entered not a number';

    number = String(number);
    let digits = []

     for (let i = 0; i < number.length; i++)
         if (/[\d]/.test(number[i])) digits.push(+number[i]);
    return Math.max(...digits)



}

// * Task 2
// ? Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **.

function getNumPower(x, n) {
    if (isNotaNumber(x) || isNotaNumber(n))
        return 'You entered not a number';

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
    return console.log(
        `Salary sum after tax ${taxPercent}%  = ${amountAfterTax} UAH`
    );
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

function countLetter(letter, word){
    
}
