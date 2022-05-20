/* 
Exercícios de interpretação de código

Exercício: 1
Resposta A): Vai ser impresso o conteúdo do array usuarios, sendo ele o item, index e todo o array

Exercício: 2
Resposta A): Será impresso em um novo array todo o conteúdo que está atribuido a chave nome do array no caso, Amanda Rangel, Amanda Rangel e Letícia Chijo.

Exercício: 3
Resposta A): Só será impresso o que for diferente de Chijo em um novo array no caso nome: "Laís Petra", apelido: "Laura" e nome: "Laís Petra", apelido: "Laura".
*/

// Exercícios de escrita de código
// Exercício: 1

// Resposta A):
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

const novoArrayDoguinhos = pets.filter((arrayDoguinhos) => {
  return arrayDoguinhos;
});

const nomeDoguinhos = novoArrayDoguinhos.map((nomeDogs) => {
  return nomeDogs.nome;
});

console.log(nomeDoguinhos);

// Resposta B):
const doguinhosSalsicha = pets.filter((arrayDoguinhos) => {
  return arrayDoguinhos.raca.toLowerCase() == "salsicha";
});

const nomeDoguinhosSalsicha = doguinhosSalsicha.map((nomeDogs) => {
  return nomeDogs;
});

console.log(nomeDoguinhosSalsicha);

// Resposta C):
const doguinhosPoodle = pets.filter((arrayDoguinhos) => {
  if (arrayDoguinhos.raca.toLowerCase() == "poodle") {
    return arrayDoguinhos.nome;
  }
});

const descontoPoodle = doguinhosPoodle.map((nomeDogs) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeDogs.nome}`;
});

console.log(descontoPoodle);

// Exercício: 2
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

// Resposta A):
const arrayDeItems = produtos.filter((arrayItem) => {
  return arrayItem;
});

const nomeDeCadaItem = arrayDeItems.map((nomeItem) => {
  return nomeItem.nome;
});

console.log(nomeDeCadaItem);

// Resposta B):
const nomeDeItems = produtos.map((nomeItem, indice, lista) => {
  const descontoItems = (lista[indice].preco * 5) / 100;
  return {
    nome: lista[indice].nome,
    preco: lista[indice].preco - descontoItems,
  };
});

console.log(nomeDeItems);

// Resposta C):
const objetosBebidas = produtos.filter((array) => {
  return array.categoria.toLowerCase() == "bebidas";
});

const nomeDasBebidas = objetosBebidas.map((nomeBebidas) => {
  return nomeBebidas;
});

console.log(nomeDasBebidas);

// Resposta D):
const filtrarItemYpe = produtos.filter((nomeItem, indice, lista) => {
  return lista[indice].nome.includes("Ypê");
});

console.log(filtrarItemYpe);

// Resposta E):
const ypeProduto = filtrarItemYpe.map((itemArray) => {
  return "Compre " + itemArray.nome + " por " + itemArray.preco + ".";
});

console.log(ypeProduto);

// Desafios
// Desafio: 1
const pokemons = [
  { nome: "Bulbasaur", tipo: "grama" },
  { nome: "Bellsprout", tipo: "grama" },
  { nome: "Charmander", tipo: "fogo" },
  { nome: "Vulpix", tipo: "fogo" },
  { nome: "Squirtle", tipo: "água" },
  { nome: "Psyduck", tipo: "água" },
];

const ordemAlfabetica = pokemons.map((array) => {
  const nomes = array.nome;
  return nomes;
});

console.log(ordemAlfabetica.sort());
