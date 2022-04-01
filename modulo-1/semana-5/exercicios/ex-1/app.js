
const campoNome = document.getElementById('campo-nome');
const botaoOla = document.getElementById('botao-ola');
const pMensagem = document.getElementById('mensagem');

// const mensagemOla = (nome) => {
//   return `Olá, ${nome}!`;
// }

// equivalente à
const mensagemOla = nome => `Olá, ${nome}!`;

function lidaComCLick() {
  const nome = campoNome.value;
  const mensagem = mensagemOla(nome);
  pMensagem.innerText = mensagem;
}

botaoOla.addEventListener('click', lidaComCLick);
