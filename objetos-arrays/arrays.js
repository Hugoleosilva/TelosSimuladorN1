const numerosInteiros = [1, 2, 3, 4, 5]
//console.log(numerosInteiros)
//saída: [ 1, 2, 3, 4, 5 ]

let listaDeCompras = [
   {
         item: "leite",
         quantidade: 2
   },
   {
         item: "tomate",
         quantidade: 3
   },
   {
         item: "ovos",
         quantidade: 30
   },
   {
         item: "pão",
         quantidade: 10
   }
]

/*
console.log(listaDeCompras)

saída:
[
  { item: 'leite', quantidade: 2 },
  { item: 'tomate', quantidade: 3 },
  { item: 'ovos', quantidade: 30 },
  { item: 'pão', quantidade: 10 }
] 
*/
let numerodeExecucao = 1
for(elemento of listaDeCompras) {
   console.log(`Execução N° ${numerodeExecucao}`)
   console.log(elemento)
   numerodeExecucao++
}
/*percorrendo um array - saída:
[
 Execução N° 1
{ item: 'leite', quantidade: 2 }
Execução N° 2
{ item: 'tomate', quantidade: 3 }
Execução N° 3
{ item: 'ovos', quantidade: 30 }
Execução N° 4
{ item: 'pão', quantidade: 10 } 
] 
*/
//MAP - não altera Array, retorna um novo baseado no que foi pedido
function transformarItemEmMaiusculo(elemento) {
    return {
        item: elemento.item.toUpperCase(),
        quantidade: elemento.quantidade
    }
        
}

listaDeCompras = listaDeCompras.map(transformarItemEmMaiusculo)

console.log(listaDeCompras)
/*
[
  { item: 'LEITE', quantidade: 2 },
  { item: 'TOMATE', quantidade: 3 },
  { item: 'OVOS', quantidade: 30 },
  { item: 'PÃO', quantidade: 10 }
]
*/

listaDeCompras = listaDeCompras.map(elemento => {
    return {
        item: elemento.item,
        quantidade: elemento.quantidade + 2
    }
    
})

console.log(listaDeCompras)
/*
[
  { item: 'LEITE', quantidade: 4 },
  { item: 'TOMATE', quantidade: 5 },
  { item: 'OVOS', quantidade: 32 },
  { item: 'PÃO', quantidade: 12 }
]
*/

const total = listaDeCompras.reduce((acumulador, elemento) => acumulador + elemento.quantidade, 0)
console.log(`Total de itens: ${total}`)
/*
saída: Total de itens: 53
*/

console.log(listaDeCompras.length)
/*
saída: 4
*/

console.log(listaDeCompras[0])
/*
saída: { item: 'LEITE', quantidade: 4 }
*/

const tomate = listaDeCompras.find(elemento => elemento.item == "TOMATE")
console.log(tomate)
/*
saída: { item: 'TOMATE', quantidade: 5 }
*/