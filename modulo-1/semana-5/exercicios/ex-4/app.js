
import Pessoa from './Pessoa.js';

const romeu = new Pessoa('Romeu', '12345678901');

//console.log(romeu);

romeu.imprime();

// usando getter
console.log(romeu.cpf);
// usando setter
romeu.cpf = '99999999999';

romeu.imprime();
