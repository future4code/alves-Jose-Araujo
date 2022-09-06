import axios from "axios";
import { baseURL } from "./baseURL";

async function getAllSubscribers(): Promise<any[]> {
	const response = await axios.get(`${baseURL}/subscribers`);
	return response.data;
}

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

// Exercício 01:
// A) Irei utilizar o endpoint GET /subscribers
// B) Promise<any[]>
