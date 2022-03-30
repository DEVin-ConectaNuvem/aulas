
import Pessoa, { daTchau, daOi as ola } from './utils.js'

//console.log(testeExport);
const romeu = new Pessoa('Romeu', 29); // default
//console.log(romeu);

//ola(); // função renomeada
//daTchau(); // função com mesmo nome



// EXEMPLOS OPERADOR REST

// function apresenta(nome, ...resto) {
//   console.log(`Olá, ${nome}(${resto})`);
// }
// apresenta('Romeu', 29, 'Programador', 'Professor');

function somaTudo(a, b, c, ...numeros) {
  console.log(a, b, c);
  return numeros.reduce((acc, num) => acc + num, 0)
}

const result = somaTudo(2, 45, 3, 33, 78);
console.log(result);
