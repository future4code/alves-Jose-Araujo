import { IUserDB, User } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
	public static TABLE_USERS = "Arq_Users";

	public createUser = async (user: User) => {
		const userDB: IUserDB = {
			id: user.getId(),
			name: user.getName(),
			email: user.getEmail(),
			password: user.getPassword(),
			role: user.getRole(),
		};

		await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(
			userDB
		);
	};

	public getUserByEmail = async (email: string) => {
		const userEmail = await BaseDatabase.connection(
			UserDatabase.TABLE_USERS
		)
			.select("*")
			.where({ email });

		return userEmail[0];
	};

	public getUserById = async (id: string) => {
		const userId = await BaseDatabase.connection(
			UserDatabase.TABLE_USERS
		)
			.select("*")
			.where({ id });

		return userId[0];
	};

	public deleteUserById = async (id: string) => {
		await BaseDatabase.connection(UserDatabase.TABLE_USERS)
			.delete()
			.where({ id });
	};
}
