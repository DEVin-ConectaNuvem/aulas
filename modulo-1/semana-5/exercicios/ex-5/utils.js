
export function somaTudo(...params) {
  return params.reduce((acc, num) => acc + num, 0);
}

// função equivalente
export function somaTudoFor(...params) {
  let total = 0;
  params.forEach(num => total += num);
  return total;
}
