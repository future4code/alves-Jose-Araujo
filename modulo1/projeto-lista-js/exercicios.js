// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2;
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("Digite uma mensagem!");

  console.log(mensagem);
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01

function calculaAreaRetangulo(altura, largura) {
  const perg1 = Number(prompt("Digite um valor"));
  const perg2 = Number(prompt("Digite um valor"));

  const area = perg1 * perg2;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const perg1 = Number(prompt("Digite o ano atual"));
  const perg2 = Number(prompt("Digite o seu ano de nascimento"));

  idade = perg1 - perg2;
  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const IMC = peso / (altura * altura);
  return IMC;
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Qual é o seu nome?");
  const idade = prompt("Qual é a sua idade?");
  const email = prompt("Qual é o seu e-mail?");

  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  );
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  perg1 = prompt("Qual é a sua primeira cor favorita?");
  perg2 = prompt("Qual é a sua segunda cor favorita?");
  perg3 = prompt("Qual é a sua terceira cor favorita?");

  let cores = [];
  cores.push(perg1);
  cores.push(perg2);
  cores.push(perg3);

  console.log(cores);
}

// EXERCÍCIO 06
// perg1 = prompt("Digite uma frase");

function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
// let perg1 = prompt("Custo do espetaculo");
// let perg2 = prompt("Valor de cada ingresso");

function calculaIngressosEspetaculo(custo, valorIngresso) {
  let ingressosPrejuizo = custo / valorIngresso;
  return ingressosPrejuizo;
}

// EXERCÍCIO 08
// let texto1 = prompt("Qual é o primeiro texto");
// let texto2 = prompt("Qual é o segundo texto");

function checaStringsMesmoTamanho(string1, string2) {
  return string1.length == string2.length;
}

// EXERCÍCIO 09
// let array = [1, 2, 3];

function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
// let array = [1, 2, 3, 4, 5];

function retornaUltimoElemento(array) {
  return array[array.length - 1];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let ex11 = array[0]; // 1

  array[0] = array[array.length - 1]; // 5
  array[array.length - 1] = ex11; // 1
  return array; // [5, 2, 3, 4, 1]
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const texto1 = string1.toUpperCase();
  const texto2 = string2.toUpperCase();

  const checarIgualdade = texto1 == texto2;
  return checarIgualdade;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const perg1 = Number(prompt("Qual é o ano atual?"));
  const perg2 = Number(prompt("Qual é o seu ano de nascimento?"));
  const perg3 = Number(prompt("Qual ano sua carteira foi emitida?"));

  let idadeUsuario = perg1 - perg2;
  let carteiraEmissao = perg1 - perg3;

  const menosOuVinte = idadeUsuario <= 20 && carteiraEmissao >= 5;
  const vinteOuCinquenta =
    idadeUsuario >= 20 && idadeUsuario <= 50 && carteiraEmissao >= 10;
  const acimaCinquenta = idadeUsuario > 50 && carteiraEmissao >= 15;

  let verificarRenovacao = menosOuVinte || vinteOuCinquenta || acimaCinquenta;
  console.log(verificarRenovacao);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const multiDeQuatrocentos = ano % 400 == 0; // Multiplo de quatrocentos true ou false
  const multiDeQuatro = ano % 4 == 0; // Multiplo de quatro true ou false
  const multiCem = ano % 100 != 0; // Multiplo de cem true ou false

  if (multiDeQuatrocentos || (multiDeQuatro && multiCem)) {
    return true;
  } else {
    return false;
  }
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const perg1 = prompt("tem mais de 18?") == "sim";
  const perg2 = prompt("tem ensino médio completo?") == "sim";
  const perg3 = prompt("tem disponibilidade de horários?") == "sim";

  const inscricaoValida = perg1 && perg2 && perg3;

  console.log(inscricaoValida);
}
