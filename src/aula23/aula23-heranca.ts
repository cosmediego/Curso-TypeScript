import { log } from "console";
//superclass
export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    protected cpf: string,
  ) { }
  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + '' + this.sobrenome;
  }
}

//bisclass
export class Aluno extends Pessoa { }
export class Client extends Pessoa { }

const aluno = new Aluno('Cosme', 'Augusto', 32, '111.111.111-41');
const client = new Client('Cosme', 'Augusto', 32, '111.111.111-41');
const pessoa = new Pessoa('Cosme', 'Augusto', 32, '111.111.111-41');


console.log(aluno);
console.log(client);
console.log(pessoa);



