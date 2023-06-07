// INTERSEÇÃO DE TIPOS
type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

//type Pessoa = TemNome | TemSobrenome | TemIdade;//dessa forma union types fica um aberto que precisa de somente 1 tipo obrigatório
type Pessoa = TemNome & TemSobrenome & TemIdade;//dessa forma union types fica um aberto que precisa de somente 1 tipo obrigatório

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersecao = AB & AC & AD;

const pessoa: Pessoa = {
  nome: 'Cosme',
  sobrenome: 'Augusto',
  idade: 33,
};

console.log(pessoa);

export { pessoa };
