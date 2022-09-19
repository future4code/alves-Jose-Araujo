import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
	public signup = async (req: Request, res: Response) => {
		try {
			const input: any = {
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			};

			const userBusiness = new UserBusiness();
			const result = await userBusiness.signup(input);

			res.status(200).send(result);
		} catch (error: any) {
			res
				.status(error.statusCode || 500)
				.send({ message: error.message });
		}
	};

	public login = async (req: Request, res: Response) => {
		try {
			const input: any = {
				email: req.body.email,
				password: req.body.password,
			};

			const userBusiness = new UserBusiness();
			const result = await userBusiness.login(input);

			res.status(200).send(result);
		} catch (error: any) {
			res
				.status(error.statusCode || 500)
				.send({ message: error.message });
		}
	};

	public delete = async (req: Request, res: Response) => {
		try {
			const token: string = req.headers.authorization;
			const id: string = req.params.id;

			const userBusiness = new UserBusiness();
			const result = await userBusiness.delete(token, id);

			res.status(200).send(result);
		} catch (error: any) {
			res
				.status(error.statusCode || 500)
				.send({ message: error.message });
		}
	};
}
