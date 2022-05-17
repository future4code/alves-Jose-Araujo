/*
Exercícios de interpretação de código
Exercício 1:
Resposta A) Ele recebe um número no prompt e testa se o número e e par, se tiver resto é impar e a mensagem não passou no teste é impressa no console.
Resposta B) Número Par.
Resposta C) Número Impar.

Exercício 2:
Resposta A) Automatizar a escolha de frutas de um supermercado inserido o nome da fruta e recebendo o seu valor.
Resposta B) O preço da fruta, Maçã é R$ 2.25
Resposta C) O programa entederia que o teria como parada o break do default assim usando preço inserido nele.

Exercício 3:
Resposta A) Está atribuindo a variável numero o valor inserido pelo usuário no prompt que por sua vez retorna um número com o uso do metodo Number().
Resposta B) Seria dito que o número passou no teste pois 10 > 0. Não será impresso nada pois não existe o else para tratar o caso de ser um número menor a 0.
Resposta C) Deverá ocorrer o erro de declaração pois a variável mensagem é declarada dentro do escopo do if e não sendo possível de ser acessada de fora do escopo. Filho acessa as variaveis do pai porém o contrário não acontece.
*/

// Exercícios de escrita de código

// Exercício 1:
// const idadeUsuario = Number(prompt("Qual é a sua idade?"));

// if (idadeUsuario >= 18) {
//   console.log("Você pode dirigir");
// } else {
//   console.log("Você não pode dirigir");
// }

// Exercício 2:
// const turnoAluno = prompt(
//   "Qual o seu turno? M (Matutino), V (Vespertino) ou N (Noturno)"
// ).toUpperCase();

// if (turnoAluno == "M") {
//   console.log("Bom dia!!");
// } else if (turnoAluno == "V") {
//   console.log("Boa tarde!!");
// } else if (turnoAluno == "N") {
//   console.log("Boa noite!!");
// } else {
//   console.log(`Você colocou ${turnoAluno}, não aceitamos esse valor!`);
// }

// Exercício 3:
// let turnoUsuario = prompt(
//   "Qual o seu turno? M (Matutino), V (Vespertino) ou N (Noturno)"
// ).toUpperCase();

// switch (turnoUsuario) {
//   case "M":
//     console.log("Bom dia!!");
//     break;
//   case "V":
//     console.log("Boa tarde!!");
//     break;
//   case "N":
//     console.log("Boa noite!!");
//     break;
//   default:
//     console.log(`Você colocou ${turnoUsuario}, não aceitamos esse valor!`);
//     break;
// }

// Exercício 4:
// const GeneroFilme = prompt("Qual o gênero do filme?").toLowerCase();
// const PrecoIngresso = Number(prompt("Qual o valor do ingresso?"));

// if (GeneroFilme == "fantasia" && PrecoIngresso < 15) {
//   console.log("Bom filme!");
// } else {
//   console.log("Escolha outro filme :(");
// }

// Desafios

// Desafio: 1
// const GeneroFilme = prompt("Qual o gênero do filme?").toLowerCase();
// const PrecoIngresso = Number(prompt("Qual o valor do ingresso?"));

// if (GeneroFilme == "fantasia" && PrecoIngresso < 15) {
//   const usuarioLanche = prompt("Qual lanche vai querer?");
//   console.log(`Bom filme! e aproveite o seu ${usuarioLanche}`);
// } else {
//   console.log("Escolha outro filme :(");
// }

// Desafio: 2
const nomeCompleto = prompt("Qual é o seu nome completo?");
const tipoJogo = prompt(
  "Qual o tipo de jogo? IN (internacional) e DO (Doméstico)"
).toUpperCase();
let etapaJogo = prompt(
  "Qual etapa do jogo? SF (semi-final), DT (terceiro lugar) e FI (final)"
).toUpperCase();
const categoria = Number(prompt("Qual a categoria? 1, 2, 3 ou 4"));
const quantidadeIngresso = Number(prompt("Quantidade de ingressos?"));
let valorIngresso;

if (etapaJogo == "SF" && categoria == 1) {
  etapaJogo = "Semi-final";
  valorIngresso = 1320;
} else if (etapaJogo == "SF" && categoria == 2) {
  etapaJogo = "Semi-final";
  valorIngresso = 880;
} else if (etapaJogo == "SF" && categoria == 3) {
  etapaJogo = "Semi-final";
  valorIngresso = 550;
} else if (etapaJogo == "SF" && categoria == 4) {
  etapaJogo = "Semi-final";
  valorIngresso = 220;
} else if (etapaJogo == "DT" && categoria == 1) {
  etapaJogo = "Terceiro lugar";
  valorIngresso = 660;
} else if (etapaJogo == "DT" && categoria == 2) {
  etapaJogo = "Terceiro lugar";
  valorIngresso = 440;
} else if (etapaJogo == "DT" && categoria == 3) {
  etapaJogo = "Terceiro lugar";
  valorIngresso = 330;
} else if (etapaJogo == "DT" && categoria == 4) {
  etapaJogo = "Terceiro lugar";
  valorIngresso = 170;
} else if (etapaJogo == "FI" && categoria == 1) {
  etapaJogo = "Final";
  valorIngresso = 1980;
} else if (etapaJogo == "FI" && categoria == 2) {
  etapaJogo = "Final";
  valorIngresso = 1320;
} else if (etapaJogo == "FI" && categoria == 3) {
  etapaJogo = "Final";
  valorIngresso = 880;
} else if (etapaJogo == "FI" && categoria == 4) {
  etapaJogo = "Final";
  valorIngresso = 330;
}

if (tipoJogo == "DO") {
  const valorTotalIngresso = valorIngresso * quantidadeIngresso;
  console.log(`
  ---Dados da compra--- 
  Nome do cliente: ${nomeCompleto}
  Tipo do jogo: Nacional
  Etapa do jogo: ${etapaJogo}
  Categoria: ${categoria}
  Quantidade de Ingressos: ${quantidadeIngresso} ingressos
  ---Valores---
  Valor do ingresso: R$ ${valorIngresso}
  Valor total: R$ ${valorTotalIngresso}
  `);
} else if (tipoJogo == "IN") {
  const valorIngressoDolar = valorIngresso / 4.1;
  const valorTotalIngressoDolar = valorIngressoDolar * quantidadeIngresso;
  console.log(`
  ---Dados da compra--- 
  Nome do cliente: ${nomeCompleto}
  Tipo do jogo: Internacional
  Etapa do jogo: ${etapaJogo}
  Categoria: ${categoria}
  Quantidade de Ingressos: ${quantidadeIngresso} ingressos
  ---Valores---
  Valor do ingresso: U$ ${valorIngressoDolar}
  Valor total: U$ ${valorTotalIngressoDolar}
  `);
}
