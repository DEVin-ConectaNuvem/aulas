
const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// equivalente a função comum
// function calculaQuadrado(numero) {
//   return numero ** 2;
// }

const arrayQuadrados = arrayNumeros.map(numero => numero ** 2);

console.log(arrayQuadrados);

// equivalente a função comum
// function testaMaiorQue30(numero) {
//   return numero > 30;
// }

const arrayFiltrados = arrayQuadrados.filter(numero => numero > 30);

console.log(arrayFiltrados);
