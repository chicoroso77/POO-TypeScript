import { Pessoa } from "./pessoa.js"
import { Aluno } from "./aluno.js"
import { Professor } from "./professor.js"

const Esdras: Pessoa = new Pessoa(269, "Esdras", "Arthur", "Masculino", "127.456.789-45", 19, true, ['Rua S']); 
const Felipe: Aluno = new Aluno(123, "Felipe", "José", "Masculino", "123.456.789-00", 34, true, ['Rua F'], "Informática", "Matriculado");
const Luis: Professor = new Professor(234, "Luis", "Santos", 56, false, ['Portugal'], "Masculino", "123.456.789-00", 1000);

console.log(Esdras);
console.log(Felipe);
console.log(Luis);
console.log("-------------------------------");
console.log(`Quantidade de pessoas: ${Pessoa.getQuantidadePessoas()}`);
console.log(`Quantidade de alunos: ${Aluno.getQuantidadeAlunos()}`);
console.log(`Quantidade de professores: ${Professor.getQuantidadeProfessores()}`);
