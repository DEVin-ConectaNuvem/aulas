// pega elementos do DOM que iremos manipular
const campo = document.getElementById('campo-item');
const btnAdd = document.getElementById('add-item');
const ul = document.getElementById('lista');

// inicializa variaveis de controle
let lista = [];
// busca lista no localStorage
const listaJSON = localStorage.getItem('lista');
// verifica se veio algo do storage
if (listaJSON) {
  // se sim, converte pra objeto
  // atualiza lista oficial e tela
  lista = JSON.parse(listaJSON);
  updateScreen();
}

// funcao de remocao de item por id
function removeItem(id) {
  // cria uma lista nova
  const novaLista = [];
  // itera entre todos itens da lista velha
  lista.forEach(function (item) {
    if (item.id !== id) {
      // adiciona na lista nova apenas itens
      // com id diferete do removido
      novaLista.push(item);
    }
  })
  // atualiza a lista oficial e a tela
  lista = novaLista;
  updateScreen();
}

// funcao de atualizar a tela
function updateScreen() {
  // limpa o interior do elemento ul
  ul.innerHTML = '';
  // itera entre todos itens da lista
  lista.forEach(function (item) {
    //ul.innerHTML += `<li>${item}</li>`;
    // cria botao de remocao e define evento
    const btn = document.createElement('button');
    btn.innerHTML = 'x';
    btn.onclick = function () {
      // remove a partir da id
      removeItem(item.id);
    }
    // cria o elemento li e acrescenta nome e botão
    const li = document.createElement('li');
    li.id = `i${item.id}`;
    li.innerHTML = item.name;
    li.appendChild(btn);
    // acrescenta li na ul
    ul.appendChild(li);
  });
}

// funcao de salvar no localStorage
function saveStorage() {
  // converte lista para string JSON
  const listaJSON = JSON.stringify(lista);
  // salva a lista no localStorage
  localStorage.setItem('lista', listaJSON);
}

// funcao de adicionar item
function addItem() {
  // testa se existe algo escrito no campo
  if (campo.value) {
    // insere um objeto com nome e id do item na lista
    lista.push({
      id: Date.now(),
      name: campo.value
    });
    // reseta o valor do campo
    campo.value = '';
    // atualiza a tela e salva no storage
    updateScreen();
    saveStorage();
  } else {
    // se campo vazio dispara um aviso
    alert('Insira o nome de um item!');
  }
}

// adiciona evento de click no botao de adicionar
btnAdd.addEventListener('click', addItem);

// adiciona evento de tecla ao digitar no campo
campo.addEventListener('keydown', function (event) {
  // testa se a tecla apertada é Enter
  if (event.key === 'Enter') {
    // se for Enter, executa o addItem
    addItem();
  }
});
