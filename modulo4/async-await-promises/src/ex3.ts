import axios from "axios";
import { baseURL } from "./baseURL";

type user = {
	id: string;
	name: string;
	email: string;
};

const getAllSubscribers = async (): Promise<user[]> => {
	const response = await axios.get(`${baseURL}/subscribers`);
	return response.data?.map((res: any) => {
		return {
			id: res.id,
			name: res.name,
			email: res.email,
		};
	});
};

const main = async () => {
	try {
		const allSubs = await getAllSubscribers();
		console.log(allSubs);
	} catch (error: any) {
		const resp = error.response?.data || error.message;
		console.log(resp);
	}
};

main();

// Exercício 03:
// A) Nenhum erro é gerado.
// C) Para ter um melhor controle das informações que estão sendo passadas.
