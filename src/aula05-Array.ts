export { result };

function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

function contatenaStringica(...args: Array<string>): string {
  return args.reduce((ac, valor) => ac + valor);
}

function toUpperCase(...args: Array<string>): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
const result1 = contatenaStringica("a", "b", "c");
const upper = toUpperCase("a", "b", "c");


console.log(result1);
console.log(upper);
console.log(result);

