/* Leia o problema abaixo:
“Na Voitto Restaurante os clientes tem a possibilidade de deixar a conta para pagar depois ou pagar na hora. Para que esse sistema funcione, eles anotam os seguintes dados dos clientes: nome, email, cpf e valor da conta. Crie um cliente genérico com essas informações e dois outros cliente. O primeiro será o que pagará à vista, então acrescente no cliente genérico o valor do troco. Já o segundo é preciso que anotem o valor da compra como saldo negativo e uma função que vai
abatendo o valor de acordo com os pagamentos do cliente.”
Crie os seguintes clientes:
a) Carlos, gastou 30 reais e pagou à vista com uma nota de 50 reais;
b) Ana, gastou 40 reais, pagou 10 reais e pediu para anotar o
restante.
*/

function Cliente(nome, email, cpf, valorConta) {
  this.nome = nome;
  this.email = email;
  this.cpf = cpf;
  this.valorConta = valorConta;
  this.valorTroco = 0;
  this.saldoDevedor = 0;

  this.pagarAVista = function (pagamento) {
    if (pagamento < this.valorConta)
      console.log(
        `${this.nome}, esta faltando R$${(this.valorConta - pagamento).toFixed(
          2
        )} para o pagamento`
      );
    else if (pagamento > valorConta) {
      this.valorTroco = pagamento - this.valorConta;
      console.log(`${this.nome}, seu troco é R$${this.valorTroco}`);
    } else {
      console.log(`${this.nome}, pagamento efetuado e não restou troco`);
    }
  };
  this.pagarSaldoDevedor = function (pagamento) {
    this.saldoDevedor -= pagamento;
    console.log(
      `${this.nome}, você tem um saldo devedor atualizado de R$${this.saldoDevedor}`
    );
  };
  this.pagarParcialmente = function (pagamento) {
    this.saldoDevedor = this.valorConta - pagamento;
    console.log(`${this.nome}, sua divida é de R$${this.saldoDevedor}`);
  };
}

const cliente1 = new Cliente("dionatan", "dio@email.com", "09875689724", 30);
cliente1.pagarAVista(50);

const cliente2 = new Cliente("Ana", "ana@email.com", "08743256789", 40);
cliente2.pagarParcialmente(10);
cliente2.pagarSaldoDevedor(10);
