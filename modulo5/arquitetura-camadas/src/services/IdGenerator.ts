import { v4 } from "uuid";

export class IdGenerator {
	public createId = (): string => {
		return v4();
	};
}
