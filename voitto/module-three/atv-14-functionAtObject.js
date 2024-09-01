// Tendo o objeto abaixo, crie uma função dentro do objeto onde irá calcular o IMC do paciente. DICA imc = peso / (altura ** 2)

// Usando o mesmo objeto do exercício anterior, crie uma função que juntará os nomes.

const paciente = {
  primeiroNome: "Thiago",
  ultimoNome: "Oliveira",
  idade: 30,
  peso: 80.1,
  altura: 1.8,
  calculaIMC: function () {
    return (this.peso / this.altura ** 2).toFixed(2);
  },
  juntaNomes() {
    return this.primeiroNome + " " + this.ultimoNome;
  },
};

console.log(`IMC: ${paciente.calculaIMC()}`);
console.log(`Nome: ${paciente.juntaNomes()}`);
