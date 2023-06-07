export default 1;
let x = 10; // eslint-disable-line
x = 0b1010;

const y = 10;//tipo de Y só pode ser 10, isso é um tipo literal
let a: 100 = 100;//eslint-disable-line


const pessoas = {
  nome: 'Cosme',
  sobrenome: 'Augusto',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}
console.log(escolhaCor('Vermelho'));
