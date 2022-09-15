import { Recipe } from "../model/Recipe";
import { IRecipeDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
	public createRecipe = async (recipe: Recipe) => {
		const recipeDB: IRecipeDB = {
			id: recipe.getId(),
			title: recipe.getTitle(),
			description: recipe.getDescription(),
			createdAt: recipe.getCreatedAt(),
		};

		await this.getConnection()
			.insert(recipeDB)
			.into("cookenu_recipes");
	};

	public getRecipeById = async (id: string) => {
		const result: IRecipeDB[] = await this.getConnection()
			.select("*")
			.from("cookenu_recipes")
			.where({ id });

		return result[0];
	};
}
