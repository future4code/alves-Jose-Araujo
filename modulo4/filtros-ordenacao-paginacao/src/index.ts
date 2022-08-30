import { app } from "./app";
import {
	getAllUsers,
	getAllUsersByType,
	getAllUsersOrder,
	getAllUsersPage,
} from "./endpoints/getAllUsers";

app.get("/recipes", getAllUsersPage);

app.get("/recipes", getAllUsersOrder);

app.get("/recipes", getAllUsers);

app.get("/recipes/:typeUser", getAllUsersByType);
