import { Request, Response } from "express";
import { connection } from "../data/connection";
import { recipe } from "../types";

////////////////////////////////////////////////////////////////////////
// Exercício 2 /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//	A)
export const getAllUsers = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const studentName = req.query.studentName;
		const result = await connection("aula49_exercicio").where(
			"name",
			"LIKE",
			`%${studentName}%`
		);

		const recipes = result?.map(toRecipe);
		res.status(200).send(recipes);
	} catch (error: any) {
		console.log(error);
		res.send(error.message || error.sqlMessage);
	}
};

// B)
export const getAllUsersByType = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const typeUser = req.params.typeUser;
		const result = await connection("aula49_exercicio").where(
			"type",
			"LIKE",
			`%${typeUser}%`
		);

		const recipes = result?.map(toRecipe);
		res.status(200).send(recipes);
	} catch (error: any) {
		console.log(error);
		res.send(error.message || error.sqlMessage);
	}
};
////////////////////////////////////////////////////////////////////////
// Exercício 2 /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
export const getAllUsersOrder = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const studentName = req.query.studentName || "";
		let sort: string = req.query.sort as string;
		let order: string = req.query.order as string;

		if (sort !== "name" && sort !== "type") {
			sort = "email";
		}

		if (
			!order ||
			(order.toUpperCase() !== "ASC" &&
				order.toUpperCase() !== "DESC")
		) {
			order = "ASC";
		}

		const result = await connection("aula49_exercicio")
			.where("name", "LIKE", `%${studentName}%`)
			.orderBy(sort, order);

		const recipes: recipe[] = result?.map(toRecipe);

		if (recipes.length === 0) {
			throw new Error("Nenhum usuário foi encontrado!");
		}

		res.status(200).send(recipes);
	} catch (error: any) {
		console.log(error);
		res.send(error.message || "Erro interno do servidor");
	}
};

////////////////////////////////////////////////////////////////////////
// Exercício 3 /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
export const getAllUsersPage = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const studentName = req.query.studentName || "";
		const page: number = Number(req.query.page);

		const size: number = 5; // Número de usuários por página
		const offset: number = size * (page - 1);

		const result = await connection("aula49_exercicio")
			.where("name", "LIKE", `%${studentName}%`)
			.limit(size)
			.offset(offset);

		const recipes = result?.map(toRecipe);
		res.status(200).send(recipes);
	} catch (error: any) {
		console.log(error);
		res.send(error.message || error.sqlMessage);
	}
};

////////////////////////////////////////////////////////////////////////
// Exercício 4 /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
export const getAllUsersFull = async (
	req: Request,
	res: Response
): Promise<void> => {
	try {
		const studentName = req.query.studentName || "";
		let sort: string = req.query.sort as string;
		let order: string = req.query.order as string;
		let page: number = Number(req.query.page);

		if (sort !== "name" && sort !== "type") {
			sort = "name";
		}

		if (
			!order ||
			(order.toUpperCase() !== "ASC" &&
				order.toUpperCase() !== "DESC")
		) {
			order = "DESC";
		}

		if (page < 1 || isNaN(page)) {
			page = 1;
		}

		const size: number = 5; // Número de usuários por página
		const offset: number = size * (page - 1);

		const result = await connection("aula49_exercicio")
			.where("name", "LIKE", `%${studentName}%`)
			.orderBy(sort, order)
			.limit(size)
			.offset(offset);

		const recipes: recipe[] = result?.map(toRecipe);

		if (recipes.length === 0) {
			throw new Error("Nenhum usuário foi encontrado!");
		}

		res.status(200).send(recipes);
	} catch (error: any) {
		console.log(error);
		res.send(error.message || "Erro interno do servidor");
	}
};

const toRecipe = (input: recipe): recipe => {
	return {
		id: input.id,
		name: input.name,
		email: input.email,
		type: input.type,
	};
};
