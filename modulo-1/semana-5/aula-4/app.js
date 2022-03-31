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
  });

//console.log('Após')


// EXEMPLO DE FETCH
//'/modulo-1/semana-5/aula-4/teste.txt'
//'https://viacep.com.br/ws/88032005/json'
const p = document.getElementById('display');

fetch('https://viacep.com.br/ws/88032005/json')
  .then(resposta => {
    resposta.json().then(conteudo => {
      console.log(conteudo);
      p.innerHTML = conteudo.logradouro;
    })
  })
  .catch(erro => {
    console.log(erro)
  });

fetch('/modulo-1/semana-5/aula-4/teste.txt')
  .then(resposta => {
    resposta.text().then(conteudo => {
      console.log(conteudo);
    })
  })
  .catch(erro => {
    console.log(erro)
  });
