class Professor {
     nome: string;
     sobrenome: string;
     idade: number;
     brasileiro: boolean;
     enderecos: string[]; //Ou let enderecos: Arrays<string>;
     matricula: number; 
     sexo: string;
     CPF: string;
     salario: number;
     
     static quantidadeProfessores: number = 0;

     constructor(matricula: number, nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[], sexo: string, CPF: string, salario: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        this.sexo = sexo;
        this.CPF = CPF;
        this.salario = salario;
        Professor.quantidadeProfessores++;
     }

        recuperaEndereco(posicao: number): string | undefined {
        return this.enderecos[posicao];
        }

        static getQuantidadeProfessores(): number {
        return Professor.quantidadeProfessores;
        }
}
export { Professor };