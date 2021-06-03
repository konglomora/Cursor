// let n = +prompt('Input first number', '');
// let m = +prompt('Input second number', '');

// alert(Number.isInteger(n));
// alert(Number.isInteger(m));

// // for ( n; n <= m; n++) {
// //   if (isInteger(n) && isInteger(m)) {
// //     alert('Number is not integer');
// //   } else if {

// //   }
// // }
// let N;

// do {
//     N = +prompt('input FIRST integer number');
// } while (!Number.isInteger(N) || isNaN(N) || !N); // Проверяет N, и если хоть 1 из вариантов возвращает true - опять запрашивает у пользователя N

// let M;

// do {
//     M = +prompt('input SECOND integer number');
// } while (!Number.isInteger(M) || isNaN(M) || !M);

// ! ------------------------------------------------

let N, M;

while (!Number.isInteger(N) || isNaN(N) || !N) {
    N = +prompt('input FIRST integer number');
}

while (!Number.isInteger(M) || isNaN(M) || !M) {
    M = +prompt('input SECOND integer number');
} 

const skipParity = confirm('Skip parity at adding?')