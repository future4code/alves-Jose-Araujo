```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
	let qntsVezesApareceu = 0;

	for (let numero of arrayDeNumeros) {
		if (numero === numeroEscolhido) {
			qntsVezesApareceu++;
		}
	}

	if (qntsVezesApareceu > 0) {
		return `O número ${numeroEscolhido} aparece ${qntsVezesApareceu}x`;
	} else return `Número não encontrado`;
}
```
