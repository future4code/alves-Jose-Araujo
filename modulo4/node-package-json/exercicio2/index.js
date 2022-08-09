// -> Exercício 02:
const operacao = process.argv[2];

switch (operacao) {
	case "add":
		console.log(`Resposta: ${+process.argv[3] + +process.argv[4]}`);
		break;
	case "sub":
		console.log(`Resposta: ${+process.argv[3] - +process.argv[4]}`);
		break;
	case "mult":
		console.log(`Resposta: ${+process.argv[3] * +process.argv[4]}`);
		break;
	case "div":
		console.log(`Resposta: ${+process.argv[3] / +process.argv[4]}`);
		break;
}
