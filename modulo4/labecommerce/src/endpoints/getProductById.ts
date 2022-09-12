import { Request, Response } from "express";
import { connection } from "../data/connection";

export default async function getProductById(
	id: string
): Promise<any[]> {
	const result = await connection("labecommerce_products")
		.select("*")
		.where("id", id);

	return result;
}
