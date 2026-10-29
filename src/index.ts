import { Pessoa } from "./pessoa/pessoa.js"
import { VisitanteDocente } from "./visitantesacademicos/visitantedocente.js"
import { VisitanteDiscente } from "./visitantesacademicos/visitantediscente.js"
import { Aluno, SituacaoAluno } from "./aluno/aluno.js"
import { Professor } from "./professor/professor.js"
import { Endereco } from "./endereco/enderecos.js";
import { Evento } from "./evento/evento.js";
import { Campus } from "./campus/campus.js";
import { TecnicoAdministrativo } from "./tecnico-administrativo/tecnico-administrativo.js";

const evento: Evento = new Evento("Evento Tecnológico", [], "Endereço Teste[CEP: 49000, Rua: Rua A, Bairro: Bairro A, Cidade: Cidade A, Estado: Estado A]");

const endereco1: Endereco = new Endereco("49000",12, "Rua A", "Bairro A", "Cidade A", "Estado A");  
const endereco2: Endereco = new Endereco("49888",67, "Rua B", "Bairro B", "Cidade B", "Estado B");  

const João: VisitanteDocente = new VisitanteDocente("João", "Silva", "Masculino", "111.222.333-44", 40, true,[endereco1], 20000, "Universidade A","Matemática", "1 ano");
const Maria: VisitanteDiscente = new VisitanteDiscente("Maria", "Oliveira", "Feminino", "555.666.777-88", 25, true, "Instituição B", "Português", "2 anos");

const Felipe: Aluno = new Aluno("Felipe", "José", "Masculino", "123.456.789-00", 34, true, [endereco1], "Informática", SituacaoAluno.FORMANDO);
const Diego: Professor = new Professor("Diego", "Armando", 56, false, [endereco1, endereco2], "Masculino", "123.456.789-00", 1000);

const campus1: Campus = new Campus("Campus Aracaju", "Rua Ara", [], [], []);
const campus2: Campus = new Campus("Campus São Paulo", "Rua B", [], [], []);

// Associar professores e alunos aos campi
campus1.adicionarProfessor(Diego);
campus1.adicionarAluno(Felipe);
campus1.listarProfessores();
campus2.listarProfessores();

console.log("\n----------Inscrever os participantes no evento-----------");
// Inscrever os participantes no evento
evento.adicionarParticipante(Felipe);
evento.adicionarParticipante(Diego);
evento.adicionarParticipante(João);
evento.adicionarParticipante(Maria);


console.log("\n-------------------------------");
console.log(`Quantidade de pessoas: ${Pessoa.getQuantidadePessoas()}`);
console.log(`Quantidade de alunos: ${Aluno.getQuantidadeAlunos()}`);
console.log(`Quantidade de professores: ${Professor.getQuantidadeProfessores()}`);
console.log(`Quantidade de visitantes docentes: ${VisitanteDocente.getQuantidadeVisitantesDocentes()}`);
console.log(`Quantidade de visitantes discentes: ${VisitanteDiscente.getQuantidadeVisitantesDiscentes()}`);


