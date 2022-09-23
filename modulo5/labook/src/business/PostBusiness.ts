import { PostDatabase } from "../database/PostDatabase";
import { ICreatePostDTO, Post } from "../models/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
	constructor(
		private postDatabase: PostDatabase,
		private idGenerator: IdGenerator,
		private authenticator: Authenticator
	) {}

	public createPost = async (input: ICreatePostDTO) => {
		const token = input.token;
		const content = input.content;

		if (!token) {
			throw new Error("É preciso preencher o campo 'token'");
		}

		if (content.length < 1 || typeof content !== "string") {
			throw new Error("Parâmetro 'content' inválido!");
		}

		const payload = this.authenticator.getTokenPayload(token);
		if (!payload) {
			throw new Error("Token inválido ou faltando");
		}

		const userDB = await this.postDatabase.getUserById(payload.id);
		if (!userDB.id.length) {
			throw new Error("O ID não foi encontrado!");
		}

		const id = this.idGenerator.generate();

		const post = new Post(id, content, userDB.id);
		await this.postDatabase.createPost(post);

		const result = {
			message: "Post criado com sucesso!",
		};

		return result;
	};
}
