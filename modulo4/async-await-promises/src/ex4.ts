import axios from "axios";
import { baseURL } from "./baseURL";

type news = {
	title: string;
	content: string;
	date: number;
};

const newNews: news = {
	title: "Uma nova noticia do tim maia!",
	content: "Tim maia lança no álbum de músicas em espanhol.",
	date: Date.now(),
};

const createNews = (news: news): Promise<news> => {
	return axios.put(`${baseURL}/news`, news);
};

const main = async () => {
	try {
		createNews(newNews);
	} catch (error: any) {
		const resp = error.response?.data || error.message;
		console.log(resp);
	}
};

main();

// Exercício 4
// A) Promise<news>, criei um type para a função.
