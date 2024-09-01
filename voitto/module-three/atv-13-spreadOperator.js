// No código abaixo temos dois objetos diferentes: fichaGuerreiro e equipamentoGuerreiro.

const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const equipamentoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2",
};

// a) Utilize o spread operator um crie apenas o objeto guerreiro;

const guerreiro = {
  ...fichaGuerreiro,
  ...equipamentoGuerreiro,
};

//b) Se for criado um objeto mago, além do objeto guerreiro,como mostrado no código abaixo, o que acontecerá quando o programa for rodado;*/

// RESPOSTA: será mostrado na tela apenas as propriedades do objeto mago, porque elas tem os mesmo nomes das propriedades do objeto guerreiro, portanto irão ser sobrescritas.

const mago = {
  nome: "Merlin",
  classe: "mago",
  arma: "Varinha  de fênix",
  capa: "capa vampirítica +3",
};

const personagens = { ...guerreiro, ...mago };

console.table(personagens);
