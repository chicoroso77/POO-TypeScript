import  { Endereco } from "./enderecos.js";

abstract class Pessoa {

    //////////////////////////
    //Atributos de instância//
    ////////////////////////// 

     protected _matricula: number = 0;
     private _nome: string = '';
     private _sobrenome: string = '';
     private _sexo: string = '';
     private _CPF: string = '';
     private _idade: number = 0;
     private _brasileiro: boolean = true;
     private _enderecos: Endereco[] = []; //Ou let enderecos: Arrays<string>;
    

    //////////////////////////
    //Atributos estáticos/////
    ////////////////////////// 

    static quantidadePessoas: number = 0;

    /////////////////////
    ////Gets e Sets//////
    ////////////////////

    public get matricula(): number {
        return this._matricula;
    }

    protected set matricula(value: number) {
        this._matricula = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get sobrenome(): string {
        return this._sobrenome;
    }
    
    public set sobrenome(value: string) {
        this._sobrenome = value;
    }

    public get sexo(): string {
        return this._sexo;
    }

    public set sexo(value: string) {
        this._sexo = value;
    }
    
    public get CPF(): string {
        return this._CPF;
    }

    protected set CPF(value: string) {
        let padraoCPF: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/; //Associação Comportamental - Dependência
        if (padraoCPF.test(value)) {
            this._CPF = value;
        } else {
            throw new Error("CPF inválido. O formato correto é: 000.000.000-00");
        }
    }

    public get idade(): number {
        return this._idade;
    }

    public set idade(value: number) {
        this._idade = value;
    }

    public get brasileiro(): boolean {
        return this._brasileiro;
    }

    public set brasileiro(value: boolean) {
        this._brasileiro = value;
    }

    public get enderecos(): Endereco[] {
        return this._enderecos;
    }
    public set enderecos(value: Endereco[]) {
        this._enderecos = value;
    }

    ///////////////////
    /////Construtor////
    ///////////////////

     constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[] = []) {
        this.matricula = this.gerarMatricula();
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.sexo = sexo;
        this._CPF = CPF;
        this.idade = idade;
        this._brasileiro = brasileiro;
        this._enderecos = enderecos;
        Pessoa.quantidadePessoas++;
    }

    /////////////////////////
    //Métodos de Instância////
    ////////////////////////

    exibirnome(): string {
    return (`O nome completo é: ${this.nome} ${this.sobrenome}`);
    };

    recuperaEndereco(posicao: number): Endereco | undefined {
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

    protected abstract gerarMatricula(): number;

}

export { Pessoa };