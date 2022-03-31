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

function buscaCEP() {
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
      console.log(erro)
    });
}

btnCEP.addEventListener('click', buscaCEP);


// EXEMPLOS ASYNC AWAIT
