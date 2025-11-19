const pegarMenu = new Promise((resolve, reject) => {
    setTimeout(() => {
        const menu = ['Pizza', 'Hamburguer', 'Suco', 'Sushi']
        if(menu.length > 0) {
            resolve(menu)
        } else {
            reject('Erro ao obter o cardápio')
        }
    }, 2000)
})

/*
pegarMenu.then(menu => {
    console.log('Cardápio disponível: ' + menu)
}).catch(erro => {
    console.log('Erro: ' + erro)
})
/*
saída: Cardápio disponível: Pizza,Hamburguer,Suco,Sushi
*/
/*
O resultado de uma função async é uma promise!
*/
async function processarPedido(item) {
    const menu = await pegarMenu
    console.log(menu)

    if(menu.includes(item)) {
        console.log(`${item} está disponível. Processando o pedido...`)
        await new Promise(resolve => setTimeout(resolve, 3000))
        console.log('Pedido de '+item+' processado com sucesso')
    } else {
        console.log(`${item} não disponível no cardápio.`)
    }
}
/*
O then é chamado em caso de sucesso.
O catch é chamado em caso de erro.
O finaly é chamado depois de qualquer um dos dois!
*/
processarPedido('Refrigerante').then(() => {
    console.log('Pedido foi entregue com sucesso')
}).catch(error => {
    console.log('Erro ao entregar o pedido'+error)
}).finally(() => {
    console.log('Finalizando o pedido')
})
/*
saída 1: [ 'Pizza', 'Hamburguer', 'Suco', 'Sushi' ]
Pizza está disponível. Processando o pedido...
Pedido de Pizza processado com sucesso
Pedido foi entregue com sucesso
Finalizando o pedido

saída 2: [ 'Pizza', 'Hamburguer', 'Suco', 'Sushi' ]
Refrigerante não disponível no cardápio.
Pedido foi entregue com sucesso
Finalizando o pedido
*/