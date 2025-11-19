const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numeroAleatorio = Math.random()
        if (numeroAleatorio < 0.5) {
            resolve(numeroAleatorio)
        } else{
            reject('Erro ao gerar o número!')
        }
    }, 1000)
})

minhaPromise
    .then((resultado) => {
        console.log(`Número gerado: ${resultado}`)
})
    .catch((erro) => {
        console.log(erro)
    })
/*
saídas:
saída1: Número gerado: 0.4456397373143166
saída2: Erro ao gerar o número!
saída3: Número gerado: 0.46345033589789475
saída4: Número gerado: 0.0477309928607097
saída5: Número gerado: 0.2713869359608645
*/

