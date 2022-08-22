import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});

type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

export let todos: Todo[] = [
	{
		userId: 1,
		id: 1,
		title: "delectus aut autem",
		completed: false,
	},
	{
		userId: 1,
		id: 2,
		title: "quis ut nam facilis et officia qui",
		completed: false,
	},
	{
		userId: 2,
		id: 3,
		title: "fugiat veniam minus",
		completed: false,
	},
	{
		userId: 2,
		id: 4,
		title: "et porro tempora",
		completed: true,
	},
	{
		userId: 3,
		id: 5,
		title:
			"laboriosam mollitia et enim quasi adipisci quia provident illum",
		completed: false,
	},
];

app.get("/ping", (req: Request, res: Response) => {
	res.send("Pong! 🏓");
});

app.get("/todos", (req: Request, res: Response) => {
	const todoStatus = req.query.todoStatus;

	if (todoStatus === "completed") {
		res.send(todos.filter((todo) => todo.completed === true));
	} else if (todoStatus === "incompleted") {
		res.send(todos.filter((todo) => todo.completed === false));
	} else {
		res.send(todos);
	}
});

app.post("/todos/:idTodo", (req: Request, res: Response) => {
	const idTodo = +req.params.idTodo;
	const findTodo = todos.find((todo) => todo.id === idTodo);

	if (findTodo) {
		findTodo.completed = !findTodo.completed;
		res.send(findTodo);
	} else {
		console.log("Tarefa não encontrada!");
	}
});

app.delete("/todos/:idTodo", (req: Request, res: Response) => {
	const idTodo = +req.params.idTodo;

	const deleteTodo = todos.filter((todo) => {
		return todo.id !== idTodo;
	});

	todos = deleteTodo;
	res.end();
});

app.get("/todos/:search", (req: Request, res: Response) => {
	const search = +req.params.search;

	const allTodos = todos.map((todo) => {
		return todo;
	});

	const filterTodos = allTodos.filter((todo) => {
		return todo.userId === search;
	});

	res.send(filterTodos);
});
