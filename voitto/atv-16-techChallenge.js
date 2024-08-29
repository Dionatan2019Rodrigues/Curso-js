function ContaBancaria(statusConta, numero, cartao) {
  this.ativo = statusConta;
  this.numeroDaConta = numero;
  this.saldo = 0;
  this.tipoDeCartão = cartao;

  this.adicionarSaldo = function (valor, moeda) {
    if (this.ativo) {
      if (moeda == "dolar") {
        this.saldo = valor * 5.56; // cotação de 08/2024
      } else if (moeda == "euro") {
        this.saldo = valor * 6.19; // cotação de 08/2024
      } else if (moeda == "real") {
        this.saldo = valor;
      }
    }
  };
  this.removerSaldo = function (valorRemovido) {
    if (this.saldo >= valorRemovido && this.ativo) {
      this.saldo -= valorRemovido;
    }
  };
  this.mostraSaldo = function () {
    console.log(`Seu saldo é: ${this.saldo}`);
  };
}

const cliente = {
  nome: "Dionatan Rodrigues",
  dataNascimento: "19/03/2001",
  documento: {
    tipoDocumento: "RG", // RG, CNH ou PASSAPORTE
    numeroDocumento: Math.random(), // número aleatório entre 0 e 1
  },
  endereco: {
    cep: 97105340,
    estado: "RS",
    cidade: "Santa Maria",
    bairro: "Camobi",
    logradouro: "Av. Roraima",
    numero: 1000,
    complemento: "bloco 63, apto 6312",
  },
  tipoDeCliente: "brasileiro", //(brasileiro ou estrangeiro)
  rendaMensalReais: 2500,
  calculaIdade: function () {
    const dataAtual = {
      dia: String(new Date().getDate()),
      mes: String(new Date().getMonth() + 1),
      ano: String(new Date().getFullYear()),
    };
    const dataNascimento = {
      dia: Number(this.dataNascimento.substring(0, 2)),
      mes: Number(this.dataNascimento.substring(3, 5)),
      ano: Number(this.dataNascimento.substring(6, 10)),
    };
    let idadeAtual = dataAtual.ano - dataNascimento.ano;

    if (dataAtual.mes < dataNascimento.mes) {
      idadeAtual -= 1;
    } else if (
      dataAtual.mes == dataNascimento.mes &&
      dataAtual.dia < dataNascimento.dia
    ) {
      idadeAtual -= 1;
    }

    return idadeAtual;
  },
  validaDados: function () {
    // testa se idade >= 18 anos
    if (this.calculaIdade() <= 18) return false;

    // testa se tipo do documento e número de documento são válidos
    if (
      this.documento.tipoDocumento !== "CNH" &&
      this.documento.tipoDocumento !== "RG" &&
      this.documento.tipoDocumento !== "PASSAPORTE"
    ) {
      return false;
    } else {
      //teste caso número da conta é válido
      if (this.documento.numeroDocumento >= 0.2) {
        return true;
      } else {
        return false;
      }
    }
  },
};

const main = (cliente) => {
  let novaConta;
  if (cliente.validaDados()) {
    novaConta = new ContaBancaria(
      true,
      Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000, // numero de conta fictício
      cliente.rendaMensalReais < 10000 ? "cartão STANDARD" : "cartão BLACK"
    );
  } else {
    novaConta = new ContaBancaria(false);
  }
  console.table(novaConta);
};

main(cliente);
