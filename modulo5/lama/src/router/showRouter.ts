import { Router } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowController } from "../controller/ShowController";
import { ShowDatabase } from "../database/ShowDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const showRouter = Router();

const showController = new ShowController(
	new ShowBusiness(
		new ShowDatabase(),
		new IdGenerator(),
		new Authenticator()
	)
);

showRouter.get("/allShows", showController.getShows);
showRouter.post("/create", showController.create);