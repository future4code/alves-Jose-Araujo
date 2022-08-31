export type user = {
	id: string;
	name: string;
	nickname: string;
	email: string;
	cep: string;
	logradouro: string;
	numero: number;
	complemento?: string;
	bairro: string;
	cidade: string;
	estado: string;
};

export type filterAddress = {
	logradouro: string;
	bairro: string;
	cidade: string;
	estado: string;
};
