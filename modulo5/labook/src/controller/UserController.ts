import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
	constructor(private userBusiness: UserBusiness) {}

	public signup = async (req: Request, res: Response) => {
		try {
			const input = {
				name: req.body.name,
				email: req.body.email,
				password: req.body.password,
			};

			const result = await this.userBusiness.signup(input);

			res.status(201).send(result);
		} catch (error: any) {
			res.status(400).send({ message: error.message });
		}
	};
}
