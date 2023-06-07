import { log } from "console";

export class Empresa {
  public readonly nome: string;// não falar public o atributo é publico
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cnpj: string;

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

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
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
const colaboradorRemovido = empresa1.popColaborador()
console.log(colaboradorRemovido);

console.log(empresa1);

