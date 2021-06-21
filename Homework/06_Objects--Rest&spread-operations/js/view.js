// * Task 1 ---------------------------------------------------------------------------------------------

function runFirstTask() {
    const studentNumber = +document.querySelector('.function1__input').value - 1;
    document.querySelector(
        '.function1__result'
    ).innerHTML = `<span class="result">Результат: ${getSubjects(
        studentNumber
    )}</span>`;
}

document.querySelector('.function1__submit').onclick = runFirstTask;

// * Task 2 ---------------------------------------------------------------------------------------------

function runSecondTask() {
    const studentNumber = +document.querySelector('.function2__input').value - 1;
    document.querySelector(
        '.function2__result'
    ).innerHTML = `<span class="result">Результат: ${getAverageMark(
        studentNumber
    )}</span>`;
}

document.querySelector('.function2__submit').onclick = runSecondTask;

// * Task 3 ---------------------------------------------------------------------------------------------

function runThirdTask() {
    const studentNumber = +document.querySelector('.function3__input').value - 1;
    const result = getStudentInfo(studentNumber);
    document.querySelector(
        '.function3__result'
    ).innerHTML = `<div class="result">Результат: ${JSON.stringify(result)} </div>`;
}

document.querySelector('.function3__submit').onclick = runThirdTask;

// * Task 4 ---------------------------------------------------------------------------------------------

function runFourthTask() {
    document.querySelector(
        '.function4__result'
    ).innerHTML = `<span class="result">Результат: ${getStudentsNames(
        students
    )}</span>`;
}

document.querySelector('.function4__submit').onclick = runFourthTask;

// * Task 5 ---------------------------------------------------------------------------------------------

function runFifthTask() {
    document.querySelector(
        '.function5__result'
    ).innerHTML = `<span class="result">Результат: ${getBestStudent(
       students
    )}</span>`;
}

document.querySelector('.function5__submit').onclick = runFifthTask;

// * Task 6 ---------------------------------------------------------------------------------------------

function runSixthTask() {
    const word = document.querySelector('.function6__input').value

    document.querySelector(
        '.function6__result'
    ).innerHTML = `<span class="result">Результат:  ${JSON.stringify(calculateWordLetters(
        word
    ))}</span>`;
}

document.querySelector('.function6__submit').onclick = runSixthTask;
