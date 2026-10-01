import { Pessoa } from "./pessoa.js"


const Esdras: Pessoa = new Pessoa("Esdras", "Arthur", 19, true, ['Rua S']); 
const maria: Pessoa = new Pessoa("Maria", "José", 26, false, ['Rua B']);

console.log(Esdras.exibirnome());
console.log(Esdras.recuperaEndereco(0));
console.log(Esdras);
console.log("-------------------------------")
console.log(maria.exibirnome());
console.log(maria.recuperaEndereco(0));
console.log(maria);

