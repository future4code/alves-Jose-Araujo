// Exercício 1:
// A) Não posso inserir um número a uma variável que é uma string.
// B) Podemos usar o operador lógico ou (pipe "|") para que a variável passe a aceitar mais de um tipo.

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum ArcoIris {
    VIOLETA = "violeta",
    ANIL = "Anil",
    AZUL = "Azul",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    LARANJA = "Laranja",
    VERMELHO = "Vermelho",
} 


const pessoa1:Pessoa = {
    nome: "Brenno",
    idade: 22,
    corFavorita: ArcoIris.AZUL
}

const pessoa2:Pessoa = {
    nome: "Zezinho",
    idade: 21,
    corFavorita: ArcoIris.AMARELO
}

const pessoa3:Pessoa = {
    nome: "Rato",
    idade: 35,
    corFavorita: ArcoIris.LARANJA
}

console.table(pessoa1)
console.table(pessoa2)
console.table(pessoa3)