import { log } from "console";

export class Empresa {
  public readonly nome: string;// não falar public o atributo é publico
  readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }


  adicionarColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostraColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string
  ) { }
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Cosme', 'Diego');
const colaborador2 = new Colaborador('João', 'Diego');
const colaborador3 = new Colaborador('Pedro', 'Diego');
const colaborador4 = new Colaborador('Augusto', 'Diego');
empresa1.adicionarColaborador(colaborador1);
empresa1.adicionarColaborador(colaborador2);
empresa1.adicionarColaborador(colaborador3);
empresa1.adicionarColaborador(colaborador4);
empresa1.mostraColaboradores();

console.log(empresa1);

