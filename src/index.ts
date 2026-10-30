import { Pessoa } from "./pessoa/pessoa.js"
import { VisitanteDocente } from "./visitantesacademicos/visitantedocente.js"
import { VisitanteDiscente } from "./visitantesacademicos/visitantediscente.js"
import { Aluno, SituacaoAluno } from "./aluno/aluno.js"
import { Professor } from "./professor/professor.js"
import { Endereco } from "./endereco/enderecos.js";
import { Evento } from "./evento/evento.js";
import { Campus } from "./campus/campus.js";
import { TecnicoAdministrativo } from "./tecnico-administrativo/tecnico-administrativo.js";
import { EmprestimoLivro } from "./biblioteca/emprestimo-livro.js"

const evento: Evento = new Evento("Evento Tecnológico", [], "Endereço Teste[CEP: 49000, Rua: Rua A, Bairro: Bairro A, Cidade: Cidade A, Estado: Estado A]");

const endereco1: Endereco = new Endereco("49000",12, "Rua A", "Bairro A", "Cidade A", "Estado A");  
const endereco2: Endereco = new Endereco("49888",67, "Rua B", "Bairro B", "Cidade B", "Estado B");  

const João: VisitanteDocente = new VisitanteDocente("João", "Silva", "Masculino", "111.222.333-44", 40, true,[endereco1], 20000, "Universidade A","Matemática", "1 ano");
const Maria: VisitanteDiscente = new VisitanteDiscente("Maria", "Oliveira", "Feminino", "555.666.777-88", 25, true, "Instituição B", "Português", "2 anos");

const Felipe: Aluno = new Aluno("Felipe", "José", "Masculino", "123.456.789-00", 34, true, [endereco1], "Informática", SituacaoAluno.FORMANDO);
const Ana: Aluno = new Aluno("Ana", "Luiza", "Feminino", "987.654.321-00", 28, true, [endereco2], "Biologia", SituacaoAluno.CANCELADO);
const Diego: Professor = new Professor("Diego", "Armando", 56, false, [endereco1, endereco2], "Masculino", "123.456.789-00", 1000);

const campus1: Campus = new Campus("Campus Aracaju", "Rua Ara", [], [], []);
const campus2: Campus = new Campus("Campus São Paulo", "Rua B", [], [], []);

const emprestimo = new EmprestimoLivro(Felipe, "Livro de Informática",endereco1);
const emprestimo2 = new EmprestimoLivro(Diego, "Livro de Matemática",endereco2);
const emprestimo3 = new EmprestimoLivro(Ana, "Livro de Biologia",endereco2);


// Associar professores e alunos aos campi
campus1.adicionarProfessor(Diego);
campus1.adicionarAluno(Felipe);
campus2.adicionarProfessor(João);
campus2.adicionarAluno(Maria);
campus2.adicionarAluno(Ana);
campus1.listarProfessores();
campus2.listarProfessores();
campus1.listarAlunos();
campus2.listarAlunos();

console.log("\n----------Inscrever os participantes no evento-----------");
// Inscrever os participantes no evento
evento.adicionarParticipante(Felipe);
evento.adicionarParticipante(Diego);
evento.adicionarParticipante(João);
evento.adicionarParticipante(Maria);
evento.adicionarParticipante(Ana);
// Tentativa de inscrever Felipe novamente
evento.adicionarParticipante(Felipe);
//teste de listagem de participantes e eventos
evento.listarParticipantes();
Felipe.listarEventos();
Diego.listarEventos();
João.listarEventos();
Maria.listarEventos();
Ana.listarEventos();

console.log("\n----------Verificar aptidão para empréstimo-----------");
console.log(`Felipe apto para empréstimo: ${Felipe.estaAptoParaEmprestimo()}`);
console.log(`Diego apto para empréstimo: ${Diego.estaAptoParaEmprestimo()}`);
console.log(`João apto para empréstimo: ${João.estaAptoParaEmprestimo()}`);
console.log(`Maria apto para empréstimo: ${Maria.estaAptoParaEmprestimo()}`);
console.log(`Ana apto para empréstimo: ${Ana.estaAptoParaEmprestimo()}`);

console.log("---------- Empréstimos ----------");

console.log(emprestimo.realizarEmprestimo());
console.log();
console.log(emprestimo2.realizarEmprestimo());
console.log();
console.log(emprestimo3.realizarEmprestimo());

console.log("\n---------- Situação dos empréstimos ----------");

console.log(emprestimo.descreverEmprestimo());
console.log();
console.log(emprestimo2.descreverEmprestimo());
console.log();
console.log(emprestimo3.descreverEmprestimo());

console.log("\n---------- Devoluções ----------");

console.log(emprestimo.devolverLivro());
console.log();
console.log(emprestimo2.devolverLivro());
console.log();
console.log(emprestimo.descreverEmprestimo());
console.log();
console.log(emprestimo2.descreverEmprestimo());


console.log("\n-------------------------------");
console.log(`Quantidade de pessoas: ${Pessoa.getQuantidadePessoas()}`);
console.log(`Quantidade de alunos: ${Aluno.getQuantidadeAlunos()}`);
console.log(`Quantidade de professores: ${Professor.getQuantidadeProfessores()}`);
console.log(`Quantidade de visitantes docentes: ${VisitanteDocente.getQuantidadeVisitantesDocentes()}`);
console.log(`Quantidade de visitantes discentes: ${VisitanteDiscente.getQuantidadeVisitantesDiscentes()}`);
