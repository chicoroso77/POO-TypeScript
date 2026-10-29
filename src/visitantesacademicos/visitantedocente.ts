import { Professor } from '../professor/professor.js';
import{Endereco} from '../endereco/enderecos.js';

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

    constructor(nome: string,sobrenome: string, sexo: string, CPF: string, idade: number, brasileiro: boolean, enderecos: Endereco[], salario: number, instituicaoDeOrigem: string, areaDeAtuacao: string, periodoDePermanencia: string) {
        super(nome, sobrenome, idade, brasileiro, enderecos, sexo, CPF, salario);
        this._instituicaoDeOrigem = instituicaoDeOrigem;
        this._areaDeAtuacao = areaDeAtuacao;
        this._periodoDePermanencia = periodoDePermanencia;
        VisitanteDocente.quantidadeVisitantesDocentes++;
    }

    protected gerarMatricula(): number {
        return Math.floor(Math.random() * 900000) + 100000;
    }

    public descreverVinculo(): string {
        return `${this.nome} ${this.sobrenome} é Visitante Docente da Instituição: ${this._instituicaoDeOrigem}, na área de Atuação: ${this._areaDeAtuacao}, por um período de ${this._periodoDePermanencia}`;
    }
    
    public static getQuantidadeVisitantesDocentes(): number {
        return VisitanteDocente.quantidadeVisitantesDocentes;
    }
}

export { VisitanteDocente };