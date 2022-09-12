import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { generateId } from "../services/generateId";

class UserEndpoint {
	public async createUser(req: Request, res: Response) {
		try {
			const { email, password } = req.body;
			const UserDataBase = new UserDatabase();

			if (!password || password.length < 6) {
				res.statusCode = 404;
				throw new Error("'password' inserido não é válido!");
			}

			if (!email || email.indexOf("@") === -1) {
				res.statusCode = 404;
				throw new Error("'email' inserido não é válido!");
			}

			const id = generateId();
			const newUser = {
				id,
				email,
				password,
			};

			await UserDataBase.createUser(newUser);
			new Authenticator().generateToken(id);

			res.status(201).send({ token: "token gerado pelo jwt" });
		} catch (error: any) {
			res.status(400).send({
				message: error.message,
			});
		}
	}

	async login(req: Request, res: Response) {
		try {
			const { email, password } = req.body;
			const UserDataBase = new UserDatabase();

			if (!password || password.length < 6) {
				res.statusCode = 404;
				throw new Error("'password' inserido não é válido!");
			}

			if (!email || email.indexOf("@") === -1) {
				res.statusCode = 404;
				throw new Error("'email' inserido não é válido!");
			}

			const correctEmail = await UserDataBase.getUserByEmail(email);
			const correctPassword = await UserDataBase.getUserByPassword(
				password
			);

			if (!correctEmail.length && !correctPassword.length) {
				throw new Error("E-mail ou senha inválidos!");
			}

			const token = new Authenticator().generateToken(
				correctEmail[0].id
			);
			res.status(200).send(token);
		} catch (error: any) {
			res.status(400).send({
				message: error.message,
			});
		}
	}

	async profile(req: Request, res: Response) {
		try {
			const token = req.headers.authorization as string;
			const getAuthentication = new Authenticator().getData(token);
			const user = await new UserDatabase().getUserById(
				getAuthentication.id
			);

			res.status(201).send({
				id: user.id,
				email: user.email,
			});
		} catch (error: any) {
			res.status(400).send({
				message: error.message,
			});
		}
	}
}

export default UserEndpoint;
