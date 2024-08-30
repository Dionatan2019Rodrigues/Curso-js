import { Veiculo } from "./Veiculo.js";

export class Moto extends Veiculo {
  constructor(modelo, cor, velocidadeMaxima) {
    super(modelo, cor, velocidadeMaxima);
    this.quantidadeRodas = 2;
  }
  acelerar() {
    if (this.velocidade + 10 > this.velocidadeMaxima) {
      this.velocidade = this.velocidadeMaxima;
    } else {
      this.velocidade += 10;
    }
  }
}
