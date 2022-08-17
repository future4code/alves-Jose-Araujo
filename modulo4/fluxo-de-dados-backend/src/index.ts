import express, { Request, response, Response } from "express";
import cors from "cors";
import { products, Product } from "./data";
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
	console.log("Server is running in http://localhost:3003");
});

app.get("/test", (req: Request, res: Response) => {
	res.send({ message: "Tudo certo com este endpoint." });
});

app.get("/createProduct", (req: Request, res: Response) => {
	const { name, price } = req.body;

	try {
		if (!name && !price) {
			response.statusCode = 401;
			throw new Error(
				"Os valores 'name' e 'price' do body estão vázios!"
			);
		}

		if (name !== String(name)) {
			response.statusCode = 401;
			throw new Error("O valor 'name' do body precisa ser um texto!");
		}

		if (price !== +price) {
			response.statusCode = 401;
			throw new Error(
				"O valor 'price' do body precisa ser um número!"
			);
		}

		if (price < 0) {
			response.statusCode = 401;
			throw new Error(
				"O valor 'price' do body precisa ser um número positivo!"
			);
		}

		const novaPlaylist: Product = {
			id: Date.now().toString(),
			name,
			price,
		};

		products.push(novaPlaylist);
		res.send(products);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

app.get("/products", (req: Request, res: Response) => {
	try {
		res.send(products);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

app.put("/editProduct/:productId", (req: Request, res: Response) => {
	const price = req.body.price;
	const productId = req.params.productId;

	try {
		if (!price) {
			response.statusCode = 401;
			throw new Error("O valor 'price' do body está vázio!");
		}

		if (price !== +price) {
			response.statusCode = 401;
			throw new Error(
				"O valor 'price' do body precisa ser um número!"
			);
		}

		if (price < 0) {
			response.statusCode = 401;
			throw new Error(
				"O valor 'price' do body precisa ser um número positivo!"
			);
		}

		const filterProducts = products.filter((product) => {
			return product.id === productId;
		});

		if (!filterProducts.length) {
			response.statusCode = 404;
			throw new Error("Ops! Produto não encontrado.");
		}

		const changeProduct = filterProducts.map((product) => {
			product.price = price;
			return products;
		});

		res.status(200).send(changeProduct);
	} catch (error: any) {
		res
			.status(res.statusCode || 500)
			.send({ message: error.message });
	}
});

app.delete(
	"/deleteProduct/:productId",
	(req: Request, res: Response) => {
		const productId = req.params.productId;

		try {
			const filterProducts = products.findIndex((product) => {
				return product.id === productId;
			});

			if (filterProducts < 0) {
				response.statusCode = 404;
				throw new Error("Ops! Produto não encontrado.");
			}

			products.splice(filterProducts, 1);
			res.status(200).send(products);
		} catch (error: any) {
			res
				.status(res.statusCode || 500)
				.send({ message: error.message });
		}
	}
);
