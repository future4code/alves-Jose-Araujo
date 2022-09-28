import { UserBusiness } from "../src/business/UserBusiness";
import { BaseError } from "../src/errors/BaseError";
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("Testando a UserBusiness", () => {
	const userBusiness = new UserBusiness(
		new UserDatabaseMock(),
		new IdGeneratorMock(),
		new HashManagerMock(),
		new AuthenticatorMock()
	);

	test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
		const input: ISignupInputDTO = {
			email: "fulano@gmail.com",
			name: "Fulano",
			password: "fulano123",
		};

		const response = await userBusiness.signup(input);
		expect(response.message).toBe("Cadastro realizado com sucesso");
		expect(response.token).toBe("token-mock-normal");
	});

	test("Um token é retornado quando o login é bem-sucedido", async () => {
		const input: ILoginInputDTO = {
			email: "astrodev@gmail.com",
			password: "bananinha",
		};

		const response = await userBusiness.login(input);
		expect(response.message).toBe("Login realizado com sucesso");
		expect(response.token).toBe("token-mock-admin");
	});

	test("Erro quando o 'password' tiver menos de 6 caracteres", async () => {
		expect.assertions(2);

		try {
			const input: ISignupInputDTO = {
				email: "fulano@gmail.com",
				name: "Fulano",
				password: "1234567",
			};

			await userBusiness.signup(input);
		} catch (error) {
			if (error instanceof BaseError) {
				expect(error.statusCode).toBe(400);
				expect(error.message).toBe(
					"Parâmetro 'password' inválido: mínimo de 6 caracteres"
				);
			}
		}
	});

	test("Erro quando o 'name' for inválido", async () => {
		expect.assertions(2);

		try {
			const input: ISignupInputDTO = {
				email: "fulano@gmail.com",
				name: "al",
				password: "123456",
			};

			await userBusiness.signup(input);
		} catch (error) {
			if (error instanceof BaseError) {
				expect(error.statusCode).toBe(400);
				expect(error.message).toBe("Parâmetro 'name' inválido");
			}
		}
	});

	test("Erro quando o 'email' for inválido", async () => {
		expect.assertions(2);

		try {
			const input: ILoginInputDTO = {
				email: "fulano",
				password: "123456",
			};

			await userBusiness.login(input);
		} catch (error) {
			if (error instanceof BaseError) {
				expect(error.statusCode).toBe(400);
				expect(error.message).toBe("Parâmetro 'email' inválido");
			}
		}
	});
});
