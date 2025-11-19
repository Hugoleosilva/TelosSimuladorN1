//estruturas condicionais
//If - Else - Else if
const idade = 70
/** 
if (idade >=18) {
    console.log("A pessoa é maior de idade")
}else{
    console.log("A pessoa é menor de idade")
}
// saída 17 anos: A pessoa é menor de idade
// saída 18 anos: A pessoa é maior de idade
// saída 19 anos: A pessoa é maior de idade   
*/
if (idade <18) {
    console.log("A pessoa é menor de idade")
}else if (idade >=18 && idade <65) {
    console.log("A pessoa é adulta")
}else {
    console.log ("A pessoa é idosa")
}
// saída 17 anos: A pessoa é menor de idade
// saída 18 anos: A pessoa é adulta
// saída 50 anos: A pessoa é adulta
// saída 70 anos: A pessoa é idosa

let salario = 2000

if (salario > 1500 || idade < 18) {
    console.log("Condição verdadeira")
}

console.log(idade > 18)
console.log(idade > 18 && salario > 1000)
console.log(idade < 18 && salario > 1000)
console.log(idade < 18 || salario > 1500)

const resultado = 5 % 3

switch(resultado) {
    case 0: console.log("O número é par!")
         break
    
    case 1: console.log("O número é Ímpar!")
         break

    default: console.log("Um número desconhecido!")     
}
/*
saída 2 % 2: O número é Par!
saída 3 % 2: O número é Ímpar!
saída 5 % 3: Um número desconhecido!
*/