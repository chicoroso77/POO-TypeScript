import type { Campus } from "../campus/campus.js";
import { Endereco } from "../endereco/enderecos.js";
import { Pessoa } from "../pessoa/pessoa.js"
import type { Projeto } from "../projeto/projeto.js";

class Professor extends Pessoa implements Projeto {

   //////////////////////////
   //Atributos de instância//
   //////////////////////////  

    private _salario: number = 0;
    private _campus: Campus; 

  ///////////////
  //Gets e Sets//
  ///////////////

  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }

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
        this._salario = salario;
        this._campus = {} as Campus; // Inicializa o campus 
        Professor.quantidadeProfessores++;
     }
  

     /////////////////////////
     //Métodos de Instância////
     ////////////////////////

    // O método gerarMatricula é uma sobrescrita (Override)
	  // A implementação do método gerarMatricula na classe Aluno sobrescreve o método abstrato definido na classe Pessoa
	  // Associaçaõ Comportamental - Dependência da Classe Aluno com as classes Date e Math
        
     protected gerarMatricula(): number {
      return Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
     }

    public submeterProjetoPesquisa(): void {
      console.log("Isso é uma submissão de projeto de pesquisa de Professor.");
    }
    public SubmeterProjetoExtensao(): void {
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