// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  return array.sort((a, b) => a - b);
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let novoArray = [];

  for (let numeros of array) {
    if (numeros % 2 === 0) novoArray.push(numeros);
  }
  return novoArray;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let novoArray = [];
  for (let numero of array) {
    if (numero % 2 === 0) novoArray.push(numero * numero);
  }
  return novoArray;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorValor = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maiorValor) {
      maiorValor = array[i];
    }
  }
  return maiorValor;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let menorNumero = 0;
  let maiorNumero = 0;
  let maiorDivisivelPorMenor;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  if (maiorNumero % menorNumero == 0) {
    maiorDivisivelPorMenor = true;
  } else {
    maiorDivisivelPorMenor = false;
  }

  let diferenca = maiorNumero - menorNumero;

  const retornaObjeto = {
    maiorNumero: maiorNumero,
    maiorDivisivelPorMenor: maiorDivisivelPorMenor,
    diferenca: diferenca,
  };

  return retornaObjeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let numerosPares = [];
  let i = 0;
  let numero = 0;

  while (i < n) {
    numerosPares.push(numero);
    numero = numero + 2;
    i++;
  }

  return numerosPares;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA == ladoB && ladoB == ladoC) {
    return `Equilátero`;
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    return `Isósceles`;
  } else {
    return `Escaleno`;
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arrayDoisValores = array.sort((a, b) => a - b);
  let novoArray = [
    arrayDoisValores[arrayDoisValores.length - 2],
    arrayDoisValores[1],
  ];

  return novoArray;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  let novoObjetoPessoa = { ...pessoa, nome: "ANÔNIMO" };
  return novoObjetoPessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const autorizaPessoas = pessoas.filter((pessoa, indice, lista) => {
    return pessoa.altura > 1.5 && pessoa.idade > 14 && pessoa.idade < 60;
  });

  return autorizaPessoas;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  const autorizaPessoas = pessoas.filter((pessoa, indice, lista) => {
    return pessoa.altura <= 1.5 || pessoa.idade <= 14 || pessoa.idade >= 60;
  });

  return autorizaPessoas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let resultado = contas.map((conta) => {
    let soma = conta.compras.reduce(
      (itemAnt, itemAtual) => itemAnt + itemAtual,
      0
    );
    let saldo = conta.saldoTotal;
    return { ...conta, saldoTotal: saldo - soma, compras: [] };
  });
  return resultado;
  // Só deu para fazer após a explicação no plantão de hoje.
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let agendaConsultas = consultas.sort((a, b) => {
    if (a.nome < b.nome) return -1;
    if (a.nome > b.nome) return 1;
    return 0;
  });
  return resultado;
  // Consegui fazer após assistir um tutorial o youtube que ensinou a como ordenar da forma correta.
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
