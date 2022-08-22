type Cliente = {
	cliente: string;
	saldoTotal: number;
	debitos: number[];
};

const listaClientes: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{
		cliente: "Pedro",
		saldoTotal: 10000,
		debitos: [5140, 6100, 100, 2000],
	},
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] },
];

function clientesDebitos(clientes: Cliente[]): Cliente[] {
	clientes.map((cliente) => {
		const clienteDebitos = cliente.debitos.reduce((a, b) => a + b, 0);
		cliente.saldoTotal -= clienteDebitos;
		cliente.debitos = [];
		return;
	});

	const clienteDebito = clientes.filter(
		(cliente) => cliente.saldoTotal < 0
	);

	return clienteDebito;
}

console.log(clientesDebitos(listaClientes));
