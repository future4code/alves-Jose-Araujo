// Exercício 2
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:Object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([22, 25, 100, 1, 20, 3]))

type Amostra = {
    numeros: number[],
    obterEstatisticas: any
}

const amostraDeDados:Amostra = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numeros:number[]):void => {}
}
