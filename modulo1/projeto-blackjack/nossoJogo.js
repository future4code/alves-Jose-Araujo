/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
   const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

   console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
   console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack 🃏!");

if (confirm("Quer iniciar uma nova rodada 🎰?")) {
  // Comprar as cartas usuário
  const cartasUsuario1 = comprarCarta();
  const cartasUsuario2 = comprarCarta();
  // Comprar as cartas computador
  const cartaComputador1 = comprarCarta();
  const cartaComputador2 = comprarCarta();
  // Somar as cartas
  const somarCartasUsuario = cartasUsuario1.valor + cartasUsuario2.valor;
  const somarCartasComputador = cartaComputador1.valor + cartaComputador2.valor;

  console.log(
    `👤 - cartas: ${cartasUsuario1.texto} ${cartasUsuario2.texto} - pontuação ${somarCartasUsuario}`
  );

  console.log(
    `💻 - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${somarCartasComputador}`
  );

  // Lógica para comparar os valores e imprimir o ganhador
  if (somarCartasUsuario > somarCartasComputador) {
    console.log(`O usuário levou a melhor 🎉!`);
  } else if (somarCartasComputador > somarCartasUsuario) {
    console.log(`O computador levou a melhor 🎉!`);
  } else if (somarCartasComputador == somarCartasUsuario) {
    console.log(`Empate 🤡!`);
  }

  // Saída caso o usuário queira cancelar.
} else {
  console.log("O jogo acabou 🔚");
}
