import type { Campus } from "../campus/campus.js";
import { Endereco } from "../endereco/enderecos.js";
import { Pessoa } from "../pessoa/pessoa.js"
import type { Projeto } from "../projeto/projeto.js";

class Aluno extends Pessoa implements Projeto {
     
    //////////////////////////
    //Atributos de instância//
    ////////////////////////// 

   //Associação Estrutural
   private _curso: string = ''; //Associação Estrutural - Composição da Classe Aluno com a Classe Curso - A partir do aluno
   private _situacao: SituacaoAluno = SituacaoAluno.ATIVO; //Assoiação Estrutural - Composição da Classe Aluno com a Enum SituacaoAluno - A partir do aluno
   private _campus?: Campus | undefined; 
   


   ///////////////
   //Gets e Sets//
   ///////////////

   public get curso(): string {
      return this._curso;
   }
   public set curso(value: string) {
      this._curso = value;
   }

   public get situacao(): SituacaoAluno {
      return this._situacao;
   }
   public set situacao(value: SituacaoAluno) {
      this._situacao = value;
   }

   public get campus(): Campus | undefined {
      return this._campus;
   }
   public set campus(value: Campus | undefined) {
      this._campus = value;
   }

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
        this._curso = curso;
        this._situacao = situacao;
        this._campus = undefined;
        Aluno.quantidadeAlunos++;
     }


     /////////////////////////
     //Métodos de Instância////
     ////////////////////////

      // O método gerarMatricula é uma sobrescrita (Override)
	  // A implementação do método gerarMatricula na classe Aluno sobrescreve o método abstrato definido na classe Pessoa
	  // Associaçaõ Comportamental - Dependência da Classe Aluno com as classes Date e Math
        
   protected gerarMatricula(): number {
      let ano: number = new Date().getFullYear();
      let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
      return Number(`${ano}${numero}`);
     }

   public submeterProjetoPesquisa(): void {
      console.log("Isso é uma submissão de projeto de pesquisa de aluno.");
   }
   public SubmeterProjetoExtensao(): void {
      console.log("Isso é uma submissão de projeto de extensão de aluno.");
   }

   public descreverVinculo(): string {
      return `Vínculo: Aluno, Curso: ${this._curso}, Situação: ${this._situacao}, Campus: ${this._campus ? this._campus.name : "Nenhum"}`;
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
      FORMANDO = "Formando",
      VISITANTE = "Visitante"
}

export { Aluno, SituacaoAluno };