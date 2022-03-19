// pega elementos do DOM para manipular
var display = document.getElementById('display');

function atualizaRelogio() {
  // pega o momento atual
  var agora = new Date();
  // atualiza o display
  display.innerHTML = agora.toLocaleTimeString();
};

// atualiza relogio a cada 1 segundo
setInterval(atualizaRelogio, 1000);
