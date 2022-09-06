import axios from "axios";
import { baseURL } from "./baseURL";

const getAllSubscribers = async (): Promise<any[]> => {
	const response = await axios.get(`${baseURL}/subscribers`);
	return response.data;
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

// Exercício 02:
/* A) A palavra reservada "function" é removida para a entra de uma const que recebe o nome da
função seguida do async com os parenteses e o tipo do retorno da função. Sendo assim a arrow function mais curta. */
