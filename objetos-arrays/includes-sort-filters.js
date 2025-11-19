const numeros = [16, 20, 15, 8, 60]

console.log(numeros.includes(7))
/*
verifica se o número está incluído no array
saída: false
*/

console.log(numeros.includes(20))
/*
verifica se o número está incluído no array
saída: true
*/

console.log(numeros)
/*
retorna os elementos do array
saída: [ 16, 20, 15, 8, 60 ]
*/

numeros.sort((elementoA, elementoB) => elementoB - elementoA)
console.log(numeros)
/*
O SORT altera o array original!
retorna os elementos  do array em ordem decrescente
saída: [ 60, 20, 16, 15, 8 ]
*/

numeros.sort((elementoA, elementoB) => elementoA - elementoB)
console.log(numeros)
/*
O SORT altera o array original!
retorna os elementos do array em ordem crescente
saída: [ 8, 15, 16, 20, 60 ]
*/

const numerosMaioresQueVinte = numeros.filter(elemento => elemento > 20)
console.log(numerosMaioresQueVinte)
/*
O FILTER: retorna um array novo!
retorna os elementos filtrados do array
saída: [ 60 ]
*/
