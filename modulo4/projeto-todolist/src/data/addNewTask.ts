import connection from "../connection";

export default async function addNewTask(newTask: any) {
	const { id, title, description, limit_date, creator_user_id } =
		newTask;

	const result = await connection("TodoList_Tasks").insert({
		id,
		title,
		description,
		limit_date: limit_date.split("/").reverse().join("-"),
		creator_user_id,
	});

	return result;
}
