/*Questão 3) Crie um programa que irá mostrar na tela uma mensagem dependendo dos valores escolhidos para x e y: 
Se x for maior ou igual a y, a mensagem será “x (exibir o valor de x) é maior que y (exibir o valor de y)!”; 
Se x for menor que y, a mensagem será “y (exibir o valor de y) é maior que x (exibir o valor de x!)*/
let x = 5;
let y = 4;

if (x > y) console.log(`x: ${x} é maior que y: ${y}`);
else if (x < y) console.log(`y: ${y} é maior que x: ${x}`);
else console.log(`x: ${x} e y: ${y} são iguais`);
