
// Exemplos de setTimeout e setInterval
// function falaOi() {
//   console.count('Oi');
// }
//var tOi = setTimeout(falaOi, 2000);
//clearTimeout(tOi);
// var iOi = setInterval(falaOi, 1000);
// setTimeout(function () {
//   console.log('Limpou o interval!');
//   clearInterval(iOi);
// }, 4000);
// var i = 1;
// var intervalOi = setInterval(function () {
//   falaOi();
//   i++;
//   if (i > 3) {
//     clearInterval(intervalOi);
//   }
// }, 1000);

var carrosVet = [];
carrosVet[0] = 'gol';
carrosVet[1] = 'escort';
carrosVet[2] = 'corsa';

//console.log(carrosVet);

var carrosObj = {
  teste_um: 'tal',
  daOi: function () {
    console.log('oi no objeto');
  }
};

console.log(carrosObj);

carrosObj.bla = 'gol';
carrosObj.foo = 'escort';
carrosObj.bar = 'corsa';
carrosObj['barrere'] = 'corsa';

console.log(carrosObj);

carrosObj.daOi();

