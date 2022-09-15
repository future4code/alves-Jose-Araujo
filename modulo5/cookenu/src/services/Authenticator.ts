import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

class Authenticator {
	generateToken = (payload: string) => {
		const token = jwt.sign(
			{
				payload,
			},
			process.env.JWT_KEY as string,
			{
				expiresIn: process.env.EXPIRES_IN,
			}
		);
		return token;
	};

	getData(token: string) {
		const payload = jwt.verify(
			token,
			process.env.JWT_KEY as string
		) as any;

		return payload;
	}
}
