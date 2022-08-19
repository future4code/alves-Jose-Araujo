export type User = {
	id: number;
	name: string;
	cpf: string;
	birth: string;
};

export type Transaction = {
	date: string;
	value: number;
	description: string;
};

export let allUsers: User[] = [
	{
		id: 1,
		name: "Alice Maravilha",
		cpf: "389.803.394-32",
		birth: "31/07/1992",
	},
	{
		id: 2,
		name: "Brenne Buchada",
		cpf: "789.203.494-55",
		birth: "02/02/1990",
	},
	{
		id: 3,
		name: "José Francisco",
		cpf: "883.452.532-35",
		birth: "02/12/2000",
	},
];
