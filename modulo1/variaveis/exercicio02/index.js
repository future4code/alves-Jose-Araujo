/* 
- Exercício 1:
let a = 10;
let b = 10;

console.log(b);

b = 5;
console.log(a, b);
Resposta: 10 e 10, 5

- Exercício 2:
let a = 10;
let b = 20;
c = a;
b = c;
a = b;

console.log(a, b, c);
Resposta: 10 10, 10

- Exercício 3:
let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?");
let recebePorDia = prompt("Quanto você recebe por dia?");
alert(`Voce recebe ${recebePorDia / horasTrabalhadas} por hora`);
Resposta: Sugiro que "t" seja substituido por "recebePorDia" e "p" por "horasTrabalhadas".
*/

// Exercício 4:
let nomeUsuario;
let idadeUsuario;

console.log(typeof nomeUsuario);
console.log(typeof idadeUsuario);
// Não tendo atribuido nada a elas recebemos a resposta "undefined".

nomeUsuario = prompt("Qual é o seu nome?");
idadeUsuario = prompt("Qual é a sua idade?");
console.log(typeof nomeUsuario);
console.log(typeof idadeUsuario);

/* 
  Após ter feito a chamada da variavel e ter atribuido um valor para ambas agora recebo o tipe string para ambas, notei uma pecularidade que talvez seja do prompt que tranforma todo conteúdo digitado em string, não faz filtro entre string, number ou boolean. 
*/

console.log("Olá", nomeUsuario, "você tem", idadeUsuario, "anos");

// Exercício 5:
let pergunta1 = "Você gosta de cachorro? (sim/não)";
let pergunta2 = "Você gosta de gato? (sim/não)";
let pergunta3 = "Você gosta de jogar? (sim/não)";

let reposta1 = prompt(pergunta1);
let reposta2 = prompt(pergunta2);
let reposta3 = prompt(pergunta3);

console.log(pergunta1, reposta1);
console.log(pergunta2, reposta2);
console.log(pergunta3, reposta3);

// Exercício 6:
let a = 10;
let b = 25;

c = a;
a = b;
b = c;

console.log("O novo valor de A: ", a);
console.log("O novo valor de B: ", b);

// Desafio 1:
/* 
let primeiroNumero = prompt("Informe o primeiro número");
let segundoNumero = prompt("Informe o segundo número");

let totalSoma = Number(primeiroNumero) + Number(segundoNumero);

console.log(
  "O primeiro número somado ao segundo número resulta em:",
  totalSoma
);
*/

// Desafio 2:
/*
let primeiroNumero = prompt("Informe o primeiro número");
let segundoNumero = prompt("Informe o segundo número");

let resultado = Number(primeiroNumero) * Number(segundoNumero);

console.log(
  "O primeiro número multiplicado pelo segundo número resulta em:",
  resultado
);
*/
