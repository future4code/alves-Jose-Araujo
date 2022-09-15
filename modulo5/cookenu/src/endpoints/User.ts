import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class UserEndpoint {
	public createUser = async (req: Request, res: Response) => {
		try {
			const { name, email, password } = req.body;

			if (!name || !email || !password) {
				throw new Error("Todos campos precisam ser preenchidos.");
			}

			if (password.length < 6) {
				throw new Error("A senha precisa ter mais de 6 caracteres.");
			}

			if (email.indexOf("@") === -1) {
				throw new Error("O e-mail inserido não é válido!");
			}

			const userDataBase = new UserDatabase();
			const userDB = await userDataBase.getUserByEmail(email);

			if (userDB) {
				throw new Error("Esse e-mail já está cadastrado.");
			}

			const generateId = new GenerateId();
			const id = generateId.createId();

			const hashManager = new HashManager();
			const hash = await hashManager.hash(password);

			const user = new User(id, name, email, hash);
			await userDataBase.createUser(user);

			const token = new Authenticator().generateToken(id);
			res
				.status(201)
				.send({ message: "Usuário cadastrado com sucesso", token });
		} catch (error: any) {
			res
				.status(error.statusCode || 500)
				.send({ message: error.message });
		}
	};

	public login = async (req: Request, res: Response) => {
		const { email, password } = req.body;

		if (!email || !password) {
			throw new Error("Todos campos precisam ser preenchidos.");
		}

		const userData = new UserDatabase();
		const userDB = await userData.getUserByEmail(email);

		if (!userDB) {
			throw new Error("Esse e-mail já está cadastrado");
		}

		const hashManager = new HashManager();
		const isPasswordCorrect = await hashManager.compare(
			password,
			userDB.password
		);

		if (!isPasswordCorrect) {
			throw new Error("Senha incorreta!");
		}

		const token = new Authenticator().generateToken(userDB.id);
		res.status(200).send({ access_token: token });
	};
}
