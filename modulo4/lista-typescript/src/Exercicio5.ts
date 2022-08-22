type Usuario = {
	name: string;
	email: string;
	role: string;
};

const arrayUsuarios: Usuario[] = [
	{ name: "Rogério", email: "roger@email.com", role: "user" },
	{ name: "Ademir", email: "ademir@email.com", role: "admin" },
	{ name: "Aline", email: "aline@email.com", role: "user" },
	{ name: "Jéssica", email: "jessica@email.com", role: "user" },
	{ name: "Adilson", email: "adilson@email.com", role: "user" },
	{ name: "Carina", email: "carina@email.com", role: "admin" },
];

function emailsAdemir(arrayUsuarios: Usuario[]) {
	return arrayUsuarios
		.filter((colaborador) => colaborador.role === "admin")
		.map((admin) => admin.email);
}

console.table(emailsAdemir(arrayUsuarios));
