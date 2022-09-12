import connection from "../connection";

export default async function addNewUser(newUser: any) {
	const { id, name, nickname, email } = newUser;

	const result = await connection("TodoList_Users").insert({
		id,
		name,
		nickname,
		email,
	});

	return result;
}
