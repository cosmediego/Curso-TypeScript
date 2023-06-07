/*eslint-disable*/
let nome: string = 'Cosme';
let idade: number = 32;//10; 10.5; 0xf00d, 0o7744
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-simbolo');
//let big: bigint = 10n;

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: Array<string> = ["s", "dsd", "dsds"];;
let arrayDeNumero2: number[] = [1, 2, 3];
let arrayDeStrings2: string[] = ["s", "dsd", "dsds"];

//objetos
let pessoas: { nome: string, idade: number, adulto?: boolean } = {
  idade: 30,
  nome: 'Cosme',
};

//funções
function soma(x: number, y: number) {
  return x + y;
}

const result = soma(2, 2);
//console.log(result);

const soma2: (x: number, y: number) => number = (x, y) => x + y;

