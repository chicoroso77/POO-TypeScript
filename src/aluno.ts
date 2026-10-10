class Aluno {
     nome: string;
     sobrenome: string;
     idade: number;
     brasileiro: boolean;
     enderecos: string[]; //Ou let enderecos: Arrays<string>;
     curso: string; 
     situacao: string;
     matricula: number; 
     
     static quantidadeAlunos: number = 0;

     constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[], curso: string, situacao: string, matricula: number) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        this.curso = curso;
        this.situacao = situacao;
        this.matricula = matricula;
        Aluno.quantidadeAlunos++;
     }

        recuperaEndereco(posicao: number): string | undefined {
        return this.enderecos[posicao];
        }

        static getQuantidadeAlunos(): number {
        return Aluno.quantidadeAlunos;
        }
}
export { Aluno };