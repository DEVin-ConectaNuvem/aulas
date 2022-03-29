const ul = document.getElementById('teste');

// revisão classes
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

//const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
//const resultado = quadrado(2);
//console.log(resultado);
//vetor.forEach(item => console.log(item))

// a palavra reservada this, em uma função comum
// possui o this do contexto de execução
class ItemA {
  descricao;
  constructor(desc) {
    this.descricao = desc;
  }
  montaItem() {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.onclick = function () {
      // este this é o checkbox no evento de click
      console.log(this);
    }

    const texto =
      document.createTextNode(this.descricao);
    li.appendChild(checkbox);
    li.appendChild(texto);
    return li;
  }
}
// a palavra reservada this, em uma função arrow
// possui o this do contexto de definição
class ItemB {
  descricao;
  constructor(desc) {
    this.descricao = desc;
  }
  montaItem() {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    checkbox.onclick = () => {
      // este this é a instância da classe Item
      console.log(this);
    }

    const texto =
      document.createTextNode(this.descricao);
    li.appendChild(checkbox);
    li.appendChild(texto);
    return li;
  }
}


const item = new ItemB('blah');

//console.log(item);
ul.appendChild(item.montaItem())


// exemplos em classes

// função criada fora de contexto
function mostraThisA() {
  console.log(this, this.nome);
}
const mostraThisB = () => {
  console.log(this, this.nom);
}

const fruta = {
  nome: 'Melão',
  imprimirA: mostraThisA,
  imprimirB: mostraThisB
};

// chamada no contexto do objeto
//fruta.imprimirA(); // CONSOLE: 'Melão
// Funções comuns redefinem this ao contexto
//fruta.imprimirB(); // CONSOLE: undefined
// Arrow functions não redefinem this


// EXEMPLOS FUNÇÕES DE ARRAY

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = vetor.map(n => n * 2);

console.log(vetor);
console.log(result);

const filtrado = vetor.filter(n => n > 5);
// equivalente a
// const filtrado = vetor.filter(function (n) {
//  return n > 5;
// });

console.log(filtrado);