import { app } from "./app";
import { UserEndpoint } from "./endpoints/User";

const user = new UserEndpoint();

app.post("/signup", user.createUser);
