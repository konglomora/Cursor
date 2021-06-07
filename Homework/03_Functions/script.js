// * Task 1
// ? Створити функцію getMaxDigit(number) – яка отримує будь-яке число
// ?  та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
    let n = number > 0 ? number : number * -1; // Приводим локальную переменную в положительное число, если оно негативное
    let maxDigit = 0;
    while (n) {
        if (n % 10 > maxDigit) {// Проверяем больше ли % 10 чем максимальная цифра
            maxDigit = Math.trunc(n % 10); // Записываем в переменную новую максимальную цифру
        }
        n = n / 10; // Уменьшаем значение числа на 1 знак после запятой, для новой итерации
    }
    return console.log(`Max digit at ${number} = ${maxDigit}`);
}

// * Task 2
// ? Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **.

function getNumPower(x, n) {
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
    let taxPercent = 19.5; // Процент налога=
    let taxSum = salarySum * (taxPercent / 100);
    let amountAfterTax = salarySum - taxSum;
    return console.log(
        `Salary sum after tax ${taxPercent}%  = ${amountAfterTax} UAH`
    );
}
