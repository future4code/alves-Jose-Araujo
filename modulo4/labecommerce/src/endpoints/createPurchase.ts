import { Request, Response } from "express";
import { connection } from "../data/connection";
import getProductById from "./getProductById";

export default async function createPurchase(
	req: Request,
	res: Response
): Promise<void> {
	try {
		const { user_id, product_id, quantity } = req.body;

		if (!user_id || !product_id || !quantity) {
			res.statusCode = 422;
			throw "'user_id', 'product_id' e 'quantity' são obrigatórios";
		}

		const [productId] = await getProductById(product_id);
		const totalPrice: number = productId.price * quantity;
		const id: string = Date.now().toString();
		const newPurchase = {
			id,
			user_id,
			product_id,
			quantity,
			total_price: totalPrice,
		};

		await connection("labecommerce_purchases").insert(newPurchase);
		res.status(201).send(`Compra realizada! total: R$ ${totalPrice}`);
	} catch (error: any) {
		if (typeof error === "string") {
			res.send(error);
		} else {
			console.log(error.sqlMessage || error.message);
			res.status(500).send("Ops! Um erro inesperado ocorreu =/");
		}
	}
}
