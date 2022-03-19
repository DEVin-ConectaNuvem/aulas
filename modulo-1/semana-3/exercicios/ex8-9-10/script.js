// campos
var campo = document.getElementById('campo-item');
// botoes
var btnAdd = document.getElementById('add-item');
// lista
var ul = document.getElementById('lista');

// variaveis de controle
var lista = [];
var listaJSON = localStorage.getItem('lista');

function removeItem(id) {
  var novaLista = [];
  lista.forEach(function (item) {
    if (item.id !== id) {
      novaLista.push(item);
    }
  })
  lista = novaLista;
  updateScreen();
}

function updateScreen() {
  ul.innerHTML = '';
  lista.forEach(function (item) {
    //ul.innerHTML += `<li>${item}</li>`;
    var btn = document.createElement('button');
    btn.innerHTML = 'x';
    btn.onclick = function () {
      removeItem(item.id);
    }
    var li = document.createElement('li');
    li.id = `i${item.id}`;
    li.innerHTML = item.name;
    li.appendChild(btn);
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
    lista.push({
      id: Date.now(),
      name: campo.value
    });
    campo.value = '';
    updateScreen();
    saveStorage();
  } else {
    alert('Insira o nome de um item!');
  }
}

btnAdd.addEventListener('click', addItem);

campo.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addItem();
  }
});
