import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../errors/BaseError";

export class UserController {
	constructor(private userBusiness: UserBusiness) {}

	public create = async (req: Request, res: Response) => {
		try {
			const input = {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				participation: req.body.participation,
			};

			const response = await this.userBusiness.create(input);
			res.status(201).send(response);
		} catch (error) {
			console.log(error);
			if (error instanceof BaseError) {
				return res
					.status(error.statusCode)
					.send({ message: error.message });
			}
			res
				.status(500)
				.send({ message: "Erro inesperado ao cadastrar usuário" });
		}
	};

	public getAllUsers = async (req: Request, res: Response) => {
		try {
			const response = await this.userBusiness.getAllUsers();
			res.status(201).send(response);
		} catch (error) {
			console.log(error);
			if (error instanceof BaseError) {
				return res
					.status(error.statusCode)
					.send({ message: error.message });
			}
			res
				.status(500)
				.send({ message: "Erro inesperado ao cadastrar usuário" });
		}
	};
}
