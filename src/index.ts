let nome: string;
let sobrenome: string;
let nomecompleto: string;
let idade: number;
let brasileiro: boolean;
let enderecos: string[]; //Ou let enderecos: Arrays<string>;

nome = 'Esdras';
sobrenome = 'Arthur';
idade = 43;
brasileiro = false;
nomecompleto = nome + " " + sobrenome;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto"];

let exibirnome = function(): string {
    return ('O nome completo é: ${nomecompleto}');
};

let recuperaEndereco = function (posicao: number): string | undefined {
  return enderecos[posicao];
};

console.log(exibirnome());
console.log(recuperaEndereco(1));

