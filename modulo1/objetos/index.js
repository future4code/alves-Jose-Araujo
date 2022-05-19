// Exercícios de interpretação de código
/*

Exercício: 1

Resposta A):
Matheus Nachtergaele
Virginia Cavendish
canal Globo gorario 14h

Exercício: 2

Resposta A):
nome: "Juca",
idade: 3,
raca: "SRD",

nome: "Juba",
idade: 3,
raca: "SRD",

nome: "Jubo",
idade: 3,
raca: "SRD",

Resposta B): Serve para copiar toda a informação que vai ser passado após os três pontos.

Exercício: 3

Resposta A):
false
undefined
Resposta B): O false foi impresso pois o valor de backender dentro do objeto pessoa é false e tentou fazer o mesmo para altura porém não existe nenhum chave com o nome altura e por isso ele deu undefined.
*/

// Exercícios de escrita de código
// Exercício: 1
const pessoa = {
  nome: "Amanda",
  apelidos: ["Amandinha", "Mandinha", "Mandi"],
};

function mensagemPessoa(param) {
  console.log(
    `Olá eu sou ${param.nome}, mas pode me chamar de: ${param.apelidos[0]}, ${param.apelidos[1]} ou ${param.apelidos[2]}.`
  );
}

mensagemPessoa(pessoa);

const novosApelidos = { ...pessoa, apelidos: ["Amada", "Meiga", "Baixinha"] };

mensagemPessoa(novosApelidos);

// Exercício: 2
const alunoLabenu1 = {
  nome: "Bruno",
  idade: 23,
  profissao: "Estudante",
};

const alunoLabenu2 = {
  nome: "Carlos",
  idade: 22,
  profissao: "Estudante",
};

function recebeInfo(param) {
  const array = [];
  const numeroDeCaracteresNome = param.nome.length;
  const numeroDeCaracteresProfi = param.profissao.length;

  array.push(param.nome);
  array.push(numeroDeCaracteresNome);
  array.push(param.idade);
  array.push(param.profissao);
  array.push(numeroDeCaracteresProfi);

  return array;
}

console.log(recebeInfo(alunoLabenu1));
console.log(recebeInfo(alunoLabenu2));

// Exercício: 3
let carrinho = [];

const sacolao1 = {
  nome: "Maça",
  disponilidade: true,
};

const sacolao2 = {
  nome: "Manga",
  disponilidade: true,
};

const sacolao3 = {
  nome: "Morango",
  disponilidade: true,
};

function recebeFruta(param) {
  carrinho.push(param);
}

console.log("Antes de preencher o array com as frutas:", carrinho);

recebeFruta(sacolao1);
recebeFruta(sacolao2);
recebeFruta(sacolao3);

console.log("Após preencher o array com as frutas:", carrinho);

// Desafios
// Desafio: 1
function perguntaUsuario() {
  let dadosUsuario = {};
  dadosUsuario.nome = prompt("Qual é o seu nome?");
  dadosUsuario.idade = Number(prompt("Qual é a sua idade?"));
  dadosUsuario.profissao = prompt("Qual é a sua profissão?");

  console.log(dadosUsuario);
  console.log(typeof dadosUsuario);
}

perguntaUsuario();

// Desafio: 2
const filme1 = {
  nome: "Django Livre",
  anoLancamento: 2013,
};

const filme2 = {
  nome: "O lobo de Wallstreet",
  anoLancamento: 2013,
};

function recebeFilmes(param1, param2) {
  const primeiroAntesSegundo = param1.anoLancamento < param2.anoLancamento;
  const primeiroIgualSegundo = param1.anoLancamento == param2.anoLancamento;

  return console.log(`
  O primeiro filme foi lançado antes do segundo? ${primeiroAntesSegundo} \n
  O primeiro filme foi lançado no mesmo ano do segundo? ${primeiroIgualSegundo}
  `);
}

recebeFilmes(filme1, filme2);

// Desafio: 3
function controleDeEstoque(param) {
  return (param.disponilidade = false);
}

controleDeEstoque(sacolao1);

console.log(carrinho);
