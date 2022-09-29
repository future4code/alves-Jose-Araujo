import { userInfo } from "os";
import { IShowDB, Show } from "../models/Show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
	public static TABLE_SHOWS = "Lama_Shows";

	public toShowDBModel = (show: Show): IShowDB => {
		const showDB: IShowDB = {
			id: show.getId(),
			band: show.getBand(),
			starts_at: show.getStartsAt(),
			tickets: show.getTickets(),
		};

		return showDB;
	};
}
