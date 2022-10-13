import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../database/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";

export const userRouter = Router();

const userController = new UserController(
	new UserBusiness(new UserDatabase(), new IdGenerator())
);

userRouter.post("/create", userController.create);
userRouter.get("/getAllUsers", userController.getAllUsers);
