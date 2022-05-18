/* 
Exercícios de interpretação de código
Exercício 1:
Resposta: Será impresso o valor 10 pois está sendo feita a soma do indece com a variavel valor.

Exercício 2:
Resposta A): Será impresso o valores que são maiores que 18 no caso 19, 21, 23, 25, 27, 30.
Resposta B): Retirar o if e dar um console.log(numero) que iria imprimir todos os números do array.

Exercício 2:
Resposta: Será impresso 4x asterisco pois o while serve para repetição e o for para inserir o valor que é asterisco.
*/

// Exercícios de escrita de código
// Exercício: 1
const quantidadeBichinhos = Number(
  prompt("Quantos bichinhos de estimação você tem?")
);

if (quantidadeBichinhos > 0) {
  let array = [];
  for (let i = 0; i < quantidadeBichinhos; i++) {
    const nomeDoBichinho = prompt("Qual é o nome do seu bicinho?");
    array.push(nomeDoBichinho);
  }
  console.log(array);
} else {
  console.log("Que pena! Você pode adotar um pet!");
}

// Exercício: 2
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

// Letra A)
function imprimirValoresArray(array) {
  for (let valores of array) {
    console.log(valores);
  }
}

imprimirValoresArray(arrayOriginal);

// Letra B)
function dividirValoresArray(array) {
  for (let valores of array) {
    const dividirValores = valores / 10;
    console.log(dividirValores);
  }
}

dividirValoresArray(arrayOriginal);

// Letra C)
function novoArrayPar(array) {
  let novoArray = [];
  for (let valor of array) {
    if (valor % 2 == 0) {
      novoArray.push(valor);
    }
  }
  console.log(novoArray);
}

novoArrayPar(arrayOriginal);

// Letra: D)
function novoArrayStrings(array) {
  let arrayStrings = [];
  for (let valor of array) {
    arrayStrings.push(`O elemento do índex ${arrayStrings.length} é: ${valor}`);
  }
  console.log(arrayStrings);
}

novoArrayStrings(arrayOriginal);

// Letra E)
function maioresNumeroArray(array) {
  let valorMaximo = 0;
  let valorMinimo = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > valorMaximo) {
      valorMaximo = array[i];
    } else if (array[i] < valorMinimo) {
      valorMinimo = array[i];
    }
  }
  console.log(
    `Meu maior numero é ${valorMaximo} e meu menor número é ${valorMinimo}`
  );
}

maioresNumeroArray(arrayOriginal);
