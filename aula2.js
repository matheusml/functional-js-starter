/*
  Higher-Order functions:
  1) Recebem outra função como parâmetro
  2) Retornam uma função
*/

function sum(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function calc(fn, x, y) {
  return fn(x, y);
}

calc(sum, 1, 2); // 3
calc(mult, 1, 2); // 2