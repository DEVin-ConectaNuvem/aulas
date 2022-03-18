// pega os elementos
var numero = document.getElementById('numero');
var display = document.getElementById('display');
var botao = document.getElementById('botao');

// cria a função
function verificar() {
  var ehPar = numero.value % 2 === 0;

  if (ehPar) {
    display.innerText = 'É par!';
  } else {
    display.innerText = 'É impar!';
  }
}

//botao.onclick = verificar;
botao.addEventListener('click', verificar);
