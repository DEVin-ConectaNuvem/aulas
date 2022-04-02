
export function calculaTotal(...produtos) {
  return produtos.reduce((acc, prod) => {
    return acc + prod.valor * prod.quantidade;
  }, 0);
}
