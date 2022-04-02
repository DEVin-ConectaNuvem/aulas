import Produto from './Produto.js';
import { calculaTotal } from './utils.js';

const arroz = new Produto('arroz', 3, 9);
const feijao = new Produto('feijao', 2, 12);
const batata = new Produto('batata', 4, 8);
const macarrao = new Produto('macarrao', 1, 5);

console.log(arroz, feijao, batata, macarrao);

const total = calculaTotal(arroz, feijao, batata, macarrao);
console.log(total);
// total deve ser 88
