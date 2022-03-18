// aula de objetos/JSON/localStorage tira-duvidas

var carro = {
  marca: 'ford',
  modelo: 'escort',
  ano: 1995,
  revisoes2: [
    {
      data: '01/01/2022',
      descricao: 'trocado oleo'
    },
    {
      data: '15/06/2021',
      descricao: 'trocado pneus'
    }
  ]
};

console.log(carro);
console.log(carro.modelo);
console.log(carro.revisoes2[0].descricao);
