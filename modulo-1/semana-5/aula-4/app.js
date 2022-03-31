// revisão import e spread
// import { concatena } from './utils.js';
// const concatenado = concatena([1, 2, 3], [4, 5, 6]);
// console.log(concatenado);

const listaCEPs = {
  '88034001': {
    logradouro: 'Rua do SENAI SC'
  }
}

function buscaCEPpromise(cep) {
  return new Promise((resolve, reject) => {
    const resultado = listaCEPs[cep];
    
    const erro = resultado ? null : 'CEP inválido!';

    if (erro) {
      reject(erro);
    } else {
      resolve(resultado);
    }
  });
}

buscaCEPpromise('88034001')
  .then(resultado => {
    console.log(resultado);
  })
  .catch(erro => {
    console.log('ERRRRRRROOOOU');
    console.log(erro);
  })
  .finally(() => {
    console.log('FINAL');
  });
