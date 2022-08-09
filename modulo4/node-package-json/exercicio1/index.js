// -> Exercício 01:
// A) Utiliamos o comando: process.argv[2] para acessar os parâmetros passados.

// B)
console.log(
	`Olá, ${process.argv[2]}! Você tem ${process.argv[3]} anos.`
);

// C)
console.log(
	`Olá, ${process.argv[2]}! Você tem ${
		process.argv[3]
	} anos. Em sete anos você terá ${+process.argv[3] + 7}`
);
