const cpf = "an206.a501.960-31";

const validaCpf = (cpf) => {
  if (typeof cpf !== "string") return console.log("cpf inválido");

  cpf = cpf.split(""); // converte string para Array
  cpf = eliminaNaoNumerico(cpf);

  if (cpf.length !== 11 || !testaSeTodosNumerosIguais(cpf))
    console.log("cpf inválido");

  const result = testaCondicao(cpf.slice(0, 9));

  if (String(result) === cpf[9]) {
    const secondResult = testaCondicao(cpf.slice(0, 10));
    if (String(secondResult) === cpf[10]) {
      console.log("cpf valido");
    } else {
      console.log("cpf invalido");
    }
  } else {
    console.log("cpf inválido");
  }
};

const eliminaNaoNumerico = (cpf) =>
  cpf.filter((elemento) => !Number.isNaN(Number(elemento)));

const testaSeTodosNumerosIguais = (cpf) => {
  for (let i; i < cpf.length; i++) {
    if (cpf[0] !== cpf[i]) return false;
  }
  return true;
};

const testaCondicao = (cpf) => {
  const numberCpf = cpf.map(Number);
  let decrementador = numberCpf.length + 1;
  let soma = 0;

  for (let i = 0; i < numberCpf.length; i++) {
    soma += numberCpf[i] * decrementador;
    decrementador--;
  }

  const operacao = (soma * 10) % 11;

  if (operacao >= 10) operacao = 0;

  return operacao;
};

validaCpf(cpf);
