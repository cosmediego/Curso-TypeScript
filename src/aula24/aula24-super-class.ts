
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

//subclass
export class Aluno extends Pessoa {

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }


  getNomeCompleto(): string {
    console.log('FAZENDO ALGO ANTES');
    return super.getNomeCompleto();

  }
}
export class Client extends Pessoa { }

const aluno = new Aluno('Cosme', 'Augusto', 32, '111.111.111-41', '0002');
const client = new Client('Cosme', 'Augusto', 32, '111.111.111-41');
const pessoa = new Pessoa('Cosme', 'Augusto', 32, '111.111.111-41');


console.log(aluno.getNomeCompleto());
console.log(client.getNomeCompleto());
console.log(pessoa.getNomeCompleto());

console.log(aluno);




