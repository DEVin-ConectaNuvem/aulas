
var nome = '';
var idade = '';
var querEsporte = '';

// ideia para "forçar" o preenchimento
do { 
  nome = prompt('Qual seu nome?');
  idade = prompt('Qual sua idade?');
  querEsporte = confirm('Quer praticar esporte?');
} while (!nome && !idade);

// if (querEsporte) {
//   alert(
//     `${nome}, de ${idade} anos, quer praticar esportes`
//   );
// } else {
//   alert(
//     `${nome}, de ${idade} anos, não quer praticar esportes`
//   );
// }

var resposta = `${nome}, de ${idade} anos,${querEsporte ? '' : ' não'} quer praticar esportes`

alert(resposta);
console.log(resposta);
