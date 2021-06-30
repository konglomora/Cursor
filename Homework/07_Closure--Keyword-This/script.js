function isNotaNumber(n) {
    // Валидатор чисел
    return isNaN(+n) || String(n).trim() === '';
}

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// * Task 1
// ? Створіть функцію getMyTaxes.call(country, salary) -> number;
// ? Яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн.
// ! Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
    if (isNotaNumber(salary)) return 'Please, use a number :)';
    return +(this.tax * salary).toFixed(2);
}

console.group('Function 1');
console.log(
    `getMyTaxes.call(ukraine, 10000): ${getMyTaxes.call(ukraine, 10000)}`
);
console.log(
    `getMyTaxes.call(latvia, 10000): ${getMyTaxes.call(latvia, 10000)}`
);
console.log(`getMyTaxes.call(litva, 10000): ${getMyTaxes.call(litva, 10000)}`);
console.groupEnd();

// * Task 2
// ? Створіть функцію getMiddleTaxes.call(country) -> number;
// ? Яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні.
// ? (tax * middleSalary).
// ! Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes() {
    return +(this.tax * this.middleSalary).toFixed(2);
}

console.group('Function 2');
console.log(`getMiddleTaxes.call(ukraine): ${getMiddleTaxes.call(ukraine)}`);
console.log(`getMiddleTaxes.call(latvia): ${getMiddleTaxes.call(latvia)}`);
console.log(`getMiddleTaxes.call(litva): ${getMiddleTaxes.call(litva)}`);
console.groupEnd();

// * Task 3
// ? Створіть функцію getTotalTaxes.call(country) -> number;
// ? Яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
// ! Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.group('Function 3');
console.log(`getTotalTaxes.call(ukraine): ${getTotalTaxes.call(ukraine)}`);
console.log(`getTotalTaxes.call(latvia): ${getTotalTaxes.call(latvia)}`);
console.log(`getTotalTaxes.call(litva): ${getTotalTaxes.call(litva)}`);
console.groupEnd();

// * Task 4
// ? Створіть функцію getMySalary(country)
// ? Яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд.
// ? Значення salary – генеруйте випадковим чином у діапазоні 1500-2000.
// ? taxes – розраховується в залежності від вибраної країни та значення salary.
// ? profit = salary - taxes;

function getMySalary() {
    const timerid = setInterval(() => {
        const min = 1500;
        const max = 2000;
        const salary = Math.round(min + Math.random() * (max - min));
        const taxes = getMyTaxes.call(this, salary);
        const profit = +(salary - taxes).toFixed(2);
        const res = {
            salary: salary,
            taxes: taxes,
            profit: profit,
        };
        console.log(res);
    }, 10000);
    setTimeout(() => clearInterval(timerid), 100000);
}

console.group('Function 4');
console.group('getMySalary.call(litva):');
getMySalary.call(litva);
console.groupEnd();
