import app from "./app";
import UserEndpoint from "./endpoints/createUser";

const user = new UserEndpoint();

app.get("/user/profile", user.profile);
app.post("/user/signup", user.createUser);
app.post("/user/login", user.login);
