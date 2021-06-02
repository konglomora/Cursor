// TODO Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345.
const nikePrice = 15.678;
const adidasPrice = 123.965;
const new_balancePrice = 90.2345;

const priceMax = Math.max(nikePrice, adidasPrice, new_balancePrice);
const priceMin = Math.min(nikePrice, adidasPrice, new_balancePrice);
const pricesSum = nikePrice + adidasPrice + new_balancePrice;

// TODO Використовуючи вбудований об'єкт Math – виведіть максимальне число
// TODO Використовуючи вбудований об'єкт Math – виведіть мінімальне число
// TODO Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

console.log(
    `Max price = ${priceMax} \nMin price =  ${priceMin} \nSum of prices =  ${pricesSum}`
);

// TODO Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const pricesSumEntireFloor =
    Math.floor(nikePrice) +
    Math.floor(adidasPrice) +
    Math.floor(new_balancePrice);
console.log(`Sum of prices without kopecks ${pricesSumEntireFloor}`);

// TODO Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const pricesSumEntireFloorRoundedToHundreds =
    Math.round(pricesSumEntireFloor / 100) * 100;

console.log(
    `Rounded up to hundreds sum  of rounded down prices = ${pricesSumEntireFloorRoundedToHundreds}`
);

// TODO Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const pricesParityCheck = Math.floor(pricesSum) % 2 == 0;
console.log(`The parity of the sum of all prices is: ${pricesParityCheck}`);

// TODO Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const userMoneyAmount = 500;
const change = Math.abs(pricesSum - userMoneyAmount);

console.log(`Change for the client = ${change}`);

// TODO Виведіть середнє значення цін, округлене до другого знаку після коми.
const averageCost = +(pricesSum / 3).toFixed(2);

console.log(`Average cost = ${averageCost}`);

// TODO Створіть змінну, в якої збережіть випадкову знижку.
const userDiscountPercent = +(Math.random() * (100 - 1) + 1).toFixed(2);
console.log(`Discount = ${userDiscountPercent}% `);

// TODO Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const userDiscountAmount = +((pricesSum * userDiscountPercent) / 100).toFixed(
    2
);
const pricesSumDiscounted = +(pricesSum - userDiscountAmount).toFixed(2);
console.log(
    `Discount amount =  ${userDiscountAmount} \nDiscounted sum  = ${pricesSumDiscounted}`
);

// TODO Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const netProfit = +(pricesSumDiscounted / 2 - userDiscountAmount).toFixed(2);

console.log(`Net profit = ${netProfit}`);

// ? Visualization
document.querySelector('.price-operations--block').innerHTML = `
    
    <div class="counter">
        <div class = "counter__title" >Max price, UAH</div>
        <div id = "price--max" class = "counter__number" >${priceMax}</div>
    </div>

    <div class="counter">
        <div class = "counter__title" >Min price, UAH</div>
        <div class = "counter__number" >${priceMin}</div>
    </div>

    <div class="counter">
        <div class = "counter__title" >Sum of prices, UAH</div>
        <div class = "counter__number"  >${pricesSum}</div>
    </div>

    <div class="counter">
        <div class = "counter__title" >Sum of prices without kopecks, UAH </div>
        <div class = "counter__number">${pricesSumEntireFloor}</div>
    </div>

    <div class="counter">
        <div class = "counter__title" >Rounded sum of prices, UAH</div>
        <div class = "counter__number" >${pricesSumEntireFloorRoundedToHundreds}</div>
    </div>

    <div class="counter">
        <div class = "counter__title">The parity of the sum of all prices is</div>
        <div class = "counter__boolean">${pricesParityCheck}</div>
    </div>

    <div class="counter">
        <div class = "counter__title">Change for the client from 500 UAH</div>
        <div class = "counter__number" >${change}</div>
    </div>

    <div class="counter">
        <div class = "counter__title" >Average cost, UAH</div>
        <div class = "counter__number" >${averageCost}</div>
    </div>

    <div class="counter">
        <div class = "counter__title" >Discount percent, %</div>
        <div class = "counter__number" > ${userDiscountPercent}</div>
    </div>

    <div class="counter">
        <div class = "counter__title" >Discount amount, UAH</div>
        <div class = "counter__number" > ${userDiscountAmount}</div>
    </div>

    <div class="counter">
        <div class = "counter__title" >Discounted sum, UAH</div>
        <div class = "counter__number" >${pricesSumDiscounted}</div>
    </div>

    <div class="counter">
        <div class = "counter__title" >Net profit, UAH</div>
        <div class = "counter__number">${netProfit}</div>
    </div>

`;

// ? Counters animation
$('.counter__number').each(function () {
    $(this)
        .prop('Counter', 0.0)
        .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 3000, // ms
                easing: 'swing',
                step: function (now) {
                    $(this).text(+now.toFixed(2));
                },
            }
        );
});
