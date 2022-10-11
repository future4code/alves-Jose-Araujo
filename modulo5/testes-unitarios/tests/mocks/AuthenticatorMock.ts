import { USER_ROLES } from "./../../src/models/User";

export interface ITokenPayload {
	id: string;
	role: USER_ROLES;
}

export class AuthenticatorMock {
	generateToken = (payload: ITokenPayload): string => {
		switch (payload.role) {
			case USER_ROLES.ADMIN:
				return "token-mock-admin";
			default:
				return "token-mock-normal";
		}
	};

	getTokenPayload = (token: string): ITokenPayload | null => {
		switch (token) {
			case "token-mock-admin":
				const adminPayload: ITokenPayload = {
					id: "id-mock",
					role: USER_ROLES.ADMIN,
				};
				return adminPayload;

			case "token-mock-normal":
				const normalPayload: ITokenPayload = {
					id: "id-mock",
					role: USER_ROLES.NORMAL,
				};
				return normalPayload;

			default:
				return null;
		}
	};
}
