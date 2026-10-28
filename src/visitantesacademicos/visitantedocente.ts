import { Pessoa } from '../pessoa/pessoa.js';
import { Professor } from '../professor/professor.js';

class VisitanteDocente extends Professor {
    private _instituicaoDeOrigem: string = '';
    private _areaDeAtuacao: string = '';
    private _periodoDePermanencia: string = '';

    static quantidadeVisitantesDocentes: number = 0;

    public get instituicaoDeOrigem(): string {
        return this._instituicaoDeOrigem;
    }
    public set instituicaoDeOrigem(value: string) {
        this._instituicaoDeOrigem = value;
    }

    public get areaDeAtuacao(): string {
        return this._areaDeAtuacao;
    }
    public set areaDeAtuacao(value: string) {
        this._areaDeAtuacao = value;
    }

    public get periodoDePermanencia(): string {
        return this._periodoDePermanencia;
    }
    public set periodoDePermanencia(value: string) {
        this._periodoDePermanencia = value;
    }

    constructor(nome: string,sobrenome: string,sexo: string,CPF: string, idade: number, brasileiro: boolean,  instituicaoDeOrigem: string, areaDeAtuacao: string, periodoDePermanencia: string) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro);
        this._instituicaoDeOrigem = instituicaoDeOrigem;
        this._areaDeAtuacao = areaDeAtuacao;
        this._periodoDePermanencia = periodoDePermanencia;
        VisitanteDocente.quantidadeVisitantesDocentes++;
    }

    protected gerarMatricula(): number {
        return Math.floor(Math.random() * 900000) + 100000;
    }

    public descreverVinculo(): string {
        return `Vinculo: Visitante Docente, Instituição de Origem: ${this._instituicaoDeOrigem}, Área de Atuação: ${this._areaDeAtuacao}, Período de Permanência: ${this._periodoDePermanencia}`;
    }
    
    public static getQuantidadeVisitantesDocentes(): number {
        return VisitanteDocente.quantidadeVisitantesDocentes;
    }
}

export { VisitanteDocente };