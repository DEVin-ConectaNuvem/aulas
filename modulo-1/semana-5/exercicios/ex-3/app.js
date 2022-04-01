
const campoProduto = document.getElementById('campo-produto');
const botaoBuscar = document.getElementById('botao-buscar');
const pMensagem = document.getElementById('mensagem');


const produtos = [
  { nome: 'arroz', preco: 9 },
  { nome: 'feijao', preco: 12 },
  { nome: 'batata', preco: 8 },
  { nome: 'macarrao', preco: 5 }
];

function buscaPreco(nomeProduto) {
  const produto = produtos.find(p => p.nome === nomeProduto);

  if (produto) {
    return `R$ ${produto.preco}`
  } else {
    return 'Produto não encontrado'
  }

  // equivalente
  // return produto
  //   ? `R$ ${produto.preco}`
  //   : 'Produto não encontrado';
}

botaoBuscar.addEventListener('click', () => {
  const nomeProduto = campoProduto.value;
  const mensagem = buscaPreco(nomeProduto);
  pMensagem.innerText = mensagem;
})
