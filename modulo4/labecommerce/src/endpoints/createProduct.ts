import { Request, Response } from "express";
import { connection } from "../data/connection";
import { product } from "../types";

export default async function createProduct(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const { name, price, image_url } = req.body;

		if (!name || !price || !image_url) {
			res.statusCode = 422;
			throw "'name', 'price' e 'image_url' são obrigatórios";
		}

		const id: string = Date.now().toString();
		const newUser: product = { id, name, price, image_url };

		await connection("labecommerce_products").insert(newUser);
		res.status(201).send("Produto criado!");
	} catch (error: any) {
		if (typeof error === "string") {
			res.send(error);
		} else {
			console.log(error.sqlMessage || error.message);
			res.status(500).send("Ops! Um erro inesperado ocorreu =/");
		}
	}
}
