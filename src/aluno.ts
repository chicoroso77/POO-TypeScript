import { Pessoa } from "./pessoa.js"

class Aluno extends Pessoa {
     
   //////////////////////////
    //Atributos de instância//
    ////////////////////////// 

     curso: string; 
     situacao: string;

    //////////////////////////
    //Atributos estáticos/////
    ////////////////////////// 
  
     static quantidadeAlunos: number = 0;

     ///////////////////
    /////Construtor////
    ///////////////////

     constructor(matricula: number, nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: string[], curso: string, situacao: string) {
        super(matricula, nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.curso = curso;
        this.situacao = situacao;
        Aluno.quantidadeAlunos++;
     }

     /////////////////////////
    //Métodos de Instância////
    ////////////////////////

        static getQuantidadeAlunos(): number {
        return Aluno.quantidadeAlunos;
        }
}
export { Aluno };