import { IShowDB, Show } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
	public static TABLE_SHOWS = "Lama_Shows";

	public toShowDBModel = (show: Show): IShowDB => {
		const showDB: IShowDB = {
			id: show.getId(),
			band: show.getBand(),
			starts_at: show.getStartsAt(),
		};

		return showDB;
	};

	public createShow = async (show: Show): Promise<void> => {
		await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS).insert(
			this.toShowDBModel(show)
		);
	};

	public getShowByDay = async (
		starts_at: any
	): Promise<IShowDB | undefined> => {
		const result: IShowDB[] = await BaseDatabase.connection(
			ShowDatabase.TABLE_SHOWS
		)
			.select()
			.where({ starts_at });

		return result[0];
	};

	public getShows = async (): Promise<IShowDB[] | undefined> => {
		const result: IShowDB[] = await BaseDatabase.connection(
			ShowDatabase.TABLE_SHOWS
		).select("*");

		return result;
	};
}
