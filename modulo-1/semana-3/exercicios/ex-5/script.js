// pega elementos do DOM para manipular
var display = document.getElementById('display');

function atualizaRelogio() {
  // pega o momento atual
  var agora = new Date();
  // atualiza o display
  display.innerHTML = agora.toLocaleTimeString(
    navigator.language,
    {
      hour: '2-digit',
      minute:'2-digit'
    }
  );
};

// atualiza relogio a cada 1 segundo
setInterval(atualizaRelogio, 1000);
