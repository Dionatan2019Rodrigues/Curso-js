// O que será printado na tela no final da execução ?

const frutas1 = ["morango", "uva", "maça"];
const frutas2 = ["amora", "pera", "laranja"];

const frutas = frutas1.concat(frutas2);

frutas.splice(1, 3);
frutas.splice(2, 0, "melancia", "acerola");

const novasFrutas = frutas.slice(2);

console.log(novasFrutas);
