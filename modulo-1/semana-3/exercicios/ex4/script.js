// campos
var inicial = document.getElementById('inicial');
var raiz = document.getElementById('raiz');
var display = document.getElementById('display');

// botoes
var btnCalcPA = document.getElementById('calc-pa');
var btnCalcPG = document.getElementById('calc-pg');

// cria a função
function calcularProgressao(op) {
  var nInicial = Number(inicial.value);
  var nRaiz = Number(raiz.value);
  var pa = [nInicial];
  
  for (var i = 1; i < 10; i++) {
    if (op === 'pa') {
      pa.push(pa[i - 1] + nRaiz);
    } else {
      pa.push(pa[i - 1] * nRaiz);
    }
  }

  display.innerText = pa.toString();
}

// define listeners
btnCalcPA.addEventListener('click', function () {
  calcularProgressao('pa');
});
btnCalcPG.addEventListener('click', function () {
  calcularProgressao('pg');
});