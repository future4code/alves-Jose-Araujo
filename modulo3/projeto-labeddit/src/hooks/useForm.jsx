import { useState } from "react";

const useForm = (initialState) => {
	// Criação do state do formulário, recebendo o initialState da função.
	const [form, setForm] = useState(initialState);
	// Função responsável por pegar os inputs.
	const handleInputChange = (e) => {
		console.log(e);
		// Aqui é feito a destructing por pegar o value e name do event.target.
		const { value, name } = e.target;
		// Aqui é setado no estado com spread operator.
		setForm({ ...form, [name]: value });
	};

	const clear = () => {
		setForm(initialState);
	};

	return [form, handleInputChange, clear];
};

export default useForm;
