abstract class Pessoa {

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

    /////////////////////////
    //Métodos Abstratos//////
    ////////////////////////

    //Método abstrato - Sem implementação
	//Usado para garantir que as classes que herdem de pessoa possuam uma implementação do gerarMatricula, 
	//assim é possivel que cada classe que herde de pessoa implemente sua forma específica de gerar matricula (Polimorfismo)

    abstract gerarMatricula(): number;

}

export { Pessoa };