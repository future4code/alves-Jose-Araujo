import app from "./app";
import createProduct from "./endpoints/createProduct";
import createPurchase from "./endpoints/createPurchase";
import createUser from "./endpoints/createUser";
import getAllProducts from "./endpoints/getAllProducts";
import getAllUsers from "./endpoints/getAllUsers";
import getPurchaseUser from "./endpoints/getPurchaseUser";

app.get("/users", getAllUsers);

app.get("/products", getAllProducts);

app.get("/users/:user_id/purchases", getPurchaseUser);

app.post("/users", createUser);

app.post("/products", createProduct);

app.post("/purchases", createPurchase);
