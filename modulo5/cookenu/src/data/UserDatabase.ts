import { User } from "../model/User";
import { IUserDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
	public createUser = async (user: User) => {
		const userDB: IUserDB = {
			id: user.getId(),
			name: user.getName(),
			email: user.getEmail(),
			password: user.getPassword(),
		};

		await this.getConnection().insert(userDB).into("cookenu_users");
	};

	public getUserByEmail = async (email: string) => {
		const result: IUserDB[] = await this.getConnection()
			.select("*")
			.from("cookenu_users")
			.where({ email });

		return result[0];
	};
}
