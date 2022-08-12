enum GENERO {
	ACAO = "ação",
	DRAMA = "drama",
	COMEDIA = "comédia",
	ROMANCE = "romance",
	TERROR = "terror",
}

type Filme = {
	nomeFilme: string;
	anoLancamento: number;
	generoFilme: string;
	notaResenha?: number | string;
};

function infoFilmes(
	nomeFilme: string,
	anoLancamento: number,
	generoFilme: string,
	notaResenha?: number
): Filme {
	if (notaResenha) {
		return {
			nomeFilme: nomeFilme,
			anoLancamento: anoLancamento,
			generoFilme: generoFilme,
			notaResenha: notaResenha,
		};
	} else {
		return {
			nomeFilme: nomeFilme,
			anoLancamento: anoLancamento,
			generoFilme: generoFilme,
		};
	}
}

console.log(infoFilmes("Duna", 2021, GENERO.ACAO, 74));
console.log(infoFilmes("Duna", 2021, GENERO.ACAO));
