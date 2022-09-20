import { Request, Response } from "express";
import moment from "moment";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import { GenerateId } from "../services/GenerateId";

export class RecipeEndpoint {
	public createRecipe = async (req: Request, res: Response) => {
		try {
			const token = req.headers.authorization;
			const { title, description } = req.body;

			if (!token) {
				throw new Error("Você precisa preencher o token");
			}

			if (!title || !description) {
				throw new Error("Você precisa preencher todos os campos!");
			}

			const authenticator = new Authenticator();
			const payload = authenticator.getData(token);

			if (!payload) {
				throw new Error("Autorização insuficiente!");
			}

			const generateId = new GenerateId();
			const id = generateId.createId();

			const createdAt = new Date();
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

	public getRecipe = async (req: Request, res: Response) => {
		try {
			const idRecipe = req.params.id;
			const token = req.headers.authorization;

			if (!idRecipe || !token) {
				throw new Error("Você precisa preencher todos os campos");
			}

			const authenticator = new Authenticator();
			const payload = authenticator.getData(token);

			if (!payload) {
				throw new Error("Autorização insuficiente!");
			}

			const recipeData = new RecipeDatabase();
			const getRecipe = await recipeData.getRecipeById(idRecipe);

			res.status(200).send({
				id: getRecipe.id,
				title: getRecipe.title,
				description: getRecipe.description,
				createdAt: moment
					.utc(getRecipe.createdAt)
					.format("DD/MM/YYYY"),
			});
		} catch (error: any) {
			res
				.status(error.statusCode || 500)
				.send({ message: error.message });
		}
	};
}
