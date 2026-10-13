import { Endereco } from "./enderecos.js";
import { Pessoa } from "./pessoa.js"
import type { Projeto } from "./projeto.js";

class Professor extends Pessoa implements Projeto {

   //////////////////////////
   //Atributos de instância//
   //////////////////////////  

     salario: number;

   //////////////////////////
   //Atributos estáticos/////
   //////////////////////////
     
     static quantidadeProfessores: number = 0;

     ///////////////////
    /////Construtor////
    ///////////////////

     constructor( nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: Endereco[], sexo: string, CPF: string, salario: number) {
        super( nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.matricula = this.gerarMatricula();
        this.salario = salario;
        Professor.quantidadeProfessores++;
     }
  

     /////////////////////////
     //Métodos de Instância////
     ////////////////////////

    // O método gerarMatricula é uma sobrescrita (Override)
	  // A implementação do método gerarMatricula na classe Aluno sobrescreve o método abstrato definido na classe Pessoa
	  // Associaçaõ Comportamental - Dependência da Classe Aluno com as classes Date e Math
        
     gerarMatricula(): number {
      return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
     }

    submeterProjetoPesquisa(): void {
      console.log("Isso é uma submissão de projeto de pesquisa de Professor.");
    }
    SubmeterProjetoExtensao(): void {
      console.log("Isso é uma submissão de projeto de extensão de Professor.");
    }
       
     
   /////////////////////////
   //Métodos Estáticos//////
   ////////////////////////

        static getQuantidadeProfessores(): number {
        return Professor.quantidadeProfessores;
        }
   }

export { Professor };