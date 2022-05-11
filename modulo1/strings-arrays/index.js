// Exercícios de interpretação de código

/*
Exercicio: 1
let array;
console.log("a. ", array);
Resposta: Como nenhum valor foi atribuido será undefined.

array = null;
console.log("b. ", array);
Resposta: Agora foi reatribuido a ela o valor null.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("c. ", array.length);
Resposta: O length é usado para saber a extensão de um array contando todos elementos. Daria 11

let i = 0;
console.log("d. ", array[i]);
Resposta: Foi atribuido 0 ao valor de i e após isso foi pedido para imprimir o array[i] que é o mesmo que array[0] resultando em 3.

array[i + 1] = 19;
console.log("e. ", array);
Resposta: Aqui foi feita a soma de i + 1 que é o mesmo que 3 + 1 = 4 e atribuiu o valor 19, sendo feita a mudança do indice 4 do array para 19.

const valor = array[i + 6];
console.log("f. ", valor);
Resposta: Armazenou na variavel valor a soma de i + 6 que é o mesmo que 3 + 6 = 9, após isso foi pedido para imprimir a variavel valor que retornou 9.

Exercicio: 2
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
Resposta: A frase irá ser transformada em maiuscula e depois irá ser feita a troca das letras "A" por "I" e irá ser impresso por fim o tamanho da frase. SUBI NUM ÔNIBUS EM MIRROCOS, 27
*/

// Exercícios de escrita de código

// Exercicio: 1
const usuarioNome = prompt("Qual é o seu nome?");
const usuarioEmail = prompt("Qual é o seu e-mail?");

console.log(
  `O e-mail ${usuarioEmail} foi cadastrado com sucesso. Seja bem-vindo(a), ${usuarioNome}!`
);

// Exercicio: 2
const minhasComidasFavoritas = [
  "Strogonoff",
  "Lasanha",
  "Cuscuz",
  "Parmegiana",
  "Yakissoba",
];

console.log(minhasComidasFavoritas);
console.log(
  `Essas são as minhas comidas preferidas: \n${minhasComidasFavoritas[0]} \n${minhasComidasFavoritas[1]} \n${minhasComidasFavoritas[2]} \n${minhasComidasFavoritas[3]} \n${minhasComidasFavoritas[4]}`
);

const usuarioComidaFavorita = prompt("Qual a sua comida favorita?");

minhasComidasFavoritas.splice(1, 1, usuarioComidaFavorita);
console.log(minhasComidasFavoritas);

// Exercicio: 3;
let listaDeTarefas = [];
listaDeTarefas[0] = prompt("Qual a sua primeira tarefa?");
listaDeTarefas[1] = prompt("Qual a sua primeira tarefa?");
listaDeTarefas[2] = prompt("Qual a sua primeira tarefa?");

console.log(listaDeTarefas);

const usuarioResponde = prompt(
  "Qual foi a tarefa que você realizou? (0, 1 ou 2)"
);

listaDeTarefas.splice(usuarioResponde, 1);

// Desafios
// Desafio 1:
const usuarioFrase = prompt("Digite uma frase para virar um array");
const arrayFrase = usuarioFrase.split(" ");

console.log(arrayFrase);

// Desafio 2:
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

console.log(
  `O abacaxi está no indice ${frutas.indexOf(
    "Abacaxi"
  )} e o tamanho desse array é: ${frutas.length}`
);
