import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import {
	Authenticator,
	ITokenPayload,
} from "../services/Authenticator";
import { generateId } from "../services/generateId";
import { HashManager } from "../services/HashManager";
import { USER_ROLES } from "../types";

class UserEndpoint {
	public async createUser(req: Request, res: Response) {
		try {
			const { email, password, role } = req.body;
			const UserDataBase = new UserDatabase();

			if (!password || password.length < 6) {
				res.statusCode = 404;
				throw new Error("'password' inserido não é válido!");
			}

			if (!email || email.indexOf("@") === -1) {
				res.statusCode = 404;
				throw new Error("'email' inserido não é válido!");
			}

			const hashManager = new HashManager();
			const hash = await hashManager.hash(password);
			const id = generateId();

			const newUser = {
				id,
				email,
				password: hash,
				role,
			};

			const payload: ITokenPayload = {
				id,
				role,
			};

			new Authenticator().generateToken(payload);
			await UserDataBase.createUser(newUser);

			res.status(201).send(newUser);
		} catch (error: any) {
			res.status(400).send({
				message: error.message,
			});
		}
	}

	async login(req: Request, res: Response) {
		try {
			const { email, password } = req.body;

			if (!password || password.length < 6) {
				res.statusCode = 404;
				throw new Error("'password' inserido não é válido!");
			}

			if (!email || email.indexOf("@") === -1) {
				res.statusCode = 404;
				throw new Error("'email' inserido não é válido!");
			}

			const UserDataBase = new UserDatabase();
			const userDB = await UserDataBase.getUserByEmail(email);

			if (!userDB) {
				throw new Error("E-mail não é válido!");
			}

			const hashManager = new HashManager();
			const isPasswordCorrect = await hashManager.compare(
				password,
				userDB.password
			);

			if (!isPasswordCorrect) {
				throw new Error("Senha não é válido!");
			}

			const payload: ITokenPayload = {
				id: userDB.id,
				role: userDB.role,
			};

			const token = new Authenticator().generateToken(payload);
			res.status(200).send({ token });
		} catch (error: any) {
			res.status(400).send({
				message: error.message,
			});
		}
	}

	async profile(req: Request, res: Response) {
		try {
			const token = req.headers.authorization as string;
			const payload = new Authenticator().verifyToken(token);

			if (payload.role !== USER_ROLES.NORMAL) {
				throw new Error("Unauthorized");
			}

			const user = await new UserDatabase().getUserById(payload.id);

			res.status(201).send({ user });
		} catch (error: any) {
			res.status(400).send({
				message: error.message,
			});
		}
	}
}

export default UserEndpoint;
