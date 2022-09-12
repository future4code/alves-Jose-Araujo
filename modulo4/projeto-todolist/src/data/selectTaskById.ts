import connection from "../connection";

export default async function getTaskById(id: string) {
	const result = await connection("TodoList_Users")
		.where("TodoList_Tasks.id", id)
		.join(
			"TodoList_Users",
			"TodoList_Tasks.creator_user_id",
			"TodoList_Users.id"
		)
		.select("*");

	return result;
}
