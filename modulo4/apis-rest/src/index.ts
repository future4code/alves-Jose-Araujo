import express, { Request, response, Response } from "express";
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
// B) /allUsers
app.get("/allUsers", (req: Request, res: Response) => {
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

		const filterUser: User[] = users?.filter((user) =>
			user.type.includes(userType)
		);

		res.status(200).send(filterUser);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

// Exercício 3
// A) Query Params
app.get("/users", (req: Request, res: Response) => {
	const userName: string = req.query.name as string;

	try {
		const filterUserByName: User[] = users?.filter((user) =>
			user.name.includes(userName)
		);

		// B) Resposta:
		if (!filterUserByName.length) {
			res.statusCode = 401;
			throw new Error("O valor do 'name' não é válido!");
		}

		res.status(200).send(filterUserByName);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

// Exercício 4
// A) Além do metodo nada mudou, continua funcionando.
// B) Por convenção, o 'POST' é utilizado para atualização de um dado já existe enquanto o 'PUT' é usado para inserir um novo dado.
app.put("/users/addUser", (req: Request, res: Response) => {
	const { name, email, type, age }: User = req.body;

	try {
		if (!name || !email || !type || !age) {
			res.statusCode = 404;
			throw new Error("Verfique os campos e tente novamente!");
		}

		const newUser: User = {
			id: Date.now(),
			name: name,
			email: email,
			type: type,
			age: age,
		};

		users.push(newUser);
		res.send(newUser);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});
