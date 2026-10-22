import { Pessoa } from "./pessoa/pessoa.js"
import { Aluno, SituacaoAluno } from "./aluno/aluno.js"
import { Professor } from "./professor/professor.js"
import  { Endereco } from "./endereco/enderecos.js";

const endereco1: Endereco = new Endereco("49000",12, "Rua A", "Bairro A", "Cidade A", "Estado A");  
const endereco2: Endereco = new Endereco("49888",67, "Rua B", "Bairro B", "Cidade B", "Estado B");  

const Felipe: Aluno = new Aluno("Felipe", "José", "Masculino", "123.456.789-00", 34, true, [endereco1], "Informática", SituacaoAluno.FORMANDO);
const Diego: Professor = new Professor("Diego", "Armando", 56, false, [endereco1, endereco2], "Masculino", "123.456.789-00", 1000);

console.log(Felipe);
console.log(Diego);

console.log("-------------------------------");
console.log(`Quantidade de pessoas: ${Pessoa.getQuantidadePessoas()}`);
console.log(`Quantidade de alunos: ${Aluno.getQuantidadeAlunos()}`);
console.log(`Quantidade de professores: ${Professor.getQuantidadeProfessores()}`);
