import { Aluno } from "../aluno/aluno.js";
import { Professor } from "../professor/professor.js";
import type { TecnicoAdministrativo } from "../tecnico-administrativo/tecnico-administrativo.js";

class Campus {
    private _name: string = '';
    private _endereco: string = '';
    private _alunos: Array<Aluno> = [];
    private _professores: Array<Professor> = [];
    private _tecnicosAdministrativos: Array<TecnicoAdministrativo> = [];

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get endereco(): string {
        return this._endereco;
    }
    public set endereco(value: string) {
        this._endereco = value;
    }

    public get alunos(): Array<Aluno> {
        return this._alunos;
    }
    public set alunos(value: Array<Aluno>) {
        this._alunos = value;
    }

    public get professores(): Array<Professor> {
        return this._professores;
    }
    public set professores(value: Array<Professor>) {
        this._professores = value;
    }

    public get tecnicosAdministrativos(): Array<TecnicoAdministrativo> {
        return this._tecnicosAdministrativos;
    }
    public set tecnicosAdministrativos(value: Array<TecnicoAdministrativo>) {
        this._tecnicosAdministrativos = value;
    }

    // Constructor
    constructor(name: string, endereco: string, alunos: Array<Aluno>, professores: Array<Professor>, tecnicosAdministrativos: Array<TecnicoAdministrativo>) {
        this._name = name;
        this._endereco = endereco;
        this._alunos = alunos;
        this._professores = professores;
        this._tecnicosAdministrativos = tecnicosAdministrativos;
    }
}

export { Campus };