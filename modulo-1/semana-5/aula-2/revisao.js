
// revisao de arrow functions
// function comum() {
//   console.log('comum');
// }
// const anonima = function () {
//   console.log('anonima');
// }
// const arrow = () => {
//   console.log('arrow');
// }
// const arrowA = nome => {
//   return `Olá, ${nome}`;
// }
// const arrowB = nome => `Olá, ${nome}`;
// const arrowC = (a, b) => a + b;

// comum();
// anonima();
// arrow();
//console.log(this);
// const campoNome = 'Romeu';
// const result = arrowB(campoNome);
// //console.log(result);
// const resultC = arrowC(2, 4);
// console.log(resultC);

// relembrando contexto this
// function mostraThisA() {
//   console.log(this, this.nome);
// }
// const mostraThisB = () => {
//   console.log(this, this.nome);
// }
// const fruta = {
//   nome: 'Melão',
//   imprimirA: mostraThisA,
//   imprimirB: mostraThisB
// };

// fruta.imprimirA();
// fruta.imprimirB();


// revisão de métodos de arrays

const vet = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = vet.reduce((acc, item) => acc + item, 0);

//console.log(result);

const produtos = [
  { nome: 'batata', qtd: 2, preco: 4 },
  { nome: 'arroz', qtd: 3, preco: 3 },
];

const accFunc = (acumulador, item) => {
  return acumulador + (item.qtd * item.preco);
}
const total = produtos.reduce(accFunc, 10);

//equivalente à função anterior
const totalB = produtos.reduce(
  (qqrcoisa, item) => qqrcoisa + (item.qtd * item.preco),
  0
);

//console.log(total)


