import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
	public static TABLE_USERS = "cubo_data";

	public toUserDBModel = (user: User): IUserDB => {
		const userDB: IUserDB = {
			id: user.getId(),
			firstName: user.getFirstName(),
			lastName: user.getLastName(),
			participation: user.getParticipation(),
		};

		return userDB;
	};

	public createUser = async (user: User): Promise<void> => {
		const userDB = this.toUserDBModel(user);

		await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(
			userDB
		);
	};

	public getAllUsers = async () => {
		const result = await BaseDatabase.connection(
			UserDatabase.TABLE_USERS
		).select("*");

		return result;
	};
}
