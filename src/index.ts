import { Pessoa } from "./pessoa.js"


const Esdras: Pessoa = new Pessoa("Esdras", "Arthur", 19, true, ['Rua S']); 

console.log(Esdras);
console.log("-------------------------------");
console.log(`Quantidade de pessoas: ${Pessoa.getQuantidadePessoas()}`);


