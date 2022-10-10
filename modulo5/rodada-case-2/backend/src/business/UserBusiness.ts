import { UserDatabase } from "../database/UserDatabase";
import { NotFoundError } from "../errors/NotFoundError";
import { ParamsError } from "../errors/ParamsError";
import { User } from "../models/User";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
	constructor(
		private userDatabase: UserDatabase,
		private idGenerator: IdGenerator
	) {}

	public create = async (input: any) => {
		const { firstName, lastName, participation } = input;

		if (!firstName || !lastName || !participation) {
			throw new ParamsError(
				"Todos os campos precisam ser preenchidos"
			);
		}

		if (typeof firstName !== "string") {
			throw new ParamsError(
				"Parâmetro 'firstName' inválido: deve ser uma string"
			);
		}

		if (typeof lastName !== "string") {
			throw new ParamsError(
				"Parâmetro 'lastName' inválido: deve ser uma string"
			);
		}

		if (typeof participation !== "number") {
			throw new ParamsError(
				"Parâmetro 'participation' inválido: deve ser um number"
			);
		}

		const id = this.idGenerator.generate();
		const user = new User(id, firstName, lastName, participation);

		await this.userDatabase.createUser(user);
		const response = {
			message: "Cadastro realizado com sucesso",
		};

		return response;
	};

	public getAllUsers = async () => {
		const result = await this.userDatabase.getAllUsers();

		if (result.length === 0) {
			throw new NotFoundError("Nenhum usuário encontrado!");
		}

		return result;
	};
}
