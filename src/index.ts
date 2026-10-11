import { Pessoa } from "./pessoa.js"
import { Aluno } from "./aluno.js"
import { Professor } from "./professor.js"

const Felipe: Aluno = new Aluno("Felipe", "José", "Masculino", "123.456.789-00", 34, true, ['Rua F'], "Informática", "Matriculado");
const Diego: Professor = new Professor("Diego", "Armando", 56, false, ['Portugal'], "Masculino", "123.456.789-00", 1000);

console.log(Felipe);
console.log(Felipe.recuperaEndereco(0));
console.log(Diego);
console.log(Diego.recuperaEndereco(0));
console.log("-------------------------------");
console.log(`Quantidade de pessoas: ${Pessoa.getQuantidadePessoas()}`);
console.log(`Quantidade de alunos: ${Aluno.getQuantidadeAlunos()}`);
console.log(`Quantidade de professores: ${Professor.getQuantidadeProfessores()}`);
