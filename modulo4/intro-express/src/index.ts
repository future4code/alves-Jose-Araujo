import express, {
	application,
	Request,
	response,
	Response,
} from "express";
import cors from "cors";
import { users } from "./users";
import { posts } from "./posts";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});

app.get("/", (req: Request, res: Response) => {
	res.send("Olá mundo! esse é o meu primeiro endpoint");
});

app.get("/users", (req: Request, res: Response) => {
	res.send(users);
});

app.get("/posts", (req: Request, res: Response) => {
	res.send(posts);
});

app.get("/posts/:id", (req: Request, res: Response) => {
	const userId = Number(req.params.id);

	const postFind = posts.filter((post) => {
		return post.userId === userId;
	});

	res.send(postFind);
});
