import { User } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
	public async createUser(newUser: User) {
		await this.getConnection().insert(newUser).into("User");
	}

	public async getUserByEmail(email: string) {
		const result = await this.getConnection()
			.select("*")
			.from("User")
			.where({ email: email });

		return result;
	}

	public async getUserByPassword(password: string) {
		const result = await this.getConnection()
			.select("*")
			.from("User")
			.where({ password: password });

		return result;
	}

	public async getUserById(id: string) {
		const result = await this.getConnection()
			.select("*")
			.from("User")
			.where({ id });

		return result[0];
	}
}
