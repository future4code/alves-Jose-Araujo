# Aprofundamento SQL

### Exercício 01

- A) `ALTER TABLE Actor DROP COLUMN salary;`

  - Altera a tabela `Actor` removendo a coluna `salary`.

- B) `ALTER TABLE Actor CHANGE gender sex VARCHAR(6);`

  - Altera a tabela `Actor` mudando o nome da coluna `gender` para `sex` mantendo o `VARCHAR(6)`.

- C) `ALTER TABLE Actor CHANGE gender gender VARCHAR(255);`

  - Altera a tabela `Actor`, mantendo o `gender` porém mudando o `VARCHAR(6)` para `VARCHAR(255)`.

- D) Agora, altere a coluna gender da tabela ACTOR para que ele aceite strings com até 100 caracteres
  - `ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`

### Exercício 02

- A) Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003

  - ```sql
      UPDATE Actor
      SET birth_date = "1921-10-11", name = "Beiçola"
      WHERE id = "003"
    ```

- B) Escreva uma query que atualize o nome da atriz `Juliana Paes` para `JULIANA PAES`. Então, escreva outra query para voltar ao nome anterior.

  - ```sql
      UPDATE Actor
      SET name = "JULIANA PAES"
      WHERE name = "Juliana Paes";
    ```

- C) Escreva uma query que atualize todas as informações do ator com o id `005`

  - ```sql
      UPDATE Actor
      SET
      salary = 2000,
      gender = "male"
      birth_date = "1964-09-33",
      name = "Agostinho Carrara",
      WHERE id = "005";
    ```

- D) Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado.
  - É dito que o ID usado para atualizar não foi encontrado.

### Exercício 03

- A) Escreva uma query que apague a atriz com o nome `Fernanda Montenegro`

  - ```sql
      DELETE FROM Actor WHERE name = "Fernanda Montenegro"
    ```

- B) Escreva uma query que apague todos os atores (do gênero male) com o salário maior do que `R$1.000.000,00`
  - ```sql
      DELETE FROM Actor
      WHERE
      gender = "male" AND
      salary > 1000000
    ```

### Exercício 04

- A) Escreva uma query que pegue o maior salário de todos os atores e atrizes

  - ```sql
      SELECT MAX(salary)
      FROM Actor
    ```

- B) Escreva uma query que pegue o menor salário das atrizes

  - ```sql
      SELECT MIN(salary)
      FROM Actor
      WHERE gender = "female"
    ```

- C) Escreva uma query que pegue a quantidade de atrizes

  - ```sql
      SELECT COUNT(*)
      FROM Actor
      WHERE gender = "female"
    ```

- D) Escreva uma query que pegue a soma de todos os salários
  - ```sql
      SELECT SUM(salary)
      FROM Actor
    ```

### Exercício 05

- A) Releia a última query. Teste-a. Explique o resultado com as suas palavras

  - Em relação genero male ou female ele retorna a quantidade de atores e atrizes que estão na tabela.

- B) Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética

  - ```sql
      SELECT id, name
      FROM Actor
      ORDER BY name DESC;
    ```

- C) Faça uma query que retorne todos os atores ordenados pelo salário

  - ```sql
      SELECT *
      FROM Actor
      ORDER BY salary;
    ```

- D) Faça uma query que retorne os atores com os três maiores salarios

  - ```sql
      SELECT *
      FROM Actor
      ORDER BY salary DESC
      LIMIT 3;
    ```

- E) Faça uma query que retorne a média de salário por gênero

  - ```sql
      SELECT AVG(salary), gender FROM Actor
      GROUP BY gender;
    ```

### Exercício 06

- A) Altere a tabela de `Movie` e adicione um novo parâmetro: `playing_limit_date` que indique a data limite em que o filme será passado no cinema.

  - ```sql
      ALTER TABLE Movie ADD playing_limit_date DATE;
    ```

- B) Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.

  - ```sql
      ALTER TABLE Movie CHANGE rating rating FLOAT;
    ```

- C) Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído

  - ```sql
      UPDATE Movie
      WHERE id = "001"
      SET
      playing_limit_date = "2022-08-31"
    ```

- C) Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.

  - É retornado uma mensagem de sucesso.

  - ```sql
      DELETE FROM Movie WHERE id = "003"
    ```
