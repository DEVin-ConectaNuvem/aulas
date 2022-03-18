// aula de objetos/JSON/localStorage tira-duvidas

var p = document.getElementById('display');

var carro = {
  marca: 'ford',
  modelo: 'escort',
  ano: 1995,
  dono: false,
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

// for in me dá keys/indexes
// for (var key in carro) {
//   console.log(carro[key]);
// }

// for of se usa apenas com array me dá os valores
// for (var item of Object.entries(carro)) {
//   console.log(item);
// }

console.log(carro);

// transforma objeto em string JSON
var carroJSON = JSON.stringify(carro);

console.log(carroJSON);

p.innerHTML = carroJSON;

// transforma string JSON em objeto
var carroObj = JSON.parse(carroJSON);

console.log(carroObj);
