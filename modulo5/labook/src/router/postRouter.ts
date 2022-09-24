import { Router } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../database/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const postRouter = Router();

const postController = new PostController(
	new PostBusiness(
		new PostDatabase(),
		new IdGenerator(),
		new Authenticator()
	)
);

postRouter.get("/all", postController.getAllPosts);

postRouter.post("/create", postController.createPost);
postRouter.post("/like/:id", postController.like);
postRouter.post("/dislike/:id", postController.dislike);

postRouter.delete("/delete/:id", postController.deletePost);
