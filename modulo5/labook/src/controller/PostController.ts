import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { ICreatePostDTO, IDeletePostDTO } from "../models/Post";

export class PostController {
	constructor(private postBusiness: PostBusiness) {}

	public createPost = async (req: Request, res: Response) => {
		try {
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

	public getAllPosts = async (req: Request, res: Response) => {
		try {
			const token: any = req.headers.authorization;

			const result = await this.postBusiness.getAllPosts(token);
			res.status(201).send(result);
		} catch (error: any) {
			res.status(400).send({ message: error.message });
		}
	};

	public deletePost = async (req: Request, res: Response) => {
		try {
			const input: IDeletePostDTO = {
				token: req.headers.authorization as string,
				id: req.params.id,
			};

			const result = await this.postBusiness.deletePost(input);
			res.status(201).send(result);
		} catch (error: any) {
			res.status(400).send({ message: error.message });
		}
	};

	public like = async (req: Request, res: Response) => {
		try {
			const input: any = {
				token: req.headers.authorization as string,
				post_id: req.params.id,
			};

			const result = await this.postBusiness.like(input);
			res.status(201).send(result);
		} catch (error: any) {
			res.status(400).send({ message: error.message });
		}
	};

	public dislike = async (req: Request, res: Response) => {
		try {
			const input: any = {
				token: req.headers.authorization as string,
				post_id: req.params.id,
			};

			const result = await this.postBusiness.dislike(input);
			res.status(201).send(result);
		} catch (error: any) {
			res.status(400).send({ message: error.message });
		}
	};
}
