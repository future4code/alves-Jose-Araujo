import { Request, Response } from "express";
import knex from "knex";
import moment from "moment";
import app from "./app";
import connection from "./connection";
import addNewTask from "./data/addNewTask";
import addNewUser from "./data/addNewUser";
import editUser from "./data/editUserById";
import getTaskById from "./data/selectTaskById";
import getUserById from "./data/selectUserById";

app.get("/user/:id", async (req: Request, res: Response) => {
	try {
		const id: string = req.params.id;
		const getUser = await getUserById(id);

		res.status(200).send(getUser);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

app.get("/task/:id", async (req: Request, res: Response) => {
	try {
		const id: string = req.params.id;
		const getTask = await getTaskById(id);

		console.log(getTask);
		res.status(200).send("Tudo certo!");
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

app.post("/user", (req: Request, res: Response) => {
	try {
		const { name, nickname, email } = req.body;

		addNewUser({
			id: Date.now().toString(),
			name,
			nickname,
			email,
		});

		res.status(200).send("Novo usuário inserido!");
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

app.post("/task", async (req: Request, res: Response) => {
	try {
		const { title, description, limit_date, creator_user_id } =
			req.body;

		await addNewTask({
			id: Date.now().toString(),
			title,
			description,
			limit_date,
			creator_user_id,
		});

		res.status(200).send("Nova tarefa inserida!");
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

app.put("/user/edit/:id", (req: Request, res: Response) => {
	try {
		const { name, nickname, email } = req.body;

		editUser({
			name,
			nickname,
			email,
		});

		res.status(200).send("Usuário alterado com sucesso!");
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});
