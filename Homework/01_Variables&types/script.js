// Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345.
let nikePrice = 15.678;
let adidasPrice = 123.965;
let new_balancePrice = 90.2345;

let priceMax = Math.max(nikePrice, adidasPrice, new_balancePrice);
let priceMin = Math.min(nikePrice, adidasPrice, new_balancePrice);
let pricesSum = nikePrice + adidasPrice + new_balancePrice;

// Використовуючи вбудований об'єкт Math – виведіть максимальне число
// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

console.log(
    `Max price = ${priceMax} \nMin price =  ${priceMin} \nSum of prices =  ${pricesSum}`
);

// Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
let pricesSumEntireFloor =
    Math.floor(nikePrice) +
    Math.floor(adidasPrice) +
    Math.floor(new_balancePrice);

// Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
let pricesSumEntireFloorRoundedToHundreds =
    Math.round(pricesSumEntireFloor / 100) * 100;

console.log(
    `Rounded up to hundreds sum  of rounded down prices = ${pricesSumEntireFloorRoundedToHundreds}`
);

// Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
let pricesPairing =
    pricesSumEntireFloor % 2 == 0
        ? console.log('The pairing of the sum of all prices is: true')
        : console.log('The pairing of the sum of all prices is: false');

// Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
let userMoneyAmount = 500;
let change = Math.abs(pricesSum - userMoneyAmount);

console.log(`Change for the client = ${change}`);

// Виведіть середнє значення цін, округлене до другого знаку після коми.
let averageCost = (pricesSum / 3).toFixed(2);

console.log(`Average cost = ${averageCost}`);

// Створіть змінну, в якої збережіть випадкову знижку.
let userDiscountPercent = (Math.random() * (100 - 1) + 1).toFixed(2);
console.log(`Discount = ${userDiscountPercent}%`);

// Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
let userDiscountAmount = ((pricesSum * userDiscountPercent) / 100).toFixed(2);
let pricesSumDiscounted = (pricesSum - userDiscountAmount).toFixed(2);
console.log(`Discount amount =  ${userDiscountAmount}`);
console.log(`Discounted sum  = ${pricesSumDiscounted}`);

// Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

let netProfit = (pricesSumDiscounted / 2 - userDiscountAmount).toFixed(2);

console.log(`Net profit = ${netProfit}`);

