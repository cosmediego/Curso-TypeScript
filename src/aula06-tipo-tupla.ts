//tupla
const dadosCliente1: readonly [number, string] = [8, 'COSME'];//readonly é imutável nesse caso a tupla é imutável
const dadosCliente2: [number, string, string?] = [8, 'Cosme', 'Diego'];//A INTERROGAÇÃO FALA QUE O VALOR É OPCIONAL
const dadosCliente3: [number, string, string?] = [8, 'Cosme'];//A INTERROGAÇÃO FALA QUE O VALOR É OPCIONAL



// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Cosme';
// //dadosCliente2[2] = 'Diego';
// dadosCliente1.pop();

const array1: readonly string[] = ['fdf', 'fdsf', 'fsdfsd', 'fdfdsfs'];


console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(array1);




