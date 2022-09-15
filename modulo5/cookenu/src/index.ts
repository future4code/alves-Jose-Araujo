import { app } from "./app";
import { RecipeEndpoint } from "./endpoints/Recipe";
import { UserEndpoint } from "./endpoints/User";

const user = new UserEndpoint();
const recipe = new RecipeEndpoint();

app.get("/user/:id", user.getProfileById);
app.get("/user/profile", user.getMyProfile);
app.post("/signup", user.createUser);
app.post("/login", user.login);

app.get("/recipe/:id", recipe.getRecipe);
app.post("/recipe", recipe.createRecipe);
