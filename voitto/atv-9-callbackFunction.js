/*Questão 4) Dado a array abaixo com várias temperaturas em
Fahrenheit. Utilize map() para calcular todas as temperaturas em
Celsius
fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ]
C = (F-32)*5/9
*/
const fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map(grau => ((grau-32)*5/9).toFixed(2))

console.log(celsius);