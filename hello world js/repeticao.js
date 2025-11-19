/*for(inicialização; condição; iteração) {

}
*/
for(let i = 0; i < 10; i++) {
    console.log(i)
}
/*saída:
0
1
2
3
4
5
6
7
8
9
*/ 
for(let i = 1; i <= 10; i++) {
    console.log(`O valor de i é ${i}`)
}
/*saída:
O valor de i é 1
O valor de i é 2
O valor de i é 3
O valor de i é 4
O valor de i é 5
O valor de i é 6
O valor de i é 7
O valor de i é 8
O valor de i é 9
O valor de i é 10
*/ 
for(let i = 10; i >= 0; i--) {
    console.log(`O valor de i é ${i}`)
}
/*saída:
O valor de i é 10
O valor de i é 10
O valor de i é 9
O valor de i é 8
O valor de i é 7
O valor de i é 6
O valor de i é 5
O valor de i é 4
O valor de i é 3
O valor de i é 2
O valor de i é 1
O valor de i é 0
*/ 
let numero = 10
while (numero > 0){
    console.log(`O valor de número é ${numero}`)
    
    numero --
    /*
    ou numero = numero - 1
    */
}
/*saída:
O valor de i é 9
O valor de i é 8
O valor de i é 7
O valor de i é 6
O valor de i é 5
O valor de i é 4
O valor de i é 3
O valor de i é 2
O valor de i é 1
O valor de i é 0
*/
