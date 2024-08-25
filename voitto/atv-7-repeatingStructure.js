/*Questão 1) Leia o problema abaixo:
“A Voitto Class pegou as notas de três alunos diferentes. O aluno A tirou
10, 6.5, 8 e 7.5, enquanto o aluno B tirou 9, 6 e 6, e por fim o aluno C tirou
8.5 e 9.5. Qual seria a média geral de todas as notas?”

Utilize estrutura de repetição para realizar essa média. Dica: crie um
array notasGeral, onde cada elemento é um array com as notas de
cada aluno. Depois utilize for para percorrer toda essa matriz e somar
as notas.*/

const notasGeral = [
  [10, 6.5, 8, 7.5],
  [9, 6, 6],
  [8.5, 9.5],
];

let soma = 0,
  cont = 0;

for (let i = 0; i < notasGeral.length; i++) {
  for (let j = 0; j < notasGeral[i].length; j++) {
    soma += notasGeral[i][j];
    cont++;
  }
}

const mediaNotas = (soma / cont).toFixed(2);
console.log(`A média final de todas notas é ${mediaNotas}`);
