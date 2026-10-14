import { Curso } from "./curso.js";
class Cursosubsequente extends Curso {

    private _estagioObrigatorio: boolean = false;

    constructor(nome: string, cargahoraria: number, estagioObrigatorio: boolean){
        super(nome, cargahoraria);
        this._estagioObrigatorio = estagioObrigatorio;

    }
}

export { Cursosubsequente }