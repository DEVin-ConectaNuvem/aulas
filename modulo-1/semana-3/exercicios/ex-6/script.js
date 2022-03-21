// pega elementos do DOM
var inputData = document.getElementById('nascimento');
var btnCalcular = document.getElementById('calcular');
var pDisplay = document.getElementById('display');

// função para o calculo da idade
function calcularIdade() {
  // pega valor do input
  var data = inputData.value;

  // verifica se a data é invalida
  if (typeof data !== 'string' || data.length !== 10) {
    console.error('Data inválida');
    return; // termina a execução da função
  }

  // se a data é valida 'aaaa-mm-dd'
  // separa a data do input por hífen
  data = data.split('-');
  // ['aaaa', 'mm', 'dd']

  // cria uma instancia de data com a data de nascimento
  // new Date(ano, mes, dia);
  var nascimento = new Date(
    data[0], // ano
    data[1] - 1, // mês de 0 a 11
    data[2] // dia
  );
  // como o mes é de 0 a 11, precisamos subtrair 1

  // faz a diferença dos milissegundos entre nascimento e agora
  var msDiff = Date.now() - nascimento.getTime();

  // cria uma nova data com a diferença
  var dataDiff = new Date(msDiff);

  // pega o ano da data de diferensa e subtrai 1970
  var idade = dataDiff.getUTCFullYear() - 1970

  // exibe na tela
  pDisplay.innerHTML = `${idade} anos de idade`;

  // lembrando: existe várias maneiras de resolver
  // esse problema, esta é apenas uma delas
}

// define os event listeners
btnCalcular.addEventListener('click', calcularIdade);
