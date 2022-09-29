export interface IShowDB {
	id: string;
	band: string;
	starts_at: Date;
	tickets: number;
}

export class Show {
	constructor(
		private id: string,
		private band: string,
		private starts_at: Date,
		private tickets: number
	) {}

	public getId = () => {
		return this.id;
	};

	public getBand = () => {
		return this.band;
	};

	public getStartsAt = () => {
		return this.starts_at;
	};

	public getTickets = () => {
		return this.tickets;
	};

	public setId = (newId: string) => {
		this.id = newId;
	};

	public setBand = (newBand: string) => {
		this.band = newBand;
	};

	public setStartsAt = (newStartsAt: Date) => {
		this.starts_at = newStartsAt;
	};

	public setTickets = (newTicket: number) => {
		this.tickets = newTicket;
	};
}
