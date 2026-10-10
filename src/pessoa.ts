class Pessoa {

    //////////////////////////
    //Atributos de instância//
    ////////////////////////// 

     matricula: number = 0;
     nome: string = '';
     sobrenome: string = '';
     sexo: string = '';
     CPF: string = '';
     idade: number = 0;
     brasileiro: boolean = true;
     enderecos: string[] = []; //Ou let enderecos: Arrays<string>;

    //////////////////////////
    //Atributos estáticos/////
    ////////////////////////// 

    static quantidadePessoas: number = 0;

    ///////////////////
    /////Construtor////
    ///////////////////

     constructor(matricula: number, nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: string[]) {
        this.matricula = matricula;
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this.CPF = CPF;
        this.idade = idade;
        this.brasileiro = brasileiro;
        this.enderecos = enderecos;
        Pessoa.quantidadePessoas++;
    }

    /////////////////////////
    //Métodos de Instância////
    ////////////////////////

    exibirnome(): string {
    return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
    };

    recuperaEndereco(posicao: number): string | undefined {
    return this.enderecos[posicao];
    };

    /////////////////////////
    //Métodos Estáticos//////
    ////////////////////////

    static getQuantidadePessoas(): number {
    return Pessoa.quantidadePessoas;
    }

}

export { Pessoa };