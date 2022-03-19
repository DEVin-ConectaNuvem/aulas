// campos
var nA = document.getElementById('n1');
var nB = document.getElementById('n2');
var res = document.getElementById('res');

// botoes
var btnSoma = document.getElementById('soma');
var btnSubtrai = document.getElementById('subtrai');
var btnMultiplica = document.getElementById('multiplica');
var btnDivide = document.getElementById('divide');

// cria a função
function calcular(operacao) {
  var a = Number(nA.value);
  var b = Number(nB.value);
  switch (operacao) {
    case '+':
      res.value = a + b;
      break;
    case '-':
      res.value = a - b;
      break;
    case '*':
      res.value = a * b;
      break;
    case '/':
      res.value = a / b;
      break;
    default:
      res.value = 'Operação não identificada';
  }
}

btnSoma.addEventListener('click', function () {
  calcular('+');
});
btnSubtrai.addEventListener('click', function () {
  calcular('-');
});
btnMultiplica.addEventListener('click', function () {
  calcular('*');
});
btnDivide.addEventListener('click', function () {
  calcular('/');
});
