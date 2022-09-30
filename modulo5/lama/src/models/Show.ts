export interface IShowDB {
	id: string;
	band: string;
	starts_at: Date;
}

export class Show {
	constructor(
		private id: string,
		private band: string,
		private starts_at: Date
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

	public setId = (newId: string) => {
		this.id = newId;
	};

	public setBand = (newBand: string) => {
		this.band = newBand;
	};

	public setStartsAt = (newStartsAt: Date) => {
		this.starts_at = newStartsAt;
	};
}

export interface ICreateShowInputDTO {
	token: string;
	band: string;
	starts_at: string;
}
