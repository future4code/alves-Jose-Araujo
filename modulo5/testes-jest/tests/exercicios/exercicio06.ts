export interface User {
	id: string;
	name: string;
	age: number;
}

export const searchAstrodev = (): User[] => {
	const usersList: User[] = [
		{
			id: "1",
			name: "Felipe",
			age: 22,
		},
		{
			id: "2",
			name: "Astrodev",
			age: 33,
		},
		{
			id: "3",
			name: "Bruno",
			age: 42,
		},
		{
			id: "4",
			name: "Henrique",
			age: 25,
		},
	];

	return usersList;
};
