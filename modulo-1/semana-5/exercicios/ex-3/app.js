
const campoProduto = document.getElementById('campo-produto');
const botaoBuscar = document.getElementById('botao-buscar');
const pMensagem = document.getElementById('mensagem');
const pTotal = document.getElementById('total');

const produtos = [
  { nome: 'arroz', preco: 9 },
  { nome: 'feijao', preco: 12 },
  { nome: 'batata', preco: 8 },
  { nome: 'macarrao', preco: 5 }
];

function buscaPreco(nomeProduto) {
  return produtos.find(p => p.nome === nomeProduto);
}

botaoBuscar.addEventListener('click', () => {
  const nomeProduto = campoProduto.value;
  const resultado = buscaPreco(nomeProduto);
  let mensagem = 'Produto não encontrado';

  if (resultado) {
    mensagem = `R$ ${resultado.preco}`;
  }
 
  pMensagem.innerText = mensagem;
})

// equivalente à
// (acumulador, produto) => acumulador + produto.preco;

const valorTotal = produtos.reduce((acumulador, produto) => {
  return acumulador + produto.preco;
}, 0);

pTotal.innerText = `Valor total: R$ ${valorTotal}`;
