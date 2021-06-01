"use strict";

// Створіть 3 змінних з наступими значеннями: 15.678, 123.965, 90.2345.
var nikePrice = 15.678;
var adidasPrice = 123.965;
var new_balancePrice = 90.2345;
var priceMax = Math.max(nikePrice, adidasPrice, new_balancePrice);
var priceMin = Math.min(nikePrice, adidasPrice, new_balancePrice);
var pricesSum = nikePrice + adidasPrice + new_balancePrice; // Використовуючи вбудований об'єкт Math – виведіть максимальне число
// Використовуючи вбудований об'єкт Math – виведіть мінімальне число
// Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму

console.log("Max price = ".concat(priceMax, " \nMin price =  ").concat(priceMin, " \nSum of prices =  ").concat(pricesSum)); // Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.

var pricesSumEntireFloor = Math.floor(nikePrice) + Math.floor(adidasPrice) + Math.floor(new_balancePrice); // Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)

var pricesSumEntireFloorRoundedToHundreds = Math.round(pricesSumEntireFloor / 100) * 100;
console.log("Rounded up to hundreds sum  of rounded down prices = ".concat(pricesSumEntireFloorRoundedToHundreds)); // Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?

var pricesParityCheck = pricesSumEntireFloor % 2 == 0 ? 'true' : 'false';
console.log("The parity of the sum of all prices is: ".concat(pricesParityCheck)); // Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.

var userMoneyAmount = 500;
var change = Math.abs(pricesSum - userMoneyAmount);
console.log("Change for the client = ".concat(change)); // Виведіть середнє значення цін, округлене до другого знаку після коми.

var averageCost = (pricesSum / 3).toFixed(2);
console.log("Average cost = ".concat(averageCost)); // Створіть змінну, в якої збережіть випадкову знижку.

var userDiscountPercent = +(Math.random() * (100 - 1) + 1).toFixed(2);
console.log("Discount = ".concat(userDiscountPercent, "% ")); // Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.

var userDiscountAmount = (pricesSum * userDiscountPercent / 100).toFixed(2);
var pricesSumDiscounted = (pricesSum - userDiscountAmount).toFixed(2);
console.log("Discount amount =  ".concat(userDiscountAmount, " \nDiscounted sum  = ").concat(pricesSumDiscounted)); // Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?

var netProfit = (pricesSumDiscounted / 2 - userDiscountAmount).toFixed(2);
console.log("Net profit = ".concat(netProfit)); // Visualization

document.querySelector('.price-operations--block').innerHTML = "\n    \n    <div class=\"counter\">\n        <div class = \"counter__title\" >Max price, UAH</div>\n        <div id = \"price--max\" class = \"counter__number\" >".concat(priceMax, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\" >Min price, UAH</div>\n        <div class = \"counter__number\" >").concat(priceMin, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\" >Sum of prices, UAH</div>\n        <div class = \"counter__number\"  >").concat(pricesSum, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\" >Rounded sum of prices, UAH</div>\n        <div class = \"counter__number\" >").concat(pricesSumEntireFloorRoundedToHundreds, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\">The parity of the sum of all prices is</div>\n        <div class = \"counter__boolean\">").concat(pricesParityCheck, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\" >Customer money amount, UAH</div>\n        <div class = \"counter__number\">").concat(userMoneyAmount, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\">Change for the client from 500 UAH</div>\n        <div class = \"counter__number\" >").concat(change, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\" >Average cost, UAH</div>\n        <div class = \"counter__number\" >").concat(averageCost, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\" >Discount percent, %</div>\n        <div class = \"counter__number\" > ").concat(userDiscountPercent, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\" >Discount amount, UAH</div>\n        <div class = \"counter__number\" > ").concat(userDiscountAmount, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\" >Discounted sum, UAH</div>\n        <div class = \"counter__number\" >").concat(pricesSumDiscounted, "</div>\n    </div>\n\n    <div class=\"counter\">\n        <div class = \"counter__title\" >Net profit, UAH</div>\n        <div class = \"counter__number\">").concat(netProfit, "</div>\n    </div>\n\n"); // Counters animation

$('.counter__number').each(function () {
  $(this).prop('Counter', 0.00).animate({
    Counter: $(this).text()
  }, {
    duration: 3000,
    // ms
    easing: 'swing',
    step: function step(now) {
      $(this).text(now.toFixed(2));
    }
  });
});