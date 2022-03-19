// campos
var campo = document.getElementById('campo-item');
// botoes
var btnAdd = document.getElementById('add-item');
// lista
var ul = document.getElementById('lista');

// variaveis de controle
var lista = [];
var listaJSON = localStorage.getItem('lista');

function updateScreen() {
  ul.innerHTML = '';
  lista.forEach(function (item) {
    //ul.innerHTML += `<li>${item}</li>`;
    var li = document.createElement('li');
    li.innerHTML = item;
    ul.appendChild(li);
  });
}

// busca itens do localStorage
if (listaJSON) {
  lista = JSON.parse(listaJSON);
  updateScreen();
}

function saveStorage() {
  var listaJSON = JSON.stringify(lista);
  localStorage.setItem('lista', listaJSON);
}

function addItem() {
  if (campo.value) {
    lista.push(campo.value);
    campo.value = '';
    updateScreen();
    saveStorage();
  } else {
    alert('Insira o nome de um item!');
  }
}

btnAdd.addEventListener('click', addItem);
