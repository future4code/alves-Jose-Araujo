import express, { Request, Response } from "express";
import cors from "cors";
import { users, User, UserType } from "./mocks/data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});

// Exercício 1
// A) Deve ser usado o metodo GET;
// B) /users
app.get("/users", (req: Request, res: Response) => {
	try {
		res.send(users);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

// Exercício 2
// A) Passei por path params
// B) Criação de um ENUM
app.get("/users/:type", (req: Request, res: Response) => {
	const userType: string = req.params.type.toUpperCase();

	try {
		if (userType !== UserType.ADMIN && userType !== UserType.NORMAL) {
			res.statusCode = 401;
			throw new Error("O valor do 'type' não é válido!");
		}

		const filterUser: User[] = users?.filter((user) => {
			return user.type === userType;
		});

		res.status(200).send(filterUser);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});
