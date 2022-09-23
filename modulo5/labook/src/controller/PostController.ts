import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostDTO } from "../models/Post";

export class PostController {
	constructor(private postBusiness: PostBusiness) {}

	public createPost = async (req: Request, res: Response) => {
		try {
			console.log(req.body.content);
			const input: ICreatePostDTO = {
				token: req.headers.authorization as string,
				content: req.body.content,
			};

			const result = await this.postBusiness.createPost(input);
			res.status(201).send(result);
		} catch (error: any) {
			res.status(400).send({ message: error.message });
		}
	};
}
