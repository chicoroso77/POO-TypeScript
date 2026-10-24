import { Endereco } from "../endereco/enderecos.js";
import { Pessoa } from "../pessoa/pessoa.js";
abstract class TecnicoAdministrativo extends Pessoa {

    //////////////////////////
    //Atributos de instância//
    //////////////////////////

    private _nacionalidade: string = '';

    //////////////////////////
    //Atributos estáticos/////
    //////////////////////////

    static quantidadeTecnicosAdministrativos: number = 0;

    /////////////////////
    ////Gets e Sets//////
    ////////////////////

    public get nacionalidade(): string {
        return this._nacionalidade;
    }

    public set nacionalidade(value: string) {
        this._nacionalidade = value;
    }

    ///////////////////
    /////Construtor////
    ///////////////////

    constructor(nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos);
        this._nacionalidade = nacionalidade;
        this.matricula = this.gerarMatricula();
        TecnicoAdministrativo.quantidadeTecnicosAdministrativos++;
    }

    protected  gerarMatricula(): number {
        let numero: number = Math.floor(Math.random() * 9000) + 100;
        return Number(`${numero}`);
    }
    
}

export { TecnicoAdministrativo };