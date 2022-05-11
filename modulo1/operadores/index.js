/* 
Exercícios de interpretação de código

1. Exercício
const bool1 = true;
const bool2 = false;
const bool3 = !bool2;

let resultado = bool1 && bool2;
console.log("a. ", resultado);
Resposta: False (Pois o && precisa que todas condições sejam verdadeiras).

resultado = bool1 && bool2 && bool3;
console.log("b. ", resultado);
Resposta: False (Pois o && precisa que todas condições sejam verdadeiras).

resultado = !resultado && (bool1 || bool2);
console.log("c. ", resultado);
Resposta: True (Pois o || precisa que apenas uma das condições sejam verdadeiras).

console.log("d. ", typeof resultado);
Resposta: Boolean (Pois foi atribuido a variavel valores true ou false).

2. Exercício
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
Resposta: primeiroNumero:20 e segundoNumero20 vai resultar em 2020 pois o valor está sendo interpretado como string.

3. Exercício
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
Resposta: O uso do Number vai transformar o valor digitado em número e por sua vez vai ser efetuada a operação matemática.
*/

// Exercícios de escrita de código

// 1. Exercício

const idadeUsuario = prompt("Qual é a sua idade?");
const idadeMelhorAmigo = prompt("Qual a idade do seu melhor amigo?");

const verificarIdade = idadeUsuario > idadeMelhorAmigo;

console.log("Sua idade é maior do que a do seu melhor amigo?", verificarIdade);

// 2. Exercício

const insiraNumeroPar = prompt("Olá, insira um número par");
const restoDivisao = insiraNumeroPar % 2;

console.log("O resto da divisão:", restoDivisao);

/*
O número par sempre tem o seu resto da divisão 0, por não ter sobrado nenhum valor.
Quando é inserido um número impar o valor muda para 1.
*/

// 3. Exercício

const idadeEmAno = prompt("Qual é a sua idade em ano?");
const idadeEmMeses = idadeEmAno * 12;
const idadeEmDia = idadeEmAno * 365;
const idadeEmHoras = idadeEmDia * 24;

console.log("A sua idade em meses: ", idadeEmMeses);
console.log("A sua idade em dias: ", idadeEmDia);
console.log("A sua idade em horas: ", idadeEmHoras);

// 4. Exercício

let primeiroNumero = Number(prompt("Qual é o primeiro número?"));
let segundoNumero = Number(prompt("Qual é o segundo número?"));

console.log(
  "O primeiro número é maior que segundo? ",
  primeiroNumero > segundoNumero
);
console.log(
  "O primeiro número é igual ao segundo?",
  primeiroNumero === segundoNumero
);
console.log(
  "O primeiro número é divisível pelo segundo?",
  primeiroNumero % segundoNumero === 0
);
console.log(
  "O segundo número é divisível pelo primeiro?",
  segundoNumero % primeiroNumero === 0
);

// Desafios

// 1. Desafio
// A) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

const temperaturaF = (77 - 32) * (5 / 9) + 273.15;
console.log(temperaturaF + "K");

// B) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
const temperaturaC = 80 * (9 / 5) + 32;
console.log(temperaturaC + "°F");

// C) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
let valorEmF = 30 * (9 / 5) + 32;
let valorEmK = 30 + 273;

console.log(valorEmF + "°F " + valorEmK + "K");

// D) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter
const usuarioValor = Number(prompt("Valor em celsius desejado"));
valorEmF = usuarioValor * (9 / 5) + 32;
valorEmK = usuarioValor + 273;
console.log(valorEmF + "°F", valorEmK + "K");

// 2. Desafio

const custoQuilowatt = 0.05;
const quantidadeConsumida = 280;

const valorPagar = quantidadeConsumida * custoQuilowatt;
const porcentagemDesconto = (15 * valorPagar) / 100;
const valorTotal = valorPagar - porcentagemDesconto;

console.log("Valor bruto:", valorPagar, " Valor com desconto:", valorTotal);

// 3. Desafio
const usuarioConverter = Number(
  prompt("Qual valor em gal você quer converter para litros?")
);

console.log("20 lb equivalem a", 20 / 2.205, "kg");
console.log("10.5 oz equivalem a", 10.5 / 35.274, "kg");
console.log("100 mi equivalem a", 100 * 1609, "m");
console.log("50 ft equivalem a", 50 * 3.281, "m");
console.log(usuarioConverter, "gal equivalem a", usuarioConverter * 3.785, "l");
console.log("450 xic equivalem a", 450 * 0.24, "l");
