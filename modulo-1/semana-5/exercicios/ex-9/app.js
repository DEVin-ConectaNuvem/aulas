const campoCEP = document.getElementById('campo-cep');
const botaoBuscar = document.getElementById('botao-buscar');
const pResultado = document.getElementById('resultado');

//  https://viacep.com.br/ws/88032005/json

// function buscaCEP() {
//   const cep = campoCEP.value;
//   const url = `https://viacep.com.br/ws/${cep}/json`;
//   fetch(url)
//     .then(resposta => {
//       console.log(resposta);
//       resposta.json().then(conteudo => {
//         console.log(conteudo);
//         pResultado.innerText = conteudo.localidade;
//       });
//     })
//     .catch(erro => {
//       console.error(erro);
//     });
// }

async function buscaCEP() {
  try {
    const cep = campoCEP.value;
    const url = `https://viacep.com.br/ws/${cep}/json`;

    const resposta = await fetch(url);
    //console.log(resposta);
    const conteudo = await resposta.json();
    //console.log(conteudo);

    pResultado.innerText = conteudo.localidade;
  } catch (erro) {
    console.error(erro);
  }
}

botaoBuscar.addEventListener('click', buscaCEP);
