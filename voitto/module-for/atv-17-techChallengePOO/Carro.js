import { Veiculo } from "./Veiculo.js";

export class Carro extends Veiculo {
  constructor(modelo, cor, velocidadeMaxima) {
    super(modelo, cor, velocidadeMaxima);
  }
  limparParabrisa() {}

  acelerar() {
    if (this.velocidade + 7 > this.velocidadeMaxima) {
      this.velocidade = this.velocidadeMaxima;
    } else {
      this.velocidade += 7;
    }
  }
}
