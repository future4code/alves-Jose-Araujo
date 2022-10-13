export interface IUserDB {
	id: string;
	firstName: string;
	lastName: string;
	participation: number;
}

export class User {
	constructor(
		private id: string,
		private firstName: string,
		private lastName: string,
		private participation: number
	) {}

	public getId = () => {
		return this.id;
	};

	public getFirstName = () => {
		return this.firstName;
	};

	public getLastName = () => {
		return this.lastName;
	};

	public getParticipation = () => {
		return this.participation;
	};

	public setId = (newId: string) => {
		this.id = newId;
	};

	public setFirstName = (newFirstName: string) => {
		this.firstName = newFirstName;
	};

	public setLastName = (newLastName: string) => {
		this.lastName = newLastName;
	};

	public setParticipation = (newParticipation: number) => {
		this.participation = newParticipation;
	};
}
