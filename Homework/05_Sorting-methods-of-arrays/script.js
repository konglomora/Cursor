function isNotaNumber(n) {
    // Валидатор чисел
    return isNaN(+n) || String(n).trim() === '';
}


// * Task 1
// ? Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
// ? У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
// ** Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

function getRandomArray(length, min, max){
  if (!Number.isInteger(length) || !Number.isInteger(min) || !Number.isInteger(max)) {
    return 'Please, use integer!'
  }
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    const randomNumber = Math.trunc(min + Math.random() * (max - min));
    randomArray = randomArray.concat(randomNumber);
  }
  return randomArray;
}

console.log(getRandomArray(2, 1, 3));

