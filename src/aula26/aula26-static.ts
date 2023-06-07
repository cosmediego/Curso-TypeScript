import { log } from "console";

export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) { }

  static falaOi(): void {
    console.log('OI');
  }
}



const pessoa = new Pessoa('Cosme', 'Diego', 33, '111.111.111-45');
pessoa.cpf = '123.456.789-99';
console.log(pessoa);

