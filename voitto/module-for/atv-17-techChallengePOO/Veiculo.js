export class Veiculo {
  constructor(modelo, cor, velocidadeMaxima) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidade = 0;
    this.velocidadeMaxima = velocidadeMaxima;
    this.quantidadeRodas = 4;
  }
  acelerar() {
    if (this.velocidade + 5 > this.velocidadeMaxima) {
      this.velocidade = this.velocidadeMaxima;
    } else {
      this.velocidade += 5;
    }
  }
  frear() {
    if (this.velocidade - 13 < 0) {
      this.velocidade = 0;
    } else {
      this.velocidade -= 13;
    }
  }
  pintar(cor) {
    this.cor = cor;
  }
}
