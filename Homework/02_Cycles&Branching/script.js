let N = +prompt('input FIRST number', '');
console.log(`Type of N = ${typeof N} & N = ${N}`);

while (isNaN(Math.trunc(N)) && !N) {
    N = +prompt('It`s not a number, please try again', '');
}

let M = +prompt('input SECOND number', '');
console.log(`Type of M = ${typeof M} & M = ${M}`);

while (isNaN(Math.trunc(M)) && !M) {
    M = +prompt('It`s not a number, pslease try again', '');
}

const skipParity = confirm('Skip parity at adding?');

let sumOfnumbers = 0;
let minNumber = Math.min(N, M);
let maxNumber = Math.max(N, M);

for (minNumber; minNumber <= maxNumber; minNumber++) {
    if (skipParity && minNumber % 2 == 0) {
        continue;
    }
    sumOfnumbers += minNumber;
    console.log(sumOfnumbers);
}

alert(`Summ of numbers is ${sumOfnumbers}`);
