
import Pessoa, { daTchau, daOi as ola } from './utils.js'

//console.log(testeExport);
//const romeu = new Pessoa('Romeu', 29); // default
//console.log(romeu);

//ola(); // função renomeada
//daTchau(); // função com mesmo nome



// EXEMPLOS OPERADOR REST

// function apresenta(nome, ...resto) {
//   console.log(`Olá, ${nome}(${resto})`);
// }
// apresenta('Romeu', 29, 'Programador', 'Professor');

function somaTudo(a, ...numeros) {
  console.log(a);
  return numeros.reduce((acc, num) => acc + num, 0)
}

//const result = somaTudo('Breno', 45, 3, 33, 78);
//console.log(result);

// EXEMPLOS SPREAD

// const romeu = ['Romeu', 29, 'Programador'];

// function apresenta(nome, idade, prof) {
//   console.log(`${nome}, ${idade} (${prof})`)
// }
// apresenta(...romeu);


// obedece a ordem do spread
// const vetUm = [1, 2, 3, 4];
// const vetDois = [5, 6, 7, 8];
// const concat = [...vetDois, ...vetUm];
// console.log(concat)

const objUm = { nome: 'Ada', idade: 27, prof: 'Prog' };
// substirui itens com mesmo nome de acordo com a ordem
// da aplicação do spread
const objDois = { ...objUm, nome: 'Romeu' };

//console.log(objDois)

// EXEMPLOS DESTRUCT

// renomeando um item de objeto
// pegando item com nome certo
// pegando restante dos itens
const { nome: blah, idade, ...sobrou } = objUm;

//console.log(blah, idade, sobrou);

const vet = ['Romeu', 2, 3, 4, 5];

const [str, xx, ...blau] = vet;

//console.log(str, xx, blau);

// destruct na definição da função com valores padrão
function apresentaP({ nome = 'A', idade = 0, prof = 'P' }) {
  console.log(
    `${nome}, ${idade}, ${prof}`
  );
}
//apresentaP(objUm);
//apresentaP({});

const complex = {
  nome: 'Juliana',
  itens: { key: 'chave' }
}

// destruct do desctruct (inception)
const { nome = 'Marta', itens: { key } } = complex

console.log(nome, key);

const prods = [
  { titulo: 'batata', preco: 3 },
  { titulo: 'feijao', preco: 6 },
]

const [{ titulo, preco }, bar] = prods

console.log(titulo, preco, bar)
