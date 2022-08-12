function separaDiaMesAno(param1: string, param2: string): string {
	const arrayData = param2.split("/");
	return `Olá me chamo ${param1}, nasci no dia ${arrayData[0]} do mês de ${arrayData[1]} do ano de ${arrayData[2]}.`;
}

console.log(separaDiaMesAno("José Carlos", "31/07/1999"));
