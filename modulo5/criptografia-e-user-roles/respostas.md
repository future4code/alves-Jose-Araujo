### Exercício 1

- A) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
  - Acrescenta aleatoriamente sequências de caracteres a senha

### Exercício 2

- A) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique

  - O cadastro pois vai ser comparado posteriormente quando o usuário fizer login.

- D) No exercício de ontem, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
  - Foi preciso modificar para o novo formato do payload que passa verify.
