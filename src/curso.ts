abstract class Curso {

    private _nome: string;
    provate _cargahoraria: number;

    public get nome (): string() {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get cargahoraria(): number{
        return this._cargahoraria;
    }

    public set cargahoraria(cargahoraria: number) {
        this._cargahoraria = cargahoraria;
    }
    

}

export { Curso }