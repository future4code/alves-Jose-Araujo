import { app } from "./app";
import { UserEndpoint } from "./endpoints/User";

const user = new UserEndpoint();

app.get("/user/:id", user.getProfileById);
app.get("/user/profile", user.getMyProfile);
app.post("/signup", user.createUser);
app.post("/login", user.login);
