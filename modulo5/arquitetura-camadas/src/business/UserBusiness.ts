import { UserDatabase } from "../database/UserDatabase";
import { User } from "../models/User";
import {
	Authenticator,
	ITokenPayload,
} from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
export class UserBusiness {
	public signup = async (input: any) => {
		const name = input.name;
		const email = input.email;
		const password = input.password;

		if (!name || !email || !password) {
			throw new Error("Você precisa preencher todos campos.");
		}

		if (typeof name !== "string") {
			throw new Error("O campo 'name' está inválido!");
		}

		if (typeof email !== "string") {
			throw new Error("O campo 'email' está inválido!");
		}

		if (typeof password !== "string") {
			throw new Error("O campo 'password' está inválido!");
		}

		if (name.length < 3 || password.length < 6) {
			throw new Error(
				"'name' deve possuir ao menos 3 caracteres e 'password' 6 caracteres."
			);
		}

		if (email.indexOf("@") === -1) {
			throw new Error("O e-mail inserido não é válido!");
		}

		const userDataBase = new UserDatabase();
		const emailExist = await userDataBase.getUserByEmail(email);

		if (emailExist) {
			throw new Error("Esse e-mail já está cadastrado.");
		}

		const generateId = new IdGenerator();
		const id = generateId.createId();

		const hashManager = new HashManager();
		const hash = await hashManager.hash(password);

		const user = new User(id, name, email, hash);

		await userDataBase.createUser(user);

		const payload: ITokenPayload = {
			id: user.getId(),
			role: user.getRole(),
		};

		const authenticator = new Authenticator();
		const token = authenticator.generateToken(payload);

		const result = {
			message: "Cadastro realizado com sucesso!",
			token,
		};

		return result;
	};

	public login = async (input: any) => {
		const email = input.email;
		const password = input.password;

		if (!email || !password) {
			throw new Error("Você precisa preencher todos campos.");
		}

		if (typeof email !== "string") {
			throw new Error("O campo 'email' está inválido!");
		}

		if (typeof password !== "string") {
			throw new Error("O campo 'password' está inválido!");
		}

		if (password.length < 6) {
			throw new Error(
				"'password' deve possuir ao menos 6 caracteres."
			);
		}

		if (email.indexOf("@") === -1) {
			throw new Error("O e-mail inserido não é válido!");
		}

		const userDataBase = new UserDatabase();
		const userDB = await userDataBase.getUserByEmail(email);

		if (!userDB) {
			throw new Error("Não existe um cadastro com esse e-mail.");
		}

		const hashManager = new HashManager();
		const isPasswordCorrect = await hashManager.compare(
			password,
			userDB.password
		);

		if (!isPasswordCorrect) {
			throw new Error("Senha incorreta!");
		}

		const payload: ITokenPayload = {
			id: userDB.id,
			role: userDB.role,
		};

		const authenticator = new Authenticator();
		const token = authenticator.generateToken(payload);

		const result = {
			message: "Usuário logado com sucesso!",
			token,
		};

		return result;
	};
}
