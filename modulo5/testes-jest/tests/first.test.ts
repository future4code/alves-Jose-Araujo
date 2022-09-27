import { parOuImpar } from "./exercicios/exercicio00";
import { caixaAlta } from "./exercicios/exercicio01";
import { arrayStrings } from "./exercicios/exercicio02";
import { stringFormatoNumber } from "./exercicios/exercicio03";
import { quantidadeCaracter } from "./exercicios/exercicio04";
import { numeroAleatorio } from "./exercicios/exercicio05";
import { searchAstrodev, User } from "./exercicios/exercicio06";
import { calcMedia } from "./exercicios/exercicio07";
import { idadeAtual } from "./exercicios/exercicio08";
import { formatarData } from "./exercicios/exercicio09";

describe("Retorne true caso seja par e false ímpar", () => {
	test("A entrada 112 gera a saída true", () => {
		const input = 112;
		const result = parOuImpar(input);

		expect(result).toBe(true);
	});

	test("A entrada 111 gera a saída false", () => {
		const input = 111;
		const result = parOuImpar(input);

		expect(result).toBe(false);
	});
});

describe("Retorna a string passada em caixa alta", () => {
	test("A entrada tim maia gera a saída TIM MAIA", () => {
		const input = "tim maia";
		const result = caixaAlta(input);

		expect(result).toBe("TIM MAIA");
	});
});

describe("Retorna um array de strings onde cada item é uma letra da palavra", () => {
	test("A entrada dev gera a saída [”d”, “e”, “v”]", () => {
		const input = "dev";
		const result = arrayStrings(input);

		expect(result).toEqual(["d", "e", "v"]);
	});
});

describe("Retorna a string passada no formato number", () => {
	test("A entrada “50” gera a saída 50", () => {
		const input = "50";
		const result = stringFormatoNumber(input);

		expect(result).toBe(50);
	});
});

describe("Retorna um number representando a quantidade de caracteres", () => {
	test("A entrada “jest” gera a saída 4", () => {
		const input = "jest";
		const result = quantidadeCaracter(input);

		expect(result).toBe(4);
	});
});

describe("Retorna um número aleatório entre 1 e 10", () => {
	test("Gera a saída entre 1 e 10", () => {
		const result = numeroAleatorio();

		expect(result).toBeGreaterThanOrEqual(1);
		expect(result).toBeLessThanOrEqual(10);
	});
});

describe("Lista de usuários teste garantindo que o Astrodev está presente", () => {
	test("Gera a saída garantindo que Astrodev está presenta na lista", () => {
		const user: User = {
			id: "2",
			name: "Astrodev",
			age: 33,
		};

		const result = searchAstrodev();
		expect(result).toContainEqual(user);
	});
});

describe("Retorna sua média arredondada para cima", () => {
	test("A entrada [10, 4, 7, 6] gera a saída 7", () => {
		const input = [10, 4, 7, 6];
		const result = calcMedia(input);
		expect(result).toBe(7);
	});
});

describe("Recebe um ano de nascimento e retorna a idade atual", () => {
	test("A entrada 2000 gera a saída 22", () => {
		const input = 2000;
		const result = idadeAtual(input);
		expect(result).toBe(22);
	});
});

describe("Recebe uma data no formato “aaaa/mm/dd” e retorna outra string no formato “dd/mm/aaaa”", () => {
	test("A entrada “2022/09/26” gera a saída “26/09/2022”", () => {
		const input = "2022/09/26";
		const result = formatarData(input);
		expect(result).toBe("26/09/2022");
	});
});
