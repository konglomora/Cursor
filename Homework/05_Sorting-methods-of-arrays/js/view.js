// * Task 1 ---------------------------------------------------------------------------------------------

function runFirstTask() {
    const length = document.querySelector('.function1__input1').value;
    const min = document.querySelector('.function1__input2').value;
    const max = document.querySelector('.function1__input3').value;
    document.querySelector(
        '.function1__result'
    ).innerHTML = `<span class="result">Результат: ${getRandomArray(
        length,
        min,
        max
    )}</span>`;
}

document.querySelector('.function1__submit').onclick = runFirstTask;

// * Task 2 ---------------------------------------------------------------------------------------------

function runSecondTask() {
    const stringArr = document
        .querySelector('.function2__input1')
        .value.split(',');
    const numbersArray = stringArr.map((item, i, arr) => {
        if (arr[i].trim() === '') {
            arr.splice(--i, 1);
        } else return +item;
    });
    document.querySelector(
        '.function2__result'
    ).innerHTML = `<span class="result">Результат: ${getModa(
        ...numbersArray
    )}</span>`;
}

document.querySelector('.function2__submit').onclick = runSecondTask;

// * Task 3 ---------------------------------------------------------------------------------------------

function runThirdTask() {
    const stringArr = document
        .querySelector('.function3__input')
        .value.split(',');
    const numbersArray = stringArr.map((item, i, arr) => {
        if (arr[i].trim() === '') {
            arr.splice(--i, 1);
        } else return +item;
    });
    document.querySelector(
        '.function3__result'
    ).innerHTML = `<span class="result">Результат: ${getAverage(
        ...numbersArray
    )}</span>`;
}

document.querySelector('.function3__submit').onclick = runThirdTask;

// * Task 4 ---------------------------------------------------------------------------------------------

function runFourthTask() {
    const stringArr = document
        .querySelector('.function4__input')
        .value.split(',');

    const numbersArray = stringArr.map((item, i, arr) => {
        if (arr[i].trim() === '') {
            arr.splice(--i, 1);
        } else return +item;
    });
    document.querySelector(
        '.function4__result'
    ).innerHTML = `<span class="result">Результат: ${getMedian(
        ...numbersArray
    )}</span>`;
}

document.querySelector('.function4__submit').onclick = runFourthTask;

// * Task 5 ---------------------------------------------------------------------------------------------

function runFifthTask() {
    const stringArr = document
        .querySelector('.function5__input')
        .value.split(',');

    const numbersArray = stringArr.map((item, i, arr) => {
        if (arr[i].trim() === '') {
            arr.splice(--i, 1);
        } else return +item;
    });
    document.querySelector(
        '.function5__result'
    ).innerHTML = `<span class="result">Результат: ${filterEvenNumbers(
        ...numbersArray
    )}</span>`;
}

document.querySelector('.function5__submit').onclick = runFifthTask;

// * Task 6 ---------------------------------------------------------------------------------------------

function runSixthTask() {
    const stringArr = document
        .querySelector('.function6__input')
        .value.split(',');

    const numbersArray = stringArr.map((item, i, arr) => {
        if (arr[i].trim() === '') {
            arr.splice(--i, 1);
        } else return +item;
    });
    document.querySelector(
        '.function6__result'
    ).innerHTML = `<span class="result">Результат:  ${countPositiveNumbers(
        ...numbersArray
    )}</span>`;
}

document.querySelector('.function6__submit').onclick = runSixthTask;

// * Task 7 ---------------------------------------------------------------------------------------------

function runSeventhTask() {
    const stringArr = document
        .querySelector('.function7__input')
        .value.split(',');

    const numbersArray = stringArr.map((item, i, arr) => {
        if (arr[i].trim() === '') {
            arr.splice(--i, 1);
        } else return +item;
    });
    document.querySelector(
        '.function7__result'
    ).innerHTML = `<div class="result">Результат: ${getDividedByFive(
        ...numbersArray
    )}</div>`;
}

// 11, 22, 12, 2

document.querySelector('.function7__submit').onclick = runSeventhTask;

// * Task 8 ---------------------------------------------------------------------------------------------

function runEighthTask() {
    const string = document.querySelector('.function8__input1').value;
    const otherBadWords = document.querySelector('.function8__input2').value;
    document.querySelector(
        '.function8__result'
    ).innerHTML = `<div class="result">Результат: ${replaceBadWords(
        string,
        ...otherBadWords
    )}</div>`;
}

document.querySelector('.function8__submit').onclick = runEighthTask;

// * Task 9 ---------------------------------------------------------------------------------------------

function runNinethTask() {
    const word = document.querySelector('.function9__input1').value;
    let numberOfSyllables = document.querySelector('.function9__input2').value;
    if (numberOfSyllables.trim() === '') numberOfSyllables = 3;
    else numberOfSyllables = +numberOfSyllables;

    document.querySelector(
        '.function9__result'
    ).innerHTML = `<span class="result">Результат: ${divideBySyllables(
        word,
        numberOfSyllables
    )}</span>`;
}

document.querySelector('.function9__submit').onclick = runNinethTask;
