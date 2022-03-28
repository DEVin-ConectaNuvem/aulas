
// revisão classes
// const ul = document.getElementById('teste');
// class Item {
//   static #nextId = 0;
//   #id;
//   descricao;
//   constructor(desc = '') {
//     this.#id = Item.#nextId++;
//     this.descricao = desc;
//   }
//   get id() {
//     return this.#id;
//   }
//   montaItem() {
//     const li = document.createElement('li');
//     li.innerHTML = this.descricao;
//     return li;
//   }
// }
// class Tarefa extends Item {
//   #status;
//   constructor(desc, stat = false) {
//     super(desc);
//     this.#status = stat;
//   }
//   set status(novoStatus) {
//     this.#status = !!novoStatus;
//   }
//   montaItem() {
//     const li = document.createElement('li');
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.checked = this.#status;
//     const texto = document.createTextNode(this.descricao);
//     li.appendChild(checkbox);
//     li.appendChild(texto);
//     return li;
//   }
// }
// //const itemA = new Item('bolacha');
// const itemA = new Tarefa('bolacha');
// console.log(itemA);
// ul.appendChild(itemA.montaItem())

// ARROW FUNCTIONS

// declaração clássica
function saudacoes() {
  console.log('Olá! A');
}
const saudacoesComum = function () {
  console.log('Olá! Comum');
}
// declaração arrow
const saudacoesArrow = () => {
  console.log('Olá! =>');
}

// saudacoes();
// saudacoesComum();
// saudacoesArrow();

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// vetor.forEach(function (item) {
//   console.log(item);
//   console.log('a');
// })

// vetor.forEach(
//   item => console.log(item)
// )

// funções equivalentes
function quadradoA(numero) {
  return numero ** 2;
}
const quadradoB = function (numero) {
  return numero ** 2;
}
const quadradoC = numero => {
  return numero ** 2;
}

// arrow function sem chaves retorna
// automaticamente o valor da instrução
const quadrado = numero => numero ** 2;
const resultado = quadrado(2);
//console.log(resultado);

vetor.forEach(item => console.log(item))
