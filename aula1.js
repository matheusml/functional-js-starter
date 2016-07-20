/*
  Funções Puras:
  1) Dependem apenas dos inputs passados como parâmetro
  2) Não fazem alterações fora do escopo da própria função
*/

var counter = 0;

function increment() {
  counter = counter + 1;
  return counter;
}

function increment(count) {
  return count + 1;
}