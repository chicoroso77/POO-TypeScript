import { Pessoa } from "./pessoa/pessoa.js"
import { Aluno, SituacaoAluno } from "./aluno/aluno.js"
import { Professor } from "./professor/professor.js"
import  { Endereco } from "./endereco/enderecos.js";
import { Evento } from "./evento/evento.js";
const evento: Evento = new Evento("Evento Tecnológico", [], "Endereço Teste[CEP: 49000, Rua: Rua A, Bairro: Bairro A, Cidade: Cidade A, Estado: Estado A]");


const endereco1: Endereco = new Endereco("49000",12, "Rua A", "Bairro A", "Cidade A", "Estado A");  
const endereco2: Endereco = new Endereco("49888",67, "Rua B", "Bairro B", "Cidade B", "Estado B");  

const Felipe: Aluno = new Aluno("Felipe", "José", "Masculino", "123.456.789-00", 34, true, [endereco1], "Informática", SituacaoAluno.FORMANDO);
const Diego: Professor = new Professor("Diego", "Armando", 56, false, [endereco1, endereco2], "Masculino", "123.456.789-00", 1000);

// Inscrever os participantes no evento
evento.adicionarParticipante(Felipe);
evento.adicionarParticipante(Diego);

//Quem participa do evento
console.log("\n--- Participantes do evento ---");
evento.listarParticipantes();

//de quais eventos o aluno participa?
console.log("\n--- Eventos do aluno Felipe ---");
Felipe.listarEventos();

//de quais eventos o professor participa?
console.log("\n--- Eventos do professor Diego ---");
Diego.listarEventos();

//endereços dos eventos
console.log("\n--- Endereços dos eventos ---");
console.log(`Evento: ${evento.nome}, Endereço: ${evento.endereco}`);

console.log("-------------------------------");
console.log(`Quantidade de pessoas: ${Pessoa.getQuantidadePessoas()}`);
console.log(`Quantidade de alunos: ${Aluno.getQuantidadeAlunos()}`);
console.log(`Quantidade de professores: ${Professor.getQuantidadeProfessores()}`);
