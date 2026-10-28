import { Pessoa } from '../pessoa/pessoa.js';
import { Aluno } from '../aluno/aluno.js';

class VisitanteDiscente extends Aluno {
    private _instituicaoDeOrigem: string = '';
    private _cursoDeOrigem: string = '';
    private _periodoDePermanencia: string = '';

    //////////////////////////
    //Atributos estáticos/////
    ////////////////////////// 

    static quantidadeVisitantesDiscentes: number = 0;
    

    public get instituicaoDeOrigem(): string {
        return this._instituicaoDeOrigem;
    }
    public set instituicaoDeOrigem(value: string) {
        this._instituicaoDeOrigem = value;
    }

    public get cursoDeOrigem(): string {
        return this._cursoDeOrigem;
    }
    public set cursoDeOrigem(value: string) {
        this._cursoDeOrigem = value;
    }

    public get periodoDePermanencia(): string {
        return this._periodoDePermanencia;
    }
    public set periodoDePermanencia(value: string) {
        this._periodoDePermanencia = value;
    }

    constructor(nome: string,sobrenome: string,sexo: string,CPF: string, idade: number, brasileiro: boolean,  instituicaoDeOrigem: string, cursoDeOrigem: string, periodoDePermanencia: string) {
        super(nome, sobrenome, sexo, CPF, idade, brasileiro);
        this._instituicaoDeOrigem = instituicaoDeOrigem;
        this._cursoDeOrigem = cursoDeOrigem;
        this._periodoDePermanencia = periodoDePermanencia;
        VisitanteDiscente.quantidadeVisitantesDiscentes++;
    }

    protected gerarMatricula(): number {
        return Math.floor(Math.random() * 9000) + 10000;
    }

    public descreverVinculo(): string {
        return `Vinculo: Visitante Discente, Instituição de Origem: ${this._instituicaoDeOrigem}, Curso de Origem: ${this._cursoDeOrigem}, Período de Permanência: ${this._periodoDePermanencia}`;
    }
    
    public static getQuantidadeVisitantesDiscentes(): number {
        return VisitanteDiscente.quantidadeVisitantesDiscentes;
    }
}

export { VisitanteDiscente };