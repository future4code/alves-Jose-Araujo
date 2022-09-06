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
	for (const id of ids) {
		try {
			await axios.post(`${baseURL}/notifications`, {
				subscriberId: id,
				message: "Há uma nova mensagem em nosso blog.",
			});

			console.log(`Notificação enviada para o id: ${id}`);
		} catch (error) {
			console.log(`Erro ao enviar a notificação para o id: ${id}`);
		}
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
