# Knex.js

### Exercício 01

- A) Explique como é a resposta que temos quando usamos o `raw`:

  - Retorna dois arrays.

- B) Faça uma função que busque um ator pelo nome:

  - ```typescript
    const getActor = async (name: string) => {
    	const result = await connection.raw(`
          SELECT * FROM Actor WHERE name = "${name}"
        `);
    	return result;
    };
    ```

- C) Faça uma função que receba um `gender` retorne a quantidade de itens na tabela Actor com esse `gender`. Para atrizes, `female` e para atores `male`:
  - ```sql

    ```
