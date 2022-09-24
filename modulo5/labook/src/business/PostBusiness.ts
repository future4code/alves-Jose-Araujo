import { PostDatabase } from "../database/PostDatabase";
import { ICreatePostDTO, ILikeDB, Post } from "../models/Post";
import { USER_ROLES } from "../models/User";
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
		if (!userDB) {
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

	public getAllPosts = async (token: string) => {
		if (!token) {
			throw new Error(
				"Você não está autorizado, é necessário fazer o login!"
			);
		}

		const payload = this.authenticator.getTokenPayload(token);
		if (!payload) {
			throw new Error("O seu token é inválido!");
		}

		const posts = await this.postDatabase.getAllPosts();
		if (!posts.length) {
			throw new Error("Nenhum post foi encontrado!");
		}

		const result = { posts };
		return result;
	};

	public deletePost = async (input: any) => {
		const token = input.token;
		const id = input.id;

		if (!token || !id) {
			throw new Error("Você não está autorizado!");
		}

		const payload = this.authenticator.getTokenPayload(token);
		if (!payload) {
			throw new Error("O seu token não é válido!");
		}

		const postDB = await this.postDatabase.getPostById(id);
		if (!postDB) {
			throw new Error("O ID do post inserido, não foi encontrado!");
		}

		if (
			payload.role === USER_ROLES.NORMAL &&
			payload.id !== postDB.user_id
		) {
			throw new Error(
				"Você não tem autorização para deletar este post!"
			);
		}

		await this.postDatabase.deletePostById(id);

		const result = {
			message: `Post com o ID: '${id}' deletado com sucesso!`,
		};

		return result;
	};

	public like = async (input: any) => {
		const { token, post_id } = input;

		if (!token) {
			throw new Error("Não autorizado!");
		}

		const payload = this.authenticator.getTokenPayload(token);
		if (!payload) {
			throw new Error("Token inválido!");
		}

		const postExist = await this.postDatabase.getPostById(post_id);
		if (!postExist) {
			throw new Error("O ID do post inserido não foi encontrado!");
		}

		const likeExist = await this.postDatabase.getLikePost(
			payload.id,
			post_id
		);
		if (likeExist?.length) {
			throw new Error("Você já deu like nessa postagem!");
		}

		const id = this.idGenerator.generate();
		const like: ILikeDB = {
			id,
			post_id,
			user_id: payload.id,
		};

		await this.postDatabase.like(like);
		const result = {
			message: "Você curtiu a postagem!",
		};

		return result;
	};
}
