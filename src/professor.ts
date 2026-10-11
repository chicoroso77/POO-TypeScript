import { Pessoa } from "./pessoa.js"

class Professor extends Pessoa {

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

     constructor(matricula: number, nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[], sexo: string, CPF: string, salario: number) {
        super(matricula, nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this.salario = salario;
        Professor.quantidadeProfessores++;
     }
       
     
   /////////////////////////
   //Métodos Estáticos//////
   ////////////////////////

        static getQuantidadeProfessores(): number {
        return Professor.quantidadeProfessores;
        }
   }

export { Professor };