### Exercício 01:

- A) Explique os demais comandos que estão nessa query
  - Varchar: para quando queremos usar strings e definimos o tamanho dentro dos parênteses.
  - Float: para representar números não inteiros.
  - Date: para representar um data.
- B) Utilize os comandos: `SHOW DATABASES` e `SHOW TABLES`. Explique os resultados.
  - Lista todos os banco de dados.
  - Lista todas as tabelas.
- C) Utilize o comando `DESCRIBE Actor` e explique os resultados.
  - Retornou a query com toda estrutura usada para criar a tabela `Actor`.

### Exercício 02:

- A) Escreva uma query que crie a atriz `Glória Pires`, com o id `002`, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963
  - ```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES("002", "Glória Pires", 1200000, "1963-08-23", "female");
    ```
- B) Anote a mensagem de erro, traduza (pode usar o Google Tradutor diretamente) e explique porque esse erro aconteceu.
  - É gerado um erro de duplicação de chave primária que não é permitido ter a mesma chave primária.
- C) Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta
  - é necessário acrescentar `birth_date` e `gender`.
- D) Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta
  - O valor de name não foi passado e não pode ser nulo.
- E) Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta
  - É preciso passar a `birth_date` dentro de aspas.
- F) Por fim, crie mais um ator e mais uma atriz
  - ```sql
    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES("008", "Antônio Fagundes", 40000, "1922-08-22", "male");
    ```

### Exercício 03:

- A) Escreva uma query que retorne todas as informações das atrizes
  - `SELECT * from Actor WHERE gender = "female";`
- B) Escreva uma query que retorne o salário do ator com o nome Tony Ramos
  - `SELECT salary from Actor WHERE name = "Tony Ramos";`
- C) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.
  - `SELECT * from Actor WHERE gender = "invalid";` é aceito apenas male ou female.
- D) Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000
  - `SELECT id, name, salary from Actor WHERE salary < 500000;`
- E) explique porque esse erro aconteceu
  - Não existe `nome` na table, deveria ser usado name.
  - `SELECT id, name from Actor WHERE id = "002";`

### Exercício 04:

- A) Explique com as suas palavras a query acima
  - A query acima faz uso primeiramente do `OR` para procurar por atores que tenham as iniciais `A` ou `J` e usa o operador `AND` para apenas filtrar caso o ator ou atriz tenha um salário acima de 300000.
- B) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00
  - `SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;`
- C) Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome.
  - `SELECT * from Actor WHERE name LIKE "%G%" OR name LIKE "%g%";`
- D) Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00
  - `SELECT * from Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;`

### Exercício 05:

- A) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.
  - O tipo `TEXT` Não tem um limite específico de tamanho além do máximo do banco de dados. Ele é armazenado na área específica para blobs já que a expectativa é que ele será grande.
  ```sql
      CREATE TABLE Movie (
        id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
        synopsis TEXT NOT NULL,
        release_Date DATE NOT NULL,
        rating INT NOT NULL
        )
  ```
- B) Crie 4 filmes com as seguintes informações:

  - ```sql
        INSERT INTO Movie VALUES(
        "001",
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006-01-06",
    	  7
    );
    ```

- C) Crie 4 filmes com as seguintes informações:

  - ```sql
        INSERT INTO Movie VALUES(
        "002",
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012-12-27",
    	  10
    );
    ```

- D) Crie 4 filmes com as seguintes informações:

  - ```sql
        INSERT INTO Movie VALUES(
        "003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017-11-02",
    	  8
    );
    ```

- E) Crie 4 filmes com as seguintes informações:

  - ```sql
        INSERT INTO Movie VALUES(
        "004",
        "O Auto Da Compadecida",
        "O Auto da Compadecida tem como cenário o sertão e mostra os problemas encontrados na região Nordeste do Brasil, como a seca, a extrema pobreza, o coronelismo e os personas populares da região, a exemplo do cangaceiro.",
        "2000-09-10",
    	  8
    );
    ```

### Exercício 06:

- A) Retorne o id, título e avaliação a partir de um id específico;
  - `SELECT id, title, rating from Movie WHERE id = "004";`
- B) Retorne um filme a partir de um nome específico;
  - `SELECT * from Movie WHERE title = "O Auto Da Compadecida";`
- C) Retorne o id, título e sinopse dos filmes com avaliação mínima de `7`
  - `SELECT id, title, synopsis from Movie WHERE rating >= 7;`

### Exercício 07:

- A) Retorna um filme cujo título contenha a palavra `vida`.
  - `SELECT * from Movie WHERE title LIKE "%vida%";`
- B) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer `TERMO DE BUSCA` para exemplificar.
  - `SELECT * from Movie WHERE title LIKE "%Auto%" OR synopsis LIKE "%Auto%";`
- C) Procure por todos os filmes que já tenham lançado.
  - `SELECT * from Movie WHERE release_Date < "2022-08-22";`
- D) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7.
  - `SELECT * from Movie WHERE release_Date < "2022-08-22" AND (title LIKE "%Auto%" OR synopsis LIKE "%Auto%") AND rating > 7;`
