import { Request, Response } from "express";
import { connection } from "../data/connection";
import { getFullAddress } from "../requests/getFullAddress";
import { user } from "../types";

export default async function createUser(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const { name, nickname, email, cep, numero, complemento } =
			req.body;

		if (!name || !nickname || !email || !cep) {
			res.statusCode = 422;
			throw "'name', 'nickname', 'email' e 'cep' são obrigatórios";
		}

		const result = await getFullAddress(cep);
		const id: string = Date.now().toString();
		const newUser: user = {
			id,
			name,
			nickname,
			email,
			cep: result.cep,
			logradouro: result.logradouro,
			numero,
			complemento: result.complemento,
			bairro: result.bairro,
			cidade: result.localidade,
			estado: result.uf,
		};

		await connection("aula_webservices_users").insert(newUser);
		res.status(201).send("Usuário criado!");
	} catch (error: any) {
		if (typeof error === "string") {
			res.send(error);
		} else {
			console.log(error.sqlMessage || error.message);
			res.status(500).send("Ops! Um erro inesperado ocorreu =/");
		}
	}
}
