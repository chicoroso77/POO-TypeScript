import { Pessoa } from "./pessoa.js"
import { Aluno } from "./aluno.js"

const Esdras: Pessoa = new Pessoa("Esdras", "Arthur", 19, true, ['Rua S']); 
const Felipe: Aluno = new Aluno("Felipe", "Arthur", 34, true, ['Rua F'], "Informática", "Matriculado", 12345);

console.log(Esdras);
console.log(Felipe);
console.log("-------------------------------");
console.log(`Quantidade de pessoas: ${Pessoa.getQuantidadePessoas()}`);
console.log(`Quantidade de alunos: ${Aluno.getQuantidadeAlunos()}`);
