
// concatenando com spread
export function concatena(vetorA, vetorB) {
  return [...vetorA, ...vetorB];
}

// função arrow equivalente
export const concatenaArrow =
  (vetorA, vetorB) => [...vetorA, ...vetorB];

