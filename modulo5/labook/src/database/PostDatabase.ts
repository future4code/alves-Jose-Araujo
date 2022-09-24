import { ILikeDB, IPostDB, Post } from "../models/Post";
import { IUserDB } from "../models/User";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
	public static TABLE_POSTS = "Labook_Posts";
	public static TABLE_USERS = "Labook_Users";
	public static TABLE_LIKES = "Labook_Likes";

	public postDBModel = (post: Post) => {
		const postDB: IPostDB = {
			id: post.getId(),
			content: post.getContent(),
			user_id: post.getUserId(),
		};

		return postDB;
	};

	public createPost = async (post: Post) => {
		await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(
			this.postDBModel(post)
		);
	};

	public getUserById = async (id: string) => {
		const result: IUserDB[] = await BaseDatabase.connection(
			PostDatabase.TABLE_USERS
		)
			.select("*")
			.where({ id });

		return result[0];
	};

	public getAllPosts = async () => {
		const result: IPostDB[] = await BaseDatabase.connection(
			PostDatabase.TABLE_POSTS
		).select("*");

		return result;
	};

	public getPostById = async (id: string) => {
		const result: IPostDB[] = await BaseDatabase.connection(
			PostDatabase.TABLE_POSTS
		)
			.select("*")
			.where({ id });

		return result[0];
	};

	public deletePostById = async (id: string) => {
		await BaseDatabase.connection(PostDatabase.TABLE_POSTS)
			.delete()
			.where({ id });
	};

	public like = async (like: ILikeDB) => {
		await BaseDatabase.connection(PostDatabase.TABLE_LIKES).insert(
			like
		);
	};

	public dislike = async (user_id: string, post_id: string) => {
		await BaseDatabase.connection(PostDatabase.TABLE_LIKES)
			.delete()
			.where({ post_id })
			.andWhere({ user_id });
	};

	public getLikePost = async (user_id: string, post_id: string) => {
		const postLike: ILikeDB[] = await BaseDatabase.connection(
			PostDatabase.TABLE_LIKES
		)
			.select("*")
			.where({ post_id })
			.andWhere({ user_id });

		return postLike;
	};
}
