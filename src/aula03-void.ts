export { pessoas };

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoas = {
  nome: 'Cosme',
  sobrenome: 'Otávio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Cosme', 'Diego');

