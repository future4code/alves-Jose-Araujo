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

const getSubscriberById = (subscribers: user[]): string[] => {
	return subscribers?.map((subscriber: user) => subscriber.id);
};

const notifyAllSubs = async (ids: string[]): Promise<void> => {
	try {
		const requests = ids.map((id) =>
			axios.post(`${baseURL}/notifications`, {
				subscriberId: id,
				message: "Há uma nova mensagem em nosso blog.",
			})
		);

		await Promise.all(requests);

		console.log(`Todas notificações enviadas!`);
	} catch (error) {
		console.log(`Erro ao enviar notificação`);
	}
};

const main = async (): Promise<void> => {
	try {
		const allSubs = await getAllSubscribers();
		const subById = getSubscriberById(allSubs);
		notifyAllSubs(subById);
	} catch (error: any) {
		const resp = error.response?.data || error.message;
		console.log(resp);
	}
};

main();

// Exercício 6
// A) É uma promise, que recebe um array de promises como entrada, ela é finalizada quando todas promises são resolvidas ou uma delas é rejeitada.
// B) As mensagens são enviadas de uma vez para todos usuários.
