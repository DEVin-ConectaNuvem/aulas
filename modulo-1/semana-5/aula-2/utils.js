
export const testeExport = 42;

export default class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

export function daOi() {
  console.log('Oi!');
}

export function daTchau() {
  console.log('Tchau!');
}

//const utilitarios = {
//   daOi,
//   testeExport,
//   Pessoa
// }

// export default utilitarios
