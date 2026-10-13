import { Endereco } from "./enderecos.js";
import { Pessoa } from "./pessoa.js"

class Aluno extends Pessoa {
     
   //////////////////////////
    //Atributos de instância//
    ////////////////////////// 

     curso: string; 
     situacao: SituacaoAluno; //Assoiação Estrutural - Composição da Classe Aluno com a Enum SituacaoAluno - A partir do aluno

    //////////////////////////
    //Atributos estáticos/////
    ////////////////////////// 
  
     static quantidadeAlunos: number = 0;

     ///////////////////
    /////Construtor////
    ///////////////////

     constructor( nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], curso: string, situacao: SituacaoAluno) {
        super( nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
        this.curso = curso;
        this.situacao = situacao;
        Aluno.quantidadeAlunos++;
     }

     /////////////////////////
     //Métodos de Instância////
     ////////////////////////

      // O método gerarMatricula é uma sobrescrita (Override)
	  // A implementação do método gerarMatricula na classe Aluno sobrescreve o método abstrato definido na classe Pessoa
	  // Associaçaõ Comportamental - Dependência da Classe Aluno com as classes Date e Math
        
     gerarMatricula(): number {
      let ano: number = new Date().getFullYear();
      let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return Number(`${ano}${numero}`);
     }


        static getQuantidadeAlunos(): number {
        return Aluno.quantidadeAlunos;
        }
}
enum SituacaoAluno {
      ATIVO = "Ativo",
      Matriculado = "Matriculado",
      TRANCADO = "Trancado",
      CONCLUIDO = "Concluído",
      CANCELADO = "Cancelado",   
      FORMANDO = "Formando"
}

export { Aluno, SituacaoAluno };