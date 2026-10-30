import type { UsuarioBiblioteca } from "./usuariobiblioteca.js";
import { Endereco } from "../endereco/enderecos.js";

class EmprestimoLivro {
    private _usuario: UsuarioBiblioteca;
    private _livro: string;
    private _dataEmprestimo: Date;
    private _dataDevolucao: Date;
    private _enderecoBiblioteca: Endereco;
    

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

    public get dataEmprestimo(): Date {
        return this._dataEmprestimo;
    }
    public set dataEmprestimo(value: Date) {
        this._dataEmprestimo = value;
    }

    public get dataDevolucao(): Date {
        return this._dataDevolucao;
    }
    public set dataDevolucao(value: Date) {
        this._dataDevolucao = value;
    }

    public get enderecoBiblioteca(): Endereco {
        return this._enderecoBiblioteca;
    }
    public set enderecoBiblioteca(value: Endereco) {
        this._enderecoBiblioteca = value;
    }


    constructor(usuario: UsuarioBiblioteca, livro: string, dataEmprestimo: Date, dataDevolucao: Date, enderecoBiblioteca: Endereco) {
        this._usuario = usuario;
        this._livro = livro;
        this._dataEmprestimo = dataEmprestimo;
        this._dataDevolucao = dataDevolucao;
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
        this._dataDevolucao = new Date();
        return true;
    }

    public descreverEmprestimo(): string {
        return `Usuário: ${this._usuario.identificar()}, 
        Livro: ${this._livro},
        Data de Empréstimo: ${this._dataEmprestimo.toDateString()}, 
        Data de Devolução: ${this._dataDevolucao.toDateString()}, 
        Endereço da Biblioteca: ${this._enderecoBiblioteca.rua}, ${this._enderecoBiblioteca.bairro}, 
        ${this._enderecoBiblioteca.cidade} - ${this._enderecoBiblioteca.estado}`;
    }

    
    
}

export { EmprestimoLivro };