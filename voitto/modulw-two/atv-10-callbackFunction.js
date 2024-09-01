/*Questão 5) Utilize filter para separar o array abaixo em números pares
e ímpares.
numeros = [1, 54, 147, 13, 254, 60, 77, 86, 19, 10]*/

const numeros = [1, 54, 147, 13, 254, 60, 77, 86, 19, 10];

const impares = numeros.filter((numero) => numero % 2 !== 0);
console.log(impares);

const pares = numeros.filter((numero) => numero % 2 === 0);
console.log(pares);
