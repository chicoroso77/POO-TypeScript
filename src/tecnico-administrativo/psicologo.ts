import { TecnicoAdministrativo } from "./tecnico-administrativo.js";
import { Endereco } from "../endereco/enderecos.js";

class Psicologo extends TecnicoAdministrativo {
    
    private _CRP: number = 0;

    /////////////////////
    //// Get e Set //////
    ////////////////////

    public get CRP(): number {
        return this._CRP;
    }
    public set CRP(value: number) {
        this._CRP = value;
    }

    ///////////////
    //Constructor//
    /////////////

    constructor (nome: string, sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], nacionalidade: string, CRP: number) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro, enderecos, nacionalidade);
        this._CRP = CRP;
    }

    public descreverVinculo(): string {
        return `Vinculo: Psicologo, CRP: ${this._CRP}`;
    }
     
}

export { Psicologo };