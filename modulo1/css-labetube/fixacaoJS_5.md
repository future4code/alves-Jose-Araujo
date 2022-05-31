```
function criarArrayNomesAnimais() {
    const animais = [
    { nome: "Cachorro", classificacao: "mamífero" },
    { nome: "Papagaio", classificacao: "ave" },
    { nome: "Gato", classificacao: "mamífero" },
    { nome: "Carpa", classificacao: "peixe" },
    { nome: "Pomba", classificacao: "ave" }
    ]


    const arrayAnimais = animais.map((item) => {
        let novoArray = item.nome
        return novoArray
    })

    return arrayAnimais
}
```
