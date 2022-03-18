// aula de objetos/JSON/localStorage tira-duvidas

var carro = {
  marca: 'ford',
  modelo: 'escort',
  ano: 1995,
  revisoes: [
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

carro.revisoes[0].descricao = 'MUDEI';

//console.log(carro);
//console.log(carro.modelo);
//console.log(carro.revisoes[0].descricao);
// carro.revisoes.forEach(function (item) {
//  console.log(item);
// });

for (var key in carro) {
  console.log(key);
}
