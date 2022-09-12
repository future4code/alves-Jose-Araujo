import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getPurchaseUser(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const userId = req.params.user_id;
		const result = await connection("labecommerce_purchases")
			.select("*")
			.where("user_id", userId);

		res.status(200).send(result);
	} catch (error: any) {
		if (typeof error === "string") {
			res.send(error);
		} else {
			console.log(error.sqlMessage || error.message);
			res.status(500).send("Ops! Um erro inesperado ocorreu =/");
		}
	}
}
