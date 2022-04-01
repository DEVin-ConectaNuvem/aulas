// revisão import e spread
// import { concatena } from './utils.js';
// const concatenado = concatena([1, 2, 3], [4, 5, 6]);
// console.log(concatenado);

const listaCEPs = {
  '88034001': {
    logradouro: 'Rua do SENAI SC'
  }
}
// exemplo de criação de promisse
function buscaCEPpromise(cep) {
  return new Promise((resolvido, rejeitado) => {
    const resultado = listaCEPs[cep];
    
    const erro = resultado ? null : 'CEP inválido!';

    if (erro) {
      rejeitado(erro);
    } else {
      resolvido(resultado);
    }
  });
}

buscaCEPpromise('88034001')
  .then(resultado => {
    //console.log(resultado);
  })
  .catch(erro => {
    //console.log('ERRRRRRROOOOU');
    //console.log(erro);
  })
  .finally(() => {
    //console.log('Sempre executa ao final de tudo.');
  });

//console.log('Após')


// EXEMPLOS DE FETCH

// fetch('/modulo-1/semana-5/aula-4/teste.txt')
//   .then(resposta => {
//     resposta.text().then(conteudo => {
//       console.log(conteudo);
//     })
//   })
//   .catch(erro => {
//     console.log(erro)
//   });

//'/modulo-1/semana-5/aula-4/teste.txt'
//'https://viacep.com.br/ws/88032005/json'
const display = document.getElementById('display');
const campoCEP = document.getElementById('campo-cep');
const btnCEP = document.getElementById('btn-cep');

function buscaCEPfetch() {
  const cep = campoCEP.value;

  if (!cep) {
    display.innerHTML = 'Informe um CEP!';
    return;
  }

  fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(resposta => {
      resposta.json().then(conteudo => {
        console.log(conteudo);
        display.innerHTML = conteudo.localidade;
      })
    })
    .catch(erro => {
      console.log(erro);
    });
}

//btnCEP.addEventListener('click', buscaCEPfetch);


// EXEMPLOS ASYNC AWAIT

// promise com atraso
function delay(ms) {
  return new Promise(resolve => {
      setTimeout(() => resolve('blah'), ms);
    }
  );
}

// uma arrow function assíncrona
async function buscaCEP() {
  // comando de espera
  const resposta = await delay(1000);
  // executa após conclusão de delay
  console.log('Terminei de esperar! ' + resposta);
}

// roda o exemplo
// buscaCEP();
// imprime primeiro no console
// console.log('Executei o console log');

// async await com fetch

async function buscaCEPawait() {
  const cep = campoCEP.value;

  if (!cep) {
    display.innerHTML = 'Informe um CEP!';
    return;
  }

  const url = `https://viacep.com.br/ws/${cep}/json`;
  const resposta = await fetch(url);
  const conteudo = await resposta.json()

  console.log(conteudo);
  display.innerHTML = conteudo.localidade;

  // .catch(erro => {
  //   console.log(erro);
  // });
}

//btnCEP.addEventListener('click', buscaCEPawait);


// EXEMPLO COM TRY CATCH

async function buscaCEPtry() {
  try {
    const cep = campoCEP.value;

    if (cep.length !== 8) {
      throw new Error('CEP com tamanho inválido!');
    } else if (!/^\d+$/.test(cep)) {
      throw new Error('CEP só pode conter números!');
    }

    const url = `https://viacep.com.br/ws/${cep}/json`;
    const resposta = await fetch(url);
    const conteudo = await resposta.json()

    console.log(conteudo);
    display.innerHTML = conteudo.localidade;

  } catch (erro) {
    display.innerHTML = erro;
    console.log('DENTRO DO CATCH!');
    console.log({ erro });
  } finally {
    console.log('FINALLY!');
  }
}

btnCEP.addEventListener('click', buscaCEPtry);


// EXEMPLO THE CAT API

const btnCat = document.getElementById('btn-cat');
const imgCat = document.getElementById('img-cat');

async function fetchCat() {
  try {

    const url = 'https://api.thecatapi.com/v1/images/search';
    const resposta = await fetch(url);
    const conteudo = await resposta.json()

    console.log({ conteudo });
    imgCat.src = conteudo[0].url;

  } catch (erro) {
    console.error(erro);
  }
}

btnCat.addEventListener('click', fetchCat);



// exemplo exercício 3

const produtos = [
  { nome: 'arroz', preco: 9 },
  { nome: 'feijao', preco: 12 },
  { nome: 'batata', preco: 8 },
  { nome: 'macarrao', preco: 5 }
];

let acc = 0;

const total = produtos.reduce((acc, item) => {
  return acc + item.preco;
}, 0);

console.log(total);
