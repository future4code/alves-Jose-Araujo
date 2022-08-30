# Relações em SQL

### Exercício 1

- A) Explique o que é uma chave estrangeira

  - FK permite referenciar registros de outras tabelas.

- B) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
  - ```sql
      INSERT INTO Rating
      VALUES ("001", "Legal", 8.5, "008");
    ```
- C) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.

  - O erro dado diz que a chave estrangeira não está achando a chave do filme.

- D) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
- ```sql
   ALTER TABLE Movie DROP COLUMN rating;
  ```

- E) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
  - O erro retornado diz que não é possível apagar pois existe uma chave estrangeira referenciado a tabela, para que isso funcione é necessário primeiro apagar a tabela Rating.

### Exercício 2

- A) Explique, com as suas palavras, essa tabela

  - A tebela moviecast faz referência a duas colunas de outras tabelas.

- B) Crie, ao menos, 6 relações nessa tabela

  - ```sql
    INSERT INTO MovieCast(movie_id, actor_id)
    VALUES(
        "003",
        "002"
    )
    ```

- C) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query

  - Por não encontrar a chave estrangeira referenciada, retorna um erro.

- D) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query.
  - O erro retornado diz que não é possível apagar pois existe uma chave estrangeira referenciado a tabela, para que isso funcione é necessário primeiro apagar as tabelas que existe uma referencia direta.

### Exercício 3

- A) Explique, com suas palavras, a query acima. O que é o operador ON
  - Está selecionando tudo e separando o id do filme com o id do rating.
- B) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
  - ```sql
      SELECT Movies.id, name, rate FROM Movies
      INNER JOIN Rating
      ON Movies.id = Rating.movie_id;
    ```
