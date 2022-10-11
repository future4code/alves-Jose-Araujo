import { UserBusiness } from "../src/business/UserBusiness";
import { ILoginInputDTO, ISignupInputDTO } from "../src/models/User";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { idGeneratorMock } from "./mocks/IdGeneratorMock";
import { UserDatabaseMock } from "./mocks/UserDatabaseMock";

describe("Testes unitários no UserBusiness", () => {
	const userBusiness = new UserBusiness(
		new UserDatabaseMock(),
		new idGeneratorMock(),
		new HashManagerMock(),
		new AuthenticatorMock()
	);

	test("Em caso de sucesso ao fazer o cadastro, será gerado um token!", async () => {
		const input: ISignupInputDTO = {
			email: "fulano@gmail.com",
			name: "Fulano",
			password: "fulano123",
		};

		const result = await userBusiness.signup(input);
		expect(result.message).toBe("Cadastro realizado com sucesso");
		expect(result.token).toBe("token-mock-normal");
	});

	test("Em caso de sucesso ao fazer o login, será gerado um token!", async () => {
		const input: ILoginInputDTO = {
			email: "astrodev@gmail.com",
			password: "bananinha",
		};

		const result = await userBusiness.login(input);
		expect(result.message).toBe("Login realizado com sucesso");
		expect(result.token).toBe("token-mock-admin");
	});
});
