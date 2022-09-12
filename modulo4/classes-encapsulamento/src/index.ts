///////////////////////////////////////////////////
/// Exercício 1 ///////////////////////////////////
///////////////////////////////////////////////////
// type Transaction = {
// 	description: string;
// 	value: number;
// 	date: string;
// };

class UserAccount {
	private cpf: string;
	private name: string;
	private age: number;
	private balance: number = 0;
	private transactions: Transaction[] = [];

	constructor(cpf: string, name: string, age: number) {
		console.log("Chamando o construtor da classe UserAccount");
		this.cpf = cpf;
		this.name = name;
		this.age = age;
	}

	public getTransactions(): Transaction[] {
		return this.transactions;
	}

	public setTransactions(newTransaction: Transaction): void {
		this.transactions.push(newTransaction);
	}
}

const newUserAccount: UserAccount = new UserAccount(
	"127.0.0.1",
	"Fernando",
	32
);

const newUserAccount2: UserAccount = new UserAccount(
	"127.0.0.1",
	"Carlos",
	34
);

// A) Responsável por criar o objeto em memória, ou seja, instanciar a classe que foi definida.
// B) A mensagem: "Chamando o construtor da classe UserAccount" é impressa apenas uma vez.
// C) Fazendo uso dos getters.

///////////////////////////////////////////////////
/// Exercício 2 ///////////////////////////////////
///////////////////////////////////////////////////
class Transaction {
	private description: string;
	private value: number;
	private date: string;

	constructor(description: string, value: number, date: string) {
		this.description = description;
		this.value = value;
		this.date = date;
	}

	public getDescription(): string {
		return this.description;
	}

	public getValue(): number {
		return this.value;
	}

	public getDate(): string {
		return this.date;
	}

	public setDescription(description: string) {
		this.description = description;
	}

	public setValue(value: number) {
		this.value = value;
	}

	public setDate(date: string) {
		this.date = date;
	}
}

const newTransaction: Transaction = new Transaction(
	"Boleto",
	225,
	"31/07/2022"
);

newUserAccount.setTransactions(newTransaction);

console.table(newUserAccount);
console.table(newUserAccount.getTransactions());

///////////////////////////////////////////////////
/// Exercício 3 ///////////////////////////////////
///////////////////////////////////////////////////
class Bank {
	private accounts: UserAccount[];

	constructor(accounts: UserAccount[]) {
		this.accounts = accounts;
	}

	public getAccounts(): UserAccount[] {
		return this.accounts;
	}
}

const newBankAccount: Bank = new Bank([newUserAccount2]);

console.log(newBankAccount.getAccounts());
