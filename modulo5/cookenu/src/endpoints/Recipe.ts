import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class RecipeEndpoint {
	public createRecipe = async (req: Request, res: Response) => {
		try {
			const token = req.headers.authorization;
			const { title, description } = req.body;

			if (!title || !description) {
				throw new Error("Você precisa preencher todos os campos!");
			}

			if (!token) {
				throw new Error("Você precisa preencher o token");
			}

			const authenticator = new Authenticator();
			const payload = authenticator.getData(token);

			if (!payload) {
				throw new Error("Autorização insuficiente!");
			}

			const generateId = new GenerateId();
			const id = generateId.createId();

			const createdAt = new Date().toISOString().slice(0, 10);
			const recipe = new Recipe(id, title, description, createdAt);
			await new RecipeDatabase().createRecipe(recipe);

			res
				.status(200)
				.send({ message: "Receita criada com sucesso!" });
		} catch (error: any) {
			res
				.status(error.statusCode || 500)
				.send({ message: error.message });
		}
	};
}
