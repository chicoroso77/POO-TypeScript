import { Aluno } from "./aluno.js";

class Turma {
    private _ano: number;
    private _semestre: number;
    private _alunos = Aluno[];
}

export { Turma }