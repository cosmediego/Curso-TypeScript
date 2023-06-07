enum Cores {
  VERMELHO = 10,//0
  AMARELO = 100,//1
  AZUL = 1000,//2
}

enum Cores {
  ROXO = 10,//0
  VERDE = 100,//1
  BRANCO = 1000,//2
}

// console.log(Cores.AMARELO);
// console.log(Cores.AZUL);
// console.log(Cores[10]);

function escolhaCor(cor: Cores): void {
  console.log(Cores[cor]);

}
escolhaCor(Cores.ROXO);
//console.log(Cores);

