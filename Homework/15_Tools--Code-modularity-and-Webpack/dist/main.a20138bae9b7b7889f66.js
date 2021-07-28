/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../05_Sorting-methods-of-arrays/js/script.js":
/*!*******************************************************!*\
  !*** ../../05_Sorting-methods-of-arrays/js/script.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getRandomArray)\n/* harmony export */ });\nfunction isNotaNumber(n) {\n  // Валидатор чисел\n  return isNaN(+n) || String(n).trim() === '';\n}\n\nfunction skipNotInteger(array) {\n  // Функция для пропуска не целых чисел\n  var integerNumbers = [];\n\n  for (var i = 0; i < array.length; i++) {\n    if (Number.isInteger(array[i])) {\n      integerNumbers.push(array[i]);\n    }\n  }\n\n  return integerNumbers;\n} // * Task 1\n// ? Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.\n// ? У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.\n// ** Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]\n\n\nfunction getRandomArray(length, min, max) {\n  if (isNotaNumber(length) || isNotaNumber(min) || isNotaNumber(max) || !Number.isInteger(+length) || !Number.isInteger(+min) || !Number.isInteger(+max)) {\n    return 'Please, use integer!';\n  }\n\n  var minNumber = Math.min(min, max);\n  var maxNumber = Math.max(min, max);\n  var randomArray = [];\n\n  for (var i = 0; i < length; i++) {\n    var randomNumber = Math.trunc(minNumber + Math.random() * (maxNumber - minNumber));\n    randomArray.push(randomNumber);\n  }\n\n  return randomArray;\n} // * Task 2\n// ? Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів.\n// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ\n// ** Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2\n\nvar getModa = function getModa() {\n  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n    args[_key] = arguments[_key];\n  }\n\n  // Валидируем\n  if (!args.length) return 'You have not entered anything';else if (args.some(isNotaNumber)) return 'You entered not a number or did not use a comma';\n  var intNumbers = skipNotInteger(args).sort(function (a, b) {\n    return a - b;\n  }); // Пропускаем нецелые числа и сортируем\n\n  var repetitionCounter = 1;\n  var repetitionValues = [];\n  intNumbers.forEach(function (number, i) {\n    if (number === intNumbers[++i]) {\n      repetitionCounter++; // Если элементы рядом и они равны друг другу, то увеличиваем счётчик\n    } else repetitionCounter = 1; // А если рядом с элементом нет равных ему значений - значит он такой 1\n\n\n    repetitionValues.push(repetitionCounter);\n  });\n  var maxRepetition = Math.max.apply(Math, repetitionValues); // Получаем значения максимальных повторений\n\n  var modaArray = [];\n  repetitionValues.forEach(function (repetitonCount, i) {\n    if (repetitonCount === maxRepetition) {\n      // Если значение повторения максимальное, то можно пушить в массив элемент который соответствует этому повторению\n      modaArray.push(intNumbers[i]);\n    }\n  });\n  if (modaArray.length === 1) return \"Moda value = \".concat(String(modaArray)); // Если значение моды это 1 число\n  else if (modaArray.length > 1) return \"Moda values = \".concat(String(modaArray.join(' and '))); // Если значений моды несколько\n}; // * Task 3\n// ? Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.\n// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ\n// ** Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4\n\n\nfunction getAverage() {\n  for (var _len2 = arguments.length, numbers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n    numbers[_key2] = arguments[_key2];\n  }\n\n  if (!numbers.length) return 'You have not entered anything';else if (numbers.some(isNotaNumber)) return 'You entered not a number or did not use a comma';\n  var intNumbers = skipNotInteger(numbers);\n  return (intNumbers.reduce(function (a, b) {\n    return a + b;\n  }) / intNumbers.length).toFixed(2);\n} // * Task 4\n// ? Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів.\n// ! НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ\n// ** Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23\n// ** Приклад: getMedian(1, 2, 3, 4) –> 2.5\n// ** Приклад: getMedian(1, 2, 3, 4, 5) –> 3\n\n\nfunction getMedian() {\n  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n    numbers[_key3] = arguments[_key3];\n  }\n\n  if (!numbers.length) return 'You have not entered anything';else if (numbers.some(isNotaNumber)) return 'You entered not a number or did not use a comma';\n  var intNumbers = skipNotInteger(numbers);\n  var half = Math.floor(intNumbers.length / 2);\n  intNumbers.sort(function (a, b) {\n    return a - b;\n  });\n\n  if (intNumbers.length % 2) {\n    return intNumbers[half];\n  } else {\n    return (intNumbers[half - 1] + intNumbers[half]) / 2;\n  }\n} // * Task 5\n// ? Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції\n// ** Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]\n\n\nfunction filterEvenNumbers() {\n  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n    numbers[_key4] = arguments[_key4];\n  }\n\n  if (!numbers.length) return 'You have not entered anything';else if (numbers.some(isNotaNumber)) return 'You entered not a number or did not use a comma';\n  return numbers.filter(function (number) {\n    return number % 2;\n  });\n} // * Task 6\n// ?  Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0\n// ** Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3\n\n\nfunction countPositiveNumbers() {\n  for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n    numbers[_key5] = arguments[_key5];\n  }\n\n  if (!numbers.length) return 'You have not entered anything';else if (numbers.some(isNotaNumber)) return 'You entered not a number or did not use a comma';\n  return numbers.reduce(function (count, number) {\n    if (number > 0) count++;\n    return count;\n  }, 0);\n} // * Task 7\n// ? Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5\n// ** Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]\n\n\nfunction getDividedByFive() {\n  for (var _len6 = arguments.length, numbers = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {\n    numbers[_key6] = arguments[_key6];\n  }\n\n  if (!numbers.length) return 'You have not entered anything';else if (numbers.some(isNotaNumber)) return 'You entered not a number or did not use a comma';\n  var filtredNumbers = numbers.filter(function (number) {\n    return number % 5 === 0;\n  });\n  if (!filtredNumbers.length) return 'No matching numbers';\n  return filtredNumbers;\n} // * Task 8\n// ? Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).\n// ? При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(\" \"), після чого масив необхідно буде склеїти .join(\" \")\n// ? Погані слова: shit та fuck.\n// ? Передбачте можливість розширювати список цих слів у майбутньому.\n// ** Приклад: replaceBadWords(\"Are you fucking kidding?\") -> \"Are you ****ing kidding?\"\n// ** Приклад: replaceBadWords(\"Holy shit!\") -> \"Holy ****!\"\n// ** Приклад: replaceBadWords(\"It's bullshit!\") -> \"It's bull****!\"\n\n\nfunction replaceBadWords(str) {\n  if (!str.length) return 'You have not entered anything'; // Валидация полученных аргументов\n\n  for (var _len7 = arguments.length, swearing = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {\n    swearing[_key7 - 1] = arguments[_key7];\n  }\n\n  var badWords = ['fuck', 'shit'].concat(swearing); // Массив из ругательств\n\n  var stringWords = str.split(/[\\s,]+/); // Массив из слов, которые разделены пробелами через регулярное выражение, для случая, когда пробелов больше чем 1\n\n  stringWords = stringWords.map(function (wordFromString) {\n    if ( // Если хоть 1 элемент из массива stringWords содержит элемент из badWords\n    badWords.some(function (badWord) {\n      return wordFromString.toLowerCase().includes(badWord);\n    })) {\n      // Фильтруем элементы из stringWords которые содержат элементы из badWords, и складываем в массив swearingAtString\n      var swearingAtString = badWords.filter(function (badWord) {\n        return wordFromString.toLowerCase().includes(badWord);\n      });\n      swearingAtString.forEach(function (badWord) {\n        // Для каждого элемента из swearingAtString\n        var symbolsToReplace = '*'.repeat(badWord.length); // Считаем сколько нужно * в зависимости от длинны ругательства которое мы нашли\n        // Меняем ругательство из badWords которое мы нашли, на symbolsToReplace, в котором высчитали длинну этого ругательства\n\n        wordFromString = wordFromString.replaceAll(badWord, symbolsToReplace);\n      });\n    }\n\n    return wordFromString; // Возвращаем зацензуренное слово\n  });\n  return stringWords.join(' ');\n} // console.log(replaceBadWords('funck fucking shit with bitches', 'bitch'));\n// * Task 9\n// ? Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.\n// ? Якщо букв менше трьох – не розбиває.\n// ! Пробіли завжди видаляються. Рядок приводится до нижнього регістру.\n// ** divideByThree(\"Commander) -> [\"com\", \"man\", \"der\"]\n// ** Приклад: divideByThree(\"live\") -> [\"liv\", \"e\"]\n\n\nfunction divideBySyllables(word) {\n  var numberOfSyllables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;\n  if (!word.length) return 'Please, input something';\n  if (numberOfSyllables < 0 || !Number.isInteger(numberOfSyllables)) return 'Please, use positive integer number for number of syllables';\n  var wordsArr = word.toLowerCase().replaceAll(' ', '');\n  var result = [];\n\n  if (wordsArr.length > numberOfSyllables) {\n    for (var i = 0; i < wordsArr.length; i += numberOfSyllables) {\n      result.push(wordsArr.slice(i, i + numberOfSyllables));\n    }\n  } else {\n    return wordsArr;\n  }\n\n  return result;\n}\n\n//# sourceURL=webpack:///../../05_Sorting-methods-of-arrays/js/script.js?");

/***/ }),

/***/ "./assets/homeworks/03_Functions/script.js":
/*!*************************************************!*\
  !*** ./assets/homeworks/03_Functions/script.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMaxDigit)\n/* harmony export */ });\nfunction isNotaNumber(n) {\n  return isNaN(+n) || String(n).trim() === '';\n}\n\nfunction getMaxDigit(number) {\n  if (isNotaNumber(number)) return 'You entered not a number';\n  number = String(number);\n  var digits = [];\n\n  for (var i = 0; i < number.length; i++) {\n    if (/[\\d]/.test(number[i])) {\n      digits.push(number[i]);\n    }\n  }\n\n  var maxDigit = Math.max.apply(Math, digits);\n  return maxDigit;\n}\n\n//# sourceURL=webpack:///./assets/homeworks/03_Functions/script.js?");

/***/ }),

/***/ "./assets/homeworks/04_Arrays/script.js":
/*!**********************************************!*\
  !*** ./assets/homeworks/04_Arrays/script.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentsArray\": () => (/* binding */ studentsArray),\n/* harmony export */   \"themes\": () => (/* binding */ themes),\n/* harmony export */   \"getPairs\": () => (/* binding */ getPairs),\n/* harmony export */   \"getPairThemes\": () => (/* binding */ getPairThemes)\n/* harmony export */ });\nvar studentsArray = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];\nvar themes = [' Диференційне рівняння', ' Теорія автоматів', ' Алгоритми і структури даних'];\nfunction getPairs(students) {\n  var studentsPairs = [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];\n  return studentsPairs;\n}\nfunction getPairThemes(themes) {\n  var pairs = getPairs(studentsArray);\n  var pairsWithThemes = [[[pairs[0].join(' i '), themes[1]]], [[pairs[1].join(' i '), themes[0]]], [[pairs[2].join(' i '), themes[2]]]];\n  return pairsWithThemes;\n}\n\n//# sourceURL=webpack:///./assets/homeworks/04_Arrays/script.js?");

/***/ }),

/***/ "./assets/homeworks/06_Objects--Rest&spread-operations/script.js":
/*!***********************************************************************!*\
  !*** ./assets/homeworks/06_Objects--Rest&spread-operations/script.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentsObjectsArray\": () => (/* binding */ studentsObjectsArray),\n/* harmony export */   \"getSubjects\": () => (/* binding */ getSubjects)\n/* harmony export */ });\nvar studentsObjectsArray = [{\n  name: 'Tanya',\n  course: 3,\n  subjects: {\n    math: [4, 4, 3, 4],\n    algorithms: [3, 3, 3, 4, 4, 4],\n    data_science: [5, 5, 3, 4]\n  }\n}, {\n  name: 'Victor',\n  course: 4,\n  subjects: {\n    physics: [5, 5, 5, 3],\n    economics: [2, 3, 3, 3, 3, 5],\n    geometry: [5, 5, 2, 3, 5]\n  }\n}, {\n  name: 'Anton',\n  course: 2,\n  subjects: {\n    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],\n    english: [5, 3],\n    cosmology: [5, 5, 5, 5]\n  }\n}];\nvar getSubjects = function getSubjects(studentIndex) {\n  if (studentIndex >= studentsObjectsArray.length || studentIndex < 0) return 'Такого студента немає';\n  var studentSubjectsArray = Object.keys(studentsObjectsArray[studentIndex].subjects);\n  return studentSubjectsArray.map(function (item) {\n    return item.charAt(0).toUpperCase() + item.substr(1).replaceAll('_', ' ');\n  });\n};\n\n//# sourceURL=webpack:///./assets/homeworks/06_Objects--Rest&spread-operations/script.js?");

/***/ }),

/***/ "./assets/homeworks/07_Closure--Keyword-This/script.js":
/*!*************************************************************!*\
  !*** ./assets/homeworks/07_Closure--Keyword-This/script.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isNotaNumber\": () => (/* binding */ isNotaNumber),\n/* harmony export */   \"ukraine\": () => (/* binding */ ukraine),\n/* harmony export */   \"latvia\": () => (/* binding */ latvia),\n/* harmony export */   \"litva\": () => (/* binding */ litva),\n/* harmony export */   \"getMyTaxes\": () => (/* binding */ getMyTaxes)\n/* harmony export */ });\nfunction isNotaNumber(n) {\n  return isNaN(+n) || String(n).trim() === '';\n}\nvar ukraine = {\n  tax: 0.195,\n  middleSalary: 1789,\n  vacancies: 11476\n};\nvar latvia = {\n  tax: 0.25,\n  middleSalary: 1586,\n  vacancies: 3921\n};\nvar litva = {\n  tax: 0.15,\n  middleSalary: 1509,\n  vacancies: 1114\n};\nfunction getMyTaxes(salary) {\n  if (isNotaNumber(salary)) return 'Please, use a number :)';\n  return +(this.tax * salary).toFixed(2);\n}\n\n//# sourceURL=webpack:///./assets/homeworks/07_Closure--Keyword-This/script.js?");

/***/ }),

/***/ "./assets/homeworks/08_Prototypes--ES6-classes/script.js":
/*!***************************************************************!*\
  !*** ./assets/homeworks/08_Prototypes--ES6-classes/script.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Student\": () => (/* binding */ Student),\n/* harmony export */   \"regularStudent\": () => (/* binding */ regularStudent)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Student = /*#__PURE__*/function () {\n  function Student(university, course, fullName) {\n    _classCallCheck(this, Student);\n\n    this.university = university;\n    this.course = course;\n    this.fullName = fullName;\n    this.marks = [];\n    this.active = true;\n  }\n\n  _createClass(Student, [{\n    key: \"getInfo\",\n    value: function getInfo() {\n      return \"\\u0421\\u0442\\u0443\\u0434\\u0435\\u043D\\u0442 \".concat(this.course, \"-\\u0433\\u043E \\u043A\\u0443\\u0440\\u0441\\u0443 \").concat(this.university, \", \").concat(this.fullName);\n    }\n  }]);\n\n  return Student;\n}();\nvar regularStudent = new Student('Вищої Школи Психотерапії м.Одеса', 1, 'Остап Бендер');\n\n//# sourceURL=webpack:///./assets/homeworks/08_Prototypes--ES6-classes/script.js?");

/***/ }),

/***/ "./assets/homeworks/09_DOM/script.js":
/*!*******************************************!*\
  !*** ./assets/homeworks/09_DOM/script.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"blocksWrapper\": () => (/* binding */ blocksWrapper),\n/* harmony export */   \"generateBlocksButton\": () => (/* binding */ generateBlocksButton),\n/* harmony export */   \"intervalBlocksColorChangeButton\": () => (/* binding */ intervalBlocksColorChangeButton),\n/* harmony export */   \"getRandomColor\": () => (/* binding */ getRandomColor),\n/* harmony export */   \"generateBlocks\": () => (/* binding */ generateBlocks),\n/* harmony export */   \"changeBlocksColor\": () => (/* binding */ changeBlocksColor),\n/* harmony export */   \"generateBlocksInterval\": () => (/* binding */ generateBlocksInterval)\n/* harmony export */ });\nvar blocksWrapper = document.querySelector('.blocks__wrapper');\nvar generateBlocksButton = document.querySelector('#generateBlocksButton');\nvar intervalBlocksColorChangeButton = document.querySelector('#colorizeBlocksButton');\nfunction getRandomColor() {\n  var colorSchemeArray = [];\n\n  for (var i = 0; i < 3; i++) {\n    var colorProportion = Math.trunc(Math.random() * (0 - 255) + 255);\n    colorSchemeArray.push(colorProportion);\n  }\n\n  return \"rgb(\".concat(colorSchemeArray.join(), \")\");\n}\nvar generateBlocks = function generateBlocks() {\n  var blocksCount = 25;\n\n  for (var i = 0; i < blocksCount; i++) {\n    var block = document.createElement('div');\n    block.classList.add('block');\n    blocksWrapper.append(block);\n    console.log('block generated');\n  }\n\n  changeBlocksColor();\n  generateBlocksButton.onclick = null;\n};\nvar changeBlocksColor = function changeBlocksColor() {\n  var allBlocks = document.querySelectorAll('.block');\n  allBlocks.forEach(function (block) {\n    return block.style.backgroundColor = getRandomColor();\n  });\n};\nvar generateBlocksInterval = function generateBlocksInterval() {\n  setInterval(changeBlocksColor, 1000);\n  intervalBlocksColorChangeButton.onclick = null;\n};\n\n//# sourceURL=webpack:///./assets/homeworks/09_DOM/script.js?");

/***/ }),

/***/ "./assets/homeworks/10_Events/js/script.js":
/*!*************************************************!*\
  !*** ./assets/homeworks/10_Events/js/script.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"playSound\": () => (/* binding */ playSound),\n/* harmony export */   \"removeTransition\": () => (/* binding */ removeTransition),\n/* harmony export */   \"keys\": () => (/* binding */ keys)\n/* harmony export */ });\n/* harmony import */ var _assets_sounds_anxiety_wav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/sounds/anxiety.wav */ \"./assets/homeworks/10_Events/assets/sounds/anxiety.wav\");\n/* harmony import */ var _assets_sounds_blaster_wav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sounds/blaster.wav */ \"./assets/homeworks/10_Events/assets/sounds/blaster.wav\");\n/* harmony import */ var _assets_sounds_chameleon_tongue_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/sounds//chameleon-tongue.wav */ \"./assets/homeworks/10_Events/assets/sounds/chameleon-tongue.wav\");\n/* harmony import */ var _assets_sounds_drums_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets//sounds/drums.wav */ \"./assets/homeworks/10_Events/assets/sounds/drums.wav\");\n/* harmony import */ var _assets_sounds_jump_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/sounds/jump.wav */ \"./assets/homeworks/10_Events/assets/sounds/jump.wav\");\n/* harmony import */ var _assets_sounds_new_floor_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sounds/new-floor.wav */ \"./assets/homeworks/10_Events/assets/sounds/new-floor.wav\");\n/* harmony import */ var _assets_sounds_shuriken_throw_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/sounds/shuriken-throw.wav */ \"./assets/homeworks/10_Events/assets/sounds/shuriken-throw.wav\");\n/* harmony import */ var _assets_sounds_small_drums_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/sounds/small-drums.wav */ \"./assets/homeworks/10_Events/assets/sounds/small-drums.wav\");\n/* harmony import */ var _assets_sounds_space_mosquito_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/sounds/space-mosquito.wav */ \"./assets/homeworks/10_Events/assets/sounds/space-mosquito.wav\");\n/* harmony import */ var _assets_sounds_successful_download_mov__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/sounds/successful-download.mov */ \"./assets/homeworks/10_Events/assets/sounds/successful-download.mov\");\n/* harmony import */ var _assets_sounds_takeoff_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/sounds/takeoff.wav */ \"./assets/homeworks/10_Events/assets/sounds/takeoff.wav\");\n/* harmony import */ var _assets_sounds_teleport_wav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/sounds/teleport.wav */ \"./assets/homeworks/10_Events/assets/sounds/teleport.wav\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction playSound(event) {\n  var audio = document.querySelector(\"audio[data-key=\\\"\".concat(event.keyCode, \"\\\"]\"));\n  var key = document.querySelector(\".key[data-key=\\\"\".concat(event.keyCode, \"\\\"]\"));\n  if (!audio) return;\n  audio.currentTime = 0;\n  audio.play();\n  key.classList.add('down');\n}\nfunction removeTransition() {\n  this.classList.remove('down');\n}\nvar keys = document.querySelectorAll('.key');\nkeys.forEach(function (key) {\n  key.onclick = function () {\n    var audio = document.querySelector(\"audio[data-key=\\\"\".concat(key.dataset.key, \"\\\"]\"));\n    audio.currentTime = 0;\n    audio.play();\n    key.classList.add('down');\n  };\n\n  key.addEventListener('transitionend', removeTransition);\n});\nwindow.addEventListener('keydown', playSound);\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/js/script.js?");

/***/ }),

/***/ "./assets/homeworks/11_Async&Date&Promises/script.js":
/*!***********************************************************!*\
  !*** ./assets/homeworks/11_Async&Date&Promises/script.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getChinese\": () => (/* binding */ getChinese),\n/* harmony export */   \"lengthInput\": () => (/* binding */ lengthInput),\n/* harmony export */   \"resultBlock\": () => (/* binding */ resultBlock)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction getChinese(_x) {\n  return _getChinese.apply(this, arguments);\n}\n\nfunction _getChinese() {\n  _getChinese = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(length) {\n    var resultString, charGenerator;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            resultString = '';\n\n          case 1:\n            if (!length) {\n              _context.next = 10;\n              break;\n            }\n\n            charGenerator = new Promise(function (resolve) {\n              setTimeout(function () {\n                var sign = Date.now().toString().slice(-5);\n\n                var _char = String.fromCharCode(sign);\n\n                resolve(_char);\n              }, 50);\n            });\n            _context.t0 = resultString;\n            _context.next = 6;\n            return charGenerator;\n\n          case 6:\n            resultString = _context.t0 += _context.sent;\n            length--;\n            _context.next = 1;\n            break;\n\n          case 10:\n            return _context.abrupt(\"return\", resultString);\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getChinese.apply(this, arguments);\n}\n\nvar lengthInput = document.getElementById('length__input');\nvar resultBlock = document.querySelector('.result');\n\nlengthInput.onchange = function (event) {\n  getChinese(event.target.value).then(function (string) {\n    return resultBlock.textContent = string;\n  });\n};\n\n//# sourceURL=webpack:///./assets/homeworks/11_Async&Date&Promises/script.js?");

/***/ }),

/***/ "./js/buttons/fifth.js":
/*!*****************************!*\
  !*** ./js/buttons/fifth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./js/functions.js\");\n\nvar seventhHomeworkButton = document.querySelector('#getTaxesButton');\nseventhHomeworkButton.addEventListener('click', function () {\n  var selectedCountry = document.querySelector('#fifth-card-country-select').value;\n  var countryObject = _functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.seventh[\"\".concat(selectedCountry)];\n  var userSalary = document.querySelector('.fifth-card--input').value;\n  var tax = _functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.seventh.getMyTaxes.call(countryObject, userSalary);\n  document.querySelector('.fifth-card-result__wrapper').innerHTML = \"<span class=\\\"result\\\">Result: <br /> \".concat(tax, \"</span>\");\n});\n\n//# sourceURL=webpack:///./js/buttons/fifth.js?");

/***/ }),

/***/ "./js/buttons/first.js":
/*!*****************************!*\
  !*** ./js/buttons/first.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"thirdHomeWorkCardButton\": () => (/* binding */ thirdHomeWorkCardButton)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./js/functions.js\");\n\nvar thirdHomeWorkCardInput = document.querySelector('.first-card--input');\nvar thirdHomeWorkCardButton = document.querySelector('#getMaxDigitButton');\nthirdHomeWorkCardButton.addEventListener('click', function () {\n  var number = thirdHomeWorkCardInput.value;\n  var maxDigit = _functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.third(number);\n  console.log(\"Max digit of \".concat(number, \" is \").concat(maxDigit));\n  document.querySelector('.first-card-result__wrapper').innerHTML = \"<span class=\\\"result\\\">Result: \".concat(maxDigit, \"</span>\");\n});\n\n//# sourceURL=webpack:///./js/buttons/first.js?");

/***/ }),

/***/ "./js/buttons/fourth.js":
/*!******************************!*\
  !*** ./js/buttons/fourth.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./js/functions.js\");\n\nvar sixthHomeworkButton = document.querySelector('#getStudentSubjectsButton');\nsixthHomeworkButton.addEventListener('click', function () {\n  var studentindex = document.querySelector('.fourth-card--input').value - 1;\n  document.querySelector('.fourth-card-result__wrapper').innerHTML = \"<span class=\\\"result\\\">Result: <br /> \".concat(_functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.sixth.getSubjects(studentindex), \"</span>\");\n});\n\n//# sourceURL=webpack:///./js/buttons/fourth.js?");

/***/ }),

/***/ "./js/buttons/second.js":
/*!******************************!*\
  !*** ./js/buttons/second.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fourthHomeworkButton\": () => (/* binding */ fourthHomeworkButton)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./js/functions.js\");\n\nvar fourthHomeworkButton = document.querySelector('#getStudentpairsButton');\nfourthHomeworkButton.addEventListener('click', function () {\n  var studentslist = _functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.fourth.studentsArray;\n  var themes = _functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.fourth.themesArray;\n  var studentsPairs = _functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.fourth.getPairs(studentslist);\n  var studentsPairsWithThemes = _functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.fourth.getPairThemes(themes);\n  document.querySelector('.second-card-result__wrapper').innerHTML = \"<span class=\\\"result\\\">Result: <br /> \".concat(studentsPairsWithThemes[0], \" <br/> \").concat(studentsPairsWithThemes[1], \" <br/> \").concat(studentsPairsWithThemes[2], \"</span>\");\n});\n\n//# sourceURL=webpack:///./js/buttons/second.js?");

/***/ }),

/***/ "./js/buttons/seventh/seventh.first.js":
/*!*********************************************!*\
  !*** ./js/buttons/seventh/seventh.first.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateBlocksButton\": () => (/* binding */ generateBlocksButton)\n/* harmony export */ });\n/* harmony import */ var _Users_arseniinetrebenko_Documents_Programming_Cursor_Homework_15_Tools_Code_modularity_and_Webpack_src_js_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/functions.js */ \"./js/functions.js\");\n\nvar generateBlocksButton = _Users_arseniinetrebenko_Documents_Programming_Cursor_Homework_15_Tools_Code_modularity_and_Webpack_src_js_functions_js__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.ninth.generateBlocksButton;\n\nvar generateBlocksFunction = function generateBlocksFunction() {\n  _Users_arseniinetrebenko_Documents_Programming_Cursor_Homework_15_Tools_Code_modularity_and_Webpack_src_js_functions_js__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.ninth.generateBlocks();\n  _Users_arseniinetrebenko_Documents_Programming_Cursor_Homework_15_Tools_Code_modularity_and_Webpack_src_js_functions_js__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.ninth.intervalBlocksColorChangeButton.classList.remove('hidden');\n  generateBlocksButton.removeEventListener('click', generateBlocksFunction);\n};\n\ngenerateBlocksButton.addEventListener('click', generateBlocksFunction);\n\n//# sourceURL=webpack:///./js/buttons/seventh/seventh.first.js?");

/***/ }),

/***/ "./js/buttons/seventh/seventh.second.js":
/*!**********************************************!*\
  !*** ./js/buttons/seventh/seventh.second.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"intervalBlocksColorChangeButton\": () => (/* binding */ intervalBlocksColorChangeButton)\n/* harmony export */ });\n/* harmony import */ var _Users_arseniinetrebenko_Documents_Programming_Cursor_Homework_15_Tools_Code_modularity_and_Webpack_src_js_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/functions.js */ \"./js/functions.js\");\n\nvar intervalBlocksColorChangeButton = _Users_arseniinetrebenko_Documents_Programming_Cursor_Homework_15_Tools_Code_modularity_and_Webpack_src_js_functions_js__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.ninth.intervalBlocksColorChangeButton;\n\nvar colorizeBlocksIntervalFunction = function colorizeBlocksIntervalFunction() {\n  _Users_arseniinetrebenko_Documents_Programming_Cursor_Homework_15_Tools_Code_modularity_and_Webpack_src_js_functions_js__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.ninth.generateBlocksInterval();\n  intervalBlocksColorChangeButton.removeEventListener('click', colorizeBlocksIntervalFunction);\n};\n\nintervalBlocksColorChangeButton.addEventListener('click', colorizeBlocksIntervalFunction);\n\n//# sourceURL=webpack:///./js/buttons/seventh/seventh.second.js?");

/***/ }),

/***/ "./js/buttons/sixth.js":
/*!*****************************!*\
  !*** ./js/buttons/sixth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sixthhHomeworkButton\": () => (/* binding */ sixthhHomeworkButton)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./js/functions.js\");\n\nvar sixthhHomeworkButton = document.querySelector('#getStudentinfoButton');\nsixthhHomeworkButton.addEventListener('click', function () {\n  document.querySelector('.sixth-card-result__wrapper').innerHTML = \"<span class=\\\"result\\\">Result: <br /> \".concat(_functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.eighth.regularStudent.getInfo(), \"</span>\");\n});\n\n//# sourceURL=webpack:///./js/buttons/sixth.js?");

/***/ }),

/***/ "./js/buttons/third.js":
/*!*****************************!*\
  !*** ./js/buttons/third.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fifthhomeworkButton\": () => (/* binding */ fifthhomeworkButton)\n/* harmony export */ });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions */ \"./js/functions.js\");\n\nvar fifthhomeworkButton = document.querySelector('#getRandomArrayButton');\nfifthhomeworkButton.addEventListener('click', function () {\n  var arrayLength = document.querySelector('.third-card-array-length--input').value;\n  var minNumberOfArray = document.querySelector('.third-card-min--input').value;\n  var maxNumberOfArray = document.querySelector('.third-card-max--input').value;\n  var randomArray = _functions__WEBPACK_IMPORTED_MODULE_0__.homeworkFunctionsObject.fifth(arrayLength, minNumberOfArray, maxNumberOfArray);\n\n  if (Array.isArray(randomArray)) {\n    document.querySelector('.third-card-result__wrapper').innerHTML = \"\\n    <span class=\\\"result\\\">Result: [\".concat(randomArray, \"]</span>\\n    \");\n  } else {\n    document.querySelector('.third-card-result__wrapper').innerHTML = \"\\n    <span class=\\\"result\\\">Result: \".concat(randomArray, \"</span>\\n    \");\n  }\n});\n\n//# sourceURL=webpack:///./js/buttons/third.js?");

/***/ }),

/***/ "./js/functions.js":
/*!*************************!*\
  !*** ./js/functions.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeworkFunctionsObject\": () => (/* binding */ homeworkFunctionsObject)\n/* harmony export */ });\n/* harmony import */ var _assets_homeworks_03_Functions_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/homeworks/03_Functions/script */ \"./assets/homeworks/03_Functions/script.js\");\n/* harmony import */ var _assets_homeworks_04_Arrays_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/homeworks/04_Arrays/script */ \"./assets/homeworks/04_Arrays/script.js\");\n/* harmony import */ var _Users_arseniinetrebenko_Documents_Programming_Cursor_Homework_05_Sorting_methods_of_arrays_js_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../05_Sorting-methods-of-arrays/js/script.js */ \"../../05_Sorting-methods-of-arrays/js/script.js\");\n/* harmony import */ var _assets_homeworks_06_Objects_Rest_spread_operations_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/homeworks/06_Objects--Rest&spread-operations/script */ \"./assets/homeworks/06_Objects--Rest&spread-operations/script.js\");\n/* harmony import */ var _assets_homeworks_07_Closure_Keyword_This_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/homeworks/07_Closure--Keyword-This/script */ \"./assets/homeworks/07_Closure--Keyword-This/script.js\");\n/* harmony import */ var _assets_homeworks_08_Prototypes_ES6_classes_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/homeworks/08_Prototypes--ES6-classes/script */ \"./assets/homeworks/08_Prototypes--ES6-classes/script.js\");\n/* harmony import */ var _assets_homeworks_09_DOM_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/homeworks/09_DOM/script */ \"./assets/homeworks/09_DOM/script.js\");\n/* harmony import */ var _assets_homeworks_10_Events_js_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/homeworks/10_Events/js/script */ \"./assets/homeworks/10_Events/js/script.js\");\n/* harmony import */ var _assets_homeworks_11_Async_Date_Promises_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/homeworks/11_Async&Date&Promises/script */ \"./assets/homeworks/11_Async&Date&Promises/script.js\");\n\n\n\n\n\n\n\n\n\nvar homeworkFunctionsObject = {\n  third: _assets_homeworks_03_Functions_script__WEBPACK_IMPORTED_MODULE_0__.default,\n  fourth: {\n    getPairs: _assets_homeworks_04_Arrays_script__WEBPACK_IMPORTED_MODULE_1__.getPairs,\n    getPairThemes: _assets_homeworks_04_Arrays_script__WEBPACK_IMPORTED_MODULE_1__.getPairThemes,\n    studentsArray: _assets_homeworks_04_Arrays_script__WEBPACK_IMPORTED_MODULE_1__.studentsArray,\n    themesArray: _assets_homeworks_04_Arrays_script__WEBPACK_IMPORTED_MODULE_1__.themes\n  },\n  fifth: _Users_arseniinetrebenko_Documents_Programming_Cursor_Homework_05_Sorting_methods_of_arrays_js_script_js__WEBPACK_IMPORTED_MODULE_2__.default,\n  sixth: {\n    studentsObjectsArray: _assets_homeworks_06_Objects_Rest_spread_operations_script__WEBPACK_IMPORTED_MODULE_3__.studentsObjectsArray,\n    getSubjects: _assets_homeworks_06_Objects_Rest_spread_operations_script__WEBPACK_IMPORTED_MODULE_3__.getSubjects\n  },\n  seventh: {\n    ukraine: _assets_homeworks_07_Closure_Keyword_This_script__WEBPACK_IMPORTED_MODULE_4__.ukraine,\n    latvia: _assets_homeworks_07_Closure_Keyword_This_script__WEBPACK_IMPORTED_MODULE_4__.latvia,\n    litva: _assets_homeworks_07_Closure_Keyword_This_script__WEBPACK_IMPORTED_MODULE_4__.litva,\n    getMyTaxes: _assets_homeworks_07_Closure_Keyword_This_script__WEBPACK_IMPORTED_MODULE_4__.getMyTaxes\n  },\n  eighth: {\n    StudentClass: _assets_homeworks_08_Prototypes_ES6_classes_script__WEBPACK_IMPORTED_MODULE_5__.Student,\n    regularStudent: _assets_homeworks_08_Prototypes_ES6_classes_script__WEBPACK_IMPORTED_MODULE_5__.regularStudent\n  },\n  ninth: {\n    blocksWrapper: _assets_homeworks_09_DOM_script__WEBPACK_IMPORTED_MODULE_6__.blocksWrapper,\n    generateBlocksButton: _assets_homeworks_09_DOM_script__WEBPACK_IMPORTED_MODULE_6__.generateBlocksButton,\n    intervalBlocksColorChangeButton: _assets_homeworks_09_DOM_script__WEBPACK_IMPORTED_MODULE_6__.intervalBlocksColorChangeButton,\n    generateBlocks: _assets_homeworks_09_DOM_script__WEBPACK_IMPORTED_MODULE_6__.generateBlocks,\n    changeBlocksColor: _assets_homeworks_09_DOM_script__WEBPACK_IMPORTED_MODULE_6__.changeBlocksColor,\n    generateBlocksInterval: _assets_homeworks_09_DOM_script__WEBPACK_IMPORTED_MODULE_6__.generateBlocksInterval,\n    getRandomColor: _assets_homeworks_09_DOM_script__WEBPACK_IMPORTED_MODULE_6__.getRandomColor\n  },\n  tenth: {\n    playSound: _assets_homeworks_10_Events_js_script__WEBPACK_IMPORTED_MODULE_7__.playSound,\n    removeTransition: _assets_homeworks_10_Events_js_script__WEBPACK_IMPORTED_MODULE_7__.removeTransition,\n    keys: _assets_homeworks_10_Events_js_script__WEBPACK_IMPORTED_MODULE_7__.keys\n  },\n  eleven: {\n    getChinese: _assets_homeworks_11_Async_Date_Promises_script__WEBPACK_IMPORTED_MODULE_8__.getChinese,\n    lengthInput: lengthInput,\n    resultBlock: resultBlock\n  }\n};\n\n//# sourceURL=webpack:///./js/functions.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _assets_homeworks_10_Events_assets_img_mountains_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/homeworks/10_Events/assets/img/mountains.png */ \"./assets/homeworks/10_Events/assets/img/mountains.png\");\n/* harmony import */ var _buttons_first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/first */ \"./js/buttons/first.js\");\n/* harmony import */ var _buttons_second__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/second */ \"./js/buttons/second.js\");\n/* harmony import */ var _buttons_third__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/third */ \"./js/buttons/third.js\");\n/* harmony import */ var _buttons_fourth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/fourth */ \"./js/buttons/fourth.js\");\n/* harmony import */ var _buttons_fifth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons/fifth */ \"./js/buttons/fifth.js\");\n/* harmony import */ var _buttons_sixth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons/sixth */ \"./js/buttons/sixth.js\");\n/* harmony import */ var _buttons_seventh_seventh_first__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./buttons/seventh/seventh.first */ \"./js/buttons/seventh/seventh.first.js\");\n/* harmony import */ var _buttons_seventh_seventh_second__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./buttons/seventh/seventh.second */ \"./js/buttons/seventh/seventh.second.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './buttons/ninth/'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\n\n\n\n\n\n\n\ndocument.body.style.backgroundImage = \"url(\\\"\".concat(_assets_homeworks_10_Events_assets_img_mountains_png__WEBPACK_IMPORTED_MODULE_1__.default, \"\\\")\");\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css":
/*!******************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css ***!
  \******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n\\n/* Document\\n   ========================================================================== */\\n\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\n\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n\\n/**\\n * Remove the margin in all browsers.\\n */\\n\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\n\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\n\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\n\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\n\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\n\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\n\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\n\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\n\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\n\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\n\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\n\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\n\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\n\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\n\\nbutton,\\n[type=\\\"button\\\"],\\n[type=\\\"reset\\\"],\\n[type=\\\"submit\\\"] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\n\\nbutton::-moz-focus-inner,\\n[type=\\\"button\\\"]::-moz-focus-inner,\\n[type=\\\"reset\\\"]::-moz-focus-inner,\\n[type=\\\"submit\\\"]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\n\\nbutton:-moz-focusring,\\n[type=\\\"button\\\"]:-moz-focusring,\\n[type=\\\"reset\\\"]:-moz-focusring,\\n[type=\\\"submit\\\"]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\n\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\n\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\n\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\n\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n\\n[type=\\\"checkbox\\\"],\\n[type=\\\"radio\\\"] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n\\n[type=\\\"number\\\"]::-webkit-inner-spin-button,\\n[type=\\\"number\\\"]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n\\n[type=\\\"search\\\"] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n\\n[type=\\\"search\\\"]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\n\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\n\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n\\n/**\\n * Add the correct display in IE 10+.\\n */\\n\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n\\n[hidden] {\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///../node_modules/normalize.css/normalize.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/main.scss":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../../node_modules/normalize.css/normalize.css */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/normalize.css/normalize.css\");\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_assets_homeworks_09_DOM_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../assets/homeworks/09_DOM/style.css */ \"../node_modules/css-loader/dist/cjs.js!./assets/homeworks/09_DOM/style.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Regular.ttf */ \"./assets/fonts/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_node_modules_normalize_css_normalize_css__WEBPACK_IMPORTED_MODULE_1__.default);\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_assets_homeworks_09_DOM_style_css__WEBPACK_IMPORTED_MODULE_2__.default);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Roboto\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n}\\n.cards__block {\\n  display: flex;\\n  margin: 0 auto;\\n  width: 80%;\\n  justify-content: space-around;\\n  flex-wrap: wrap;\\n}\\n\\n.homework__card {\\n  backdrop-filter: blur(100px);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  min-width: 35%;\\n  min-height: 30%;\\n  border: 5px dashed white;\\n  border-radius: 10px;\\n  padding: 10px;\\n  margin: 1%;\\n}\\n\\ninput {\\n  background-color: transparent;\\n  color: white;\\n  outline: none;\\n  border: 3px dashed black;\\n  border-radius: 10px;\\n  margin: 10px;\\n  padding: 5px;\\n}\\n\\nbutton {\\n  background-color: black;\\n  color: aliceblue;\\n  outline: none;\\n  border: 3px solid white;\\n  border-radius: 10px;\\n  padding: 10px;\\n  transition: 0.3s all;\\n}\\nbutton:hover, button:focus {\\n  border: 3px dashed white;\\n  padding: 10px 10% 10px 10%;\\n  cursor: pointer;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n#colorizeBlocksButton {\\n  backdrop-filter: blur(100px);\\n  background-color: transparent;\\n  color: black;\\n  margin: 10px;\\n  border: 3px solid #0d0d0d;\\n  border-radius: 10px;\\n  padding: 10px;\\n  transition: 0.3s all;\\n}\\n#colorizeBlocksButton:hover, #colorizeBlocksButton:focus {\\n  border: 3px dashed #010101;\\n  padding: 10px 10% 10px 10%;\\n  cursor: pointer;\\n}\\n\\n.result-wrapper {\\n  margin: 20px;\\n  text-align: center;\\n}\\n.result-wrapper .result {\\n  font-size: 1.3em;\\n}\\n\\n.third-card-result__wrapper {\\n  max-width: 90%;\\n}\\n.third-card-result__wrapper .result {\\n  width: 90%;\\n  word-wrap: break-word;\\n}\\n\\n.eighth-card-result__wrapper .keys {\\n  position: inherit;\\n}\\n\\n.card__description {\\n  text-align: center;\\n  color: white;\\n  margin: 20px;\\n}\\n\\nselect {\\n  text-align: center;\\n  appearance: none;\\n  background-color: transparent;\\n  color: black;\\n  outline: none;\\n  border: 3px solid white;\\n  border-radius: 10px;\\n  padding: 10px;\\n  transition: 0.3s all;\\n}\\nselect:hover, select:focus {\\n  backdrop-filter: blur(100px);\\n  border: 3px dashed white;\\n  padding: 10px 30% 10px 30%;\\n  cursor: pointer;\\n}\\n\\n.keys {\\n  width: 100%;\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  margin: 0 auto;\\n  top: calc(50% - 150px);\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n  align-items: center;\\n  font-family: Roboto, sans-serif;\\n  font-size: 18px;\\n  color: #5574b4;\\n  color: #8c3b8c;\\n}\\n.keys .key {\\n  margin-bottom: 10px;\\n  width: 25%;\\n  height: 30%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  text-align: center;\\n  border: 3px dashed #5574b4;\\n  border-radius: 20px;\\n  padding: 3px;\\n  transition: all 0.09s;\\n}\\n.keys .key.down {\\n  transform: scale(2.1);\\n  border-color: white;\\n  box-shadow: 0 0 10px #8c3b8c;\\n}\\n.keys .key kbd {\\n  color: white;\\n  font-family: Roboto;\\n  font-weight: 900;\\n  font-size: 25px;\\n}\\n\\n@media screen and (max-width: 992px) {\\n  .keys {\\n    min-height: 300px;\\n  }\\n  .keys .key {\\n    width: 25%;\\n  }\\n}\\n@media screen and (max-width: 760px) {\\n  .keys .key {\\n    width: 35%;\\n    margin-bottom: 20px;\\n  }\\n}\\n@media screen and (max-width: 528px) {\\n  .keys {\\n    top: calc(30% - 150px);\\n  }\\n  .keys .key {\\n    width: 50%;\\n    margin-bottom: 40px;\\n  }\\n}\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  background-color: black;\\n}\\n\\n.page--title {\\n  text-align: center;\\n  margin: 5% 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./styles/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./assets/homeworks/09_DOM/style.css":
/*!**********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./assets/homeworks/09_DOM/style.css ***!
  \**********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: black;\\n}\\n\\n.blocks__wrapper {\\n  display: grid;\\n  grid-template-columns: 50px 50px 50px 50px 50px;\\n  width: 250px;\\n  margin: 20px auto;\\n}\\n\\n.block {\\n  width: 50px;\\n  height: 50px;\\n}\\n\\n.buttons__wrapper {\\n  display: flex;\\n  justify-content: center;\\n  margin-top: 40px;\\n}\\n\\n.button {\\n  color: white;\\n  background-color: rgb(86, 35, 153);\\n  border: 4px solid white;\\n  border-radius: 20px;\\n  padding: 10px;\\n  cursor: pointer;\\n  margin: 10px;\\n}\\n\\n.block-inteval-colorizer {\\n  display: none;\\n}\\n\\n.visible{\\n  display: inline-block;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./assets/homeworks/09_DOM/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/img/mountains.png":
/*!*************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/img/mountains.png ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/img/mountains.png?af852c788a837ee18d493b5139270ea9\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/img/mountains.png?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/anxiety.wav":
/*!**************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/anxiety.wav ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/anxiety.wav?1f5db6e8c5416187dfa5bf6eb1741b40\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/anxiety.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/blaster.wav":
/*!**************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/blaster.wav ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/blaster.wav?2a0fc909c0800e907d25c71c147cc715\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/blaster.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/chameleon-tongue.wav":
/*!***********************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/chameleon-tongue.wav ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/chameleon-tongue.wav?450b31dca5ff2247781df881af0c3cb3\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/chameleon-tongue.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/drums.wav":
/*!************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/drums.wav ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/drums.wav?2d120aa5e9d2f9c7bb4d2b29a0a31f61\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/drums.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/jump.wav":
/*!***********************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/jump.wav ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/jump.wav?4a8001d436a9f96b30bab901e2eb1a2f\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/jump.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/new-floor.wav":
/*!****************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/new-floor.wav ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/new-floor.wav?249eaa93086d428b506f902651ed3f2c\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/new-floor.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/shuriken-throw.wav":
/*!*********************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/shuriken-throw.wav ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/shuriken-throw.wav?cd07bfd7537cf0ff5bcf17d474667d35\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/shuriken-throw.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/small-drums.wav":
/*!******************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/small-drums.wav ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/small-drums.wav?1ab6732e4d4554dc4fa90a123f4fd15a\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/small-drums.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/space-mosquito.wav":
/*!*********************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/space-mosquito.wav ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/space-mosquito.wav?28d0f02a8a289aed72656743d7173eaf\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/space-mosquito.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/successful-download.mov":
/*!**************************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/successful-download.mov ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/successful-download.mov?a5b4ba2040cae6e2bc5ec16c4c28bc68\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/successful-download.mov?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/takeoff.wav":
/*!**************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/takeoff.wav ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/takeoff.wav?7a5d4022295fd2a4e772ef43c5bc566c\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/takeoff.wav?");

/***/ }),

/***/ "./assets/homeworks/10_Events/assets/sounds/teleport.wav":
/*!***************************************************************!*\
  !*** ./assets/homeworks/10_Events/assets/sounds/teleport.wav ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"assets/homeworks/10_Events/assets/sounds/teleport.wav?584b19228f1da021627e357edf0c2676\");\n\n//# sourceURL=webpack:///./assets/homeworks/10_Events/assets/sounds/teleport.wav?");

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./styles/main.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/fonts/Roboto-Regular.ttf":
/*!*****************************************!*\
  !*** ./assets/fonts/Roboto-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a8d6ac03c7b96b7acb62.ttf\";\n\n//# sourceURL=webpack:///./assets/fonts/Roboto-Regular.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;