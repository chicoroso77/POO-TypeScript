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

export { Pessoa };