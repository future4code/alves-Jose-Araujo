import express, { Express, Request, Response } from "express";
import cors from "cors";
import { allUsers, User } from "./mocks/data";

const app: Express = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
	console.log(`Server is running in http://localhost:3003`);
});

app.get("/users", (req: Request, res: Response) => {
	try {
		res.status(200).send(allUsers);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

app.get("/users/:cpf", (req: Request, res: Response) => {
	const cpfUser = req.params.cpf;
	console.log(cpfUser);

	try {
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

app.post("/users/addUser", (req: Request, res: Response) => {
	const { name, cpf, birth } = req.body;

	try {
		const ageUser: number =
			new Date().getFullYear() - birth.split("/")[2];
		const consultCPF = allUsers?.find((user) => user.cpf === cpf);

		if (consultCPF) {
			res.statusCode = 401;
			throw new Error("Já existe um usuário com esse CPF!");
		}

		if (ageUser < 18) {
			res.statusCode = 401;
			throw new Error("A idade minima é 18 anos!");
		}

		const newUser: User = {
			id: Date.now(),
			name: name,
			cpf: cpf,
			birth: birth,
		};

		allUsers?.push(newUser);
		res.status(200).send(newUser);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});
