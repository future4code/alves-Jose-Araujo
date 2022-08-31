import { Request, Response } from "express";
import { BASE_URL, connection } from "../data/connection";
import { getFullAddress } from "../requests/getFullAddress";
import { filterAddress } from "../types";

export default async function getFilterAddress(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const cep: string = req.params.cep as string;
		const result = await getFullAddress(cep);

		const recipe: filterAddress = {
			logradouro: result.logradouro,
			bairro: result.bairro,
			cidade: result.localidade,
			estado: result.uf,
		};

		res.status(201).send(recipe);
	} catch (error: any) {
		if (typeof error === "string") {
			res.send(error);
		} else {
			console.log(error.sqlMessage || error.message);
			res.status(500).send("Ops! Um erro inesperado ocorreu =/");
		}
	}
}
