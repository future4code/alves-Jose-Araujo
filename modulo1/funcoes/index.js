// Exercícios de interpretação de código
/*
Exercício: 1
function minhaFuncao(variavel) {
  return variavel * 5;
}

console.log(minhaFuncao(2));
console.log(minhaFuncao(10));
A) Resposta: Vai ser feita uma operação matemática em no primeiro console vai ser 2 x 5 = 10 e no outro console 5 x 10 = 50.
B) Resposta: Seria feita a operação matemática porém nada seria impresso no console.

Exercício: 2
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function (texto) {
  return texto.toLowerCase().includes("cenoura");
};

const resposta = outraFuncao(textoDoUsuario);
console.log(resposta);

A) Resposta: A função irá pegar o texto inserido pelo usuário e fazer um tratamento, colocando o texto em minusculo e procurando se no texto que foi digitado existe a palavra cenoura.
B) Resposta: Irá retornar true pois no texto há cenoura; true e true.
*/

// Exercícios de escrita de código

// Exercício: 1
function minhaInfo() {
  return console.log(
    "Eu sou Carlos, tenho 22 anos, moro em Recife e sou estudante."
  );
}

minhaInfo();

const usuarioInfo = function (nome, idade, cidade, profissao) {
  return console.log(
    `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
  );
};

usuarioInfo("Carlos", 22, "Recife", "Desenvolvedor");

// Exercício: 2
const soma = (num1, num2) => console.log(num1 + num2);

soma(20, 5);

const verificarNumero = (num1, num2) => console.log(num1 >= num2);

verificarNumero(4, 5);

const numeroPar = (num1) => console.log(num1 % 2 == 0);

numeroPar(5);

const recebeMensagem = (mensagem) =>
  console.log(
    `O tamanho da mensagem é: ${mensagem.length}. ${mensagem.toLowerCase()}`
  );

recebeMensagem("Olá, meu nome é Carlos e eu gosto de café.");

// Exercício: 3
const somaUsuario = (num1, num2) => console.log(`Soma: ${num1 + num2}`);

const pergunta1 = Number(prompt("Digite o primeiro número"));
const pergunta2 = Number(prompt("Digite o segundo número"));

console.log(`Números inseridos: ${pergunta1} e ${pergunta2}`);

somaUsuario(pergunta1, pergunta2);

const subUsuario = (num1, num2) => console.log(`Diferença: ${num1 - num2}`);

subUsuario(pergunta1, pergunta2);

const mutiplicacaoUsuario = (num1, num2) =>
  console.log(`Multiplicação: ${num1 * num2}`);

mutiplicacaoUsuario(pergunta1, pergunta2);

const divisaoUsuario = (num1, num2) => console.log(`Divisão: ${num1 / num2}`);

divisaoUsuario(pergunta1, pergunta2);

//Desafios
// Exercício: 1
let arrow = (p1) => console.log(p1);

let arrow2 = (p1, p2) => arrow(p1 + p2);

arrow2(20, 5);

// Exercício: 2
let teorema = (num1, num2) => console.log(Math.hypot(num1, num2));

teorema(25, 20);
