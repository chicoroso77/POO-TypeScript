class Pessoa {
     nome: string;
     sobrenome: string;
     idade: number;
     brasileiro: boolean;
     enderecos: string[]; //Ou let enderecos: Arrays<string>;

     constructor(nome: string, sobrenome: string, idade: number, brasileiro: boolean, enderecos: string[]) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
    }

    exibirnome(): string {
    return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
    };

    recuperaEndereco(posicao: number): string | undefined {
    return this.enderecos[posicao];
    };

}

const Esdras: Pessoa = new Pessoa("Esdras", "Arthur", 19, true, ['Rua S']); 
const maria: Pessoa = new Pessoa("Maria", "José", 26, false, ['Rua B']);

console.log(Esdras.exibirnome());
console.log(Esdras.recuperaEndereco(0));
console.log(Esdras);
console.log("-------------------------------")
console.log(maria.exibirnome());
console.log(maria.recuperaEndereco(0));
console.log(maria);

