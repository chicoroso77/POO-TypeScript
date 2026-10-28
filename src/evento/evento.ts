import { Pessoa } from "../pessoa/pessoa.js";

class Evento  {
    private _nome: string;
    private _participantes: Array<Pessoa> = [];
    private _endereco: string;

    constructor(nome: string, participantes: Array<Pessoa>, endereco: string) {
        this._nome = nome;
        this._participantes = participantes;
        this._endereco = endereco;
    }

    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public get participantes(): Array<Pessoa> {
        return this._participantes;
    }
    public set participantes(value: Array<Pessoa>) {
        this._participantes = value;
    }

    public get endereco(): string {
        return this._endereco;
    }
    public set endereco(value: string) {
        this._endereco = value;
    }

    public adicionarParticipante(participante: Pessoa): void {
        if (!this._participantes.includes(participante)) {
        this._participantes.push(participante);
        participante.adicionarEvento(this);
        }
    }

    public listarParticipantes(): void {
        console.log(`Participantes do evento ${this._nome}:`);
        
        this._participantes.forEach((participante, index) => {
            console.log(`${index + 1}. ${participante.nome}`);
        });
    }

}

export { Evento };