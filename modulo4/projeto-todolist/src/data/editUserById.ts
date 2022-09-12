import connection from "../connection";

export default async function editUser(editUser: any) {
	const { name, nickname, email } = editUser;

	const result = await connection("TodoList_Users").update({
		name,
		nickname,
		email,
	});

	return result;
}
