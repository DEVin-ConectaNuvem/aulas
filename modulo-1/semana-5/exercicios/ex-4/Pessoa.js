
export default class Pessoa {
  nome;
  #cpf;
  constructor(nome, cpf) {
    this.nome = nome;
    this.#cpf = cpf;
  }
  imprime() {
    console.log(`${this.nome} - ${this.#cpf}`);
  }
  // exemplo de getter
  get cpf() {
    return this.#cpf;
  }
  // exemplo de setter
  set cpf(cpf) {
    this.#cpf = cpf;
  }
}

// pode tambéms er feito no final do documento
// export default Pessoa
