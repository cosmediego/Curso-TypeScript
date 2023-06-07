type Idade = number;
type Pessoa = {
  nome: string;
  idade: number;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Azul' | 'Amarelo';//type alias
type CorCMYK = 'Ciano' | 'Margenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;


const pessoa: Pessoa = {
  idade: 30,
  nome: 'Cosme',
  salario: 200 - 200,
};


export function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };

}
console.log(setCorPreferida(pessoa, 'Azul'));
console.log(pessoa);


