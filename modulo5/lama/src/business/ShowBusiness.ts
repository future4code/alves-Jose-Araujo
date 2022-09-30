import { ShowDatabase } from "../database/ShowDatabase";
import { AuthorizationError } from "../errors/AuthorizationError";
import { ConflictError } from "../errors/ConflictError";
import { ParamsError } from "../errors/ParamsError";
import { ICreateShowInputDTO, Show } from "../models/Show";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {
	constructor(
		private showDatabase: ShowDatabase,
		private idGenerator: IdGenerator,
		private authenticator: Authenticator
	) {}

	public create = async (input: ICreateShowInputDTO) => {
		const { token, band, starts_at } = input;

		if (typeof band !== "string") {
			throw new ParamsError(
				"Parâmetro 'band' inválido: deve ser uma string"
			);
		}

		if (typeof starts_at !== "string") {
			throw new ParamsError(
				"Parâmetro 'starts_at' inválido: deve ser uma data"
			);
		}

		const startsAtFormated = new Date(
			starts_at.split("/").reverse().join("/")
		);
		const dateLimit = new Date("2022/12/05");

		if (startsAtFormated.getTime() < dateLimit.getTime()) {
			throw new ConflictError(
				"A data do show não pode ser anterior ao início do festival (5 de dezembro)"
			);
		}

		const payload = this.authenticator.getTokenPayload(token);
		if (!payload) {
			throw new AuthorizationError("Token inválido!");
		}

		if (payload.role !== USER_ROLES.ADMIN) {
			throw new AuthorizationError("Credenciais inválidas");
		}

		const showExist = await this.showDatabase.getShowByDay(
			startsAtFormated
		);
		if (showExist) {
			throw new AuthorizationError(
				"Já existe um show cadastrado nesta data"
			);
		}

		const id = this.idGenerator.generate();
		const show = new Show(id, band, startsAtFormated);

		await this.showDatabase.createShow(show);
		const response = {
			message: "Show registrado com sucesso!",
		};

		return response;
	};

	public getShows = async () => {
		const shows = await this.showDatabase.getShows();

		const response = {
			shows: shows,
		};

		return response;
	};
}
