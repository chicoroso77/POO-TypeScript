import { TecnicoAdministrativo } from "./tecnico-administrativo.js";
import { Endereco } from "../endereco/enderecos.js";
class Bibliotecario extends TecnicoAdministrativo {
    
    private _CRB: number = 0;

    /////////////////////
    //// Get e Set //////
    ////////////////////

    public get CRB(): number {
        return this._CRB;
    }
    public set CRB(value: number) {
        this._CRB = value;
    }

    ///////////////
    //Constructor//
    /////////////

    constructor (nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string, CRB: number) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos, nacionalidade);
        this._CRB = CRB;
    }

}

export { Bibliotecario };