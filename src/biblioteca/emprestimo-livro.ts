import type { UsuarioBiblioteca } from "./usuariobiblioteca.js";
import { Endereco } from "../endereco/enderecos.js";

class EmprestimoLivro {
    private _usuario: UsuarioBiblioteca;
    private _livro: string;
    private _dataEmprestimo: Date | null;
    private _dataDevolucao: Date | null;
    private _enderecoBiblioteca: Endereco;
    private _dataDevolucaoReal: Date | null = null;
    

    public get usuario(): UsuarioBiblioteca {
        return this._usuario;
    }
    public set usuario(value: UsuarioBiblioteca) {
        this._usuario = value;
    }

    public get livro(): string {
        return this._livro;
    }
    public set livro(value: string) {
        this._livro = value;
    }

    public get dataEmprestimo(): Date | null {
        return this._dataEmprestimo;
    }
    public set dataEmprestimo(value: Date | null) {
        this._dataEmprestimo = value;
    }

    public get dataDevolucao(): Date | null {
        return this._dataDevolucao;
    }
    public set dataDevolucao(value: Date | null) {
        this._dataDevolucao = value;
    }

    public get enderecoBiblioteca(): Endereco {
        return this._enderecoBiblioteca;
    }
    public set enderecoBiblioteca(value: Endereco) {
        this._enderecoBiblioteca = value;
    }

    public get dataDevolucaoReal(): Date | null {
        return this._dataDevolucaoReal;
    }
    public set dataDevolucaoReal(value: Date | null) {
        this._dataDevolucaoReal = value;
    }


    constructor(usuario: UsuarioBiblioteca, livro: string,  enderecoBiblioteca: Endereco) {
        this._usuario = usuario;
        this._livro = livro;
        this._dataEmprestimo = null;
        this._dataDevolucao = null;
        this._enderecoBiblioteca = enderecoBiblioteca;
    }
    ///////////////////
    /////Métodos/////
    ///////////////////

    public realizarEmprestimo(): boolean {
        if (this._usuario.estaAptoParaEmprestimo()) {  
            this._dataEmprestimo = new Date();

            this._dataDevolucao = new Date(this._dataEmprestimo.getTime());
            this._dataDevolucao.setDate(this._dataDevolucao.getDate() + 14); // Exemplo: 14 dias para devolução
            return true;
        }
        return false;
    }

    public devolverLivro(): boolean {
        if (this._dataEmprestimo === null || this._dataDevolucaoReal !== null) {
            return false;
        }

        this._dataDevolucaoReal = new Date();
        return true;

        
    }

    public descreverEmprestimo(): string {
        return `Usuário: ${this._usuario.identificar()}, 
        Livro: ${this._livro},
        Data de Empréstimo: ${this._dataEmprestimo?.toDateString() ?? "N/A"}, 
        Data de Devolução Prevista: ${this._dataDevolucao?.toDateString() ?? "N/A"},
        Data de Devolução Real: ${this._dataDevolucaoReal?.toDateString() ?? "Ainda não devolvido"},
        Endereço da Biblioteca: ${this._enderecoBiblioteca.rua}, ${this._enderecoBiblioteca.bairro}, 
        ${this._enderecoBiblioteca.cidade} - ${this._enderecoBiblioteca.estado}`;
    }

    
    
}

export { EmprestimoLivro };