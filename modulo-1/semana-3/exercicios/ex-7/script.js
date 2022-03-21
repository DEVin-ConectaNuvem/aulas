// pega elementos do DOM
var pDisplay = document.getElementById('display');

// função para verificar a estação
function verificaEstacao() {
  // pega a data e o ano atual
  var data = new Date();
  var ano = data.getFullYear();

  // inicializa variaveis com as datas de inicio das estações
  // lembrando que os meses de Date() vão de 0 a 11
  // então precisamos reduzir 1 do numero correto do mes
  // new Date(ano, mes - 1, dia);

  // 22/03 a 21/06 - Outono;
  var inicioOutono = new Date(ano, 02, 22);
  // 22/06 a 21/09 - Inverno;
  var inicioInverno = new Date(ano, 05, 22);
  // 22/09 a 21/12 - Primavera
  var inicioPrimavera = new Date(ano, 08, 22);
  // 22/12 a 21/03 - Verão;
  var inicioVerao = new Date(ano, 11, 22);
  
  // define valor inicial da variavel estação
  var estacao = 'Verão';

  // testa se a data atual é menor que o inicio do outono
  if (data.getTime() < inicioOutono.getTime()) {
    estacao = 'Verão';
    // se sim é verão
  }
  // senão testa se a data atual é menor que o inicio do inverno
  else if (data.getTime() < inicioInverno.getTime()) {
    estacao = 'Outono';
    // se sim é outono
  }
  // senão testa se a data atual é menor que o inicio da primavera
  else if (data.getTime() < inicioPrimavera.getTime()) {
    estacao = 'Inverno';
    // se sim é inverno
  }
  // senão testa se a data atual é menor que o inicio do verão
  else if (data.getTime() < inicioVerao.getTime()) {
    estacao = 'Primavera';
    // se sim é primavera
  }
  // senão, é verão

  // exibe na tela
  pDisplay.innerHTML = `${estacao}.`;

  // lembrando: existe várias maneiras de resolver
  // esse problema, esta é apenas uma delas
}

// executa a fução
verificaEstacao();
