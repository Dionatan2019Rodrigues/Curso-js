/*Questão 5) Crie uma função onde é passado por parâmetro a temperatura em Celsius e ela te retorne o valor em Fahrenheit. Dica F = (C*9/5)+32 */
const temperaturaCelcius = 35;
let temperaturaFahrenheit;

function convertCelsiusForFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
temperaturaFahrenheit = convertCelsiusForFahrenheit(temperaturaCelcius);
console.log(temperaturaFahrenheit);
