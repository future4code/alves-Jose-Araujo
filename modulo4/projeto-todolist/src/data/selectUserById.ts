import connection from "../connection";

export default async function getUserById(id: string) {
	const result = await connection("TodoList_Users")
		.select("*")
		.where({ id });

	return result;
}
