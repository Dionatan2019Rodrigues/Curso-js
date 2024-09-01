import { Veiculo } from "./Veiculo.js";
import { Moto } from "./Moto.js";
import { Carro } from "./Carro.js";

const veiculo = new Veiculo("mercedes", "vermelho", 300);
const moto = new Moto("fan", "preta", 135);
const carro = new Carro("gol", "prata", 180);

veiculo.acelerar();
veiculo.frear();
veiculo.pintar('roxo');
console.log(veiculo);

moto.acelerar();
moto.frear();
moto.pintar("rosa");
console.log(moto);

carro.acelerar();
carro.frear();
carro.pintar("azul");
console.log(carro);
