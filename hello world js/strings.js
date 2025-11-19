let nome = "Hugo Leonardo"

//separação
console.log(nome.split(" "))
//saída: [ 'Hugo', 'Leonardo' ]

//tamanho string
let tamanhoDaString = nome.length
console.log(tamanhoDaString)
//saída: 13

//saber o caracter pela posição dada
console.log(nome.charAt(5))
//saída: L
console.log(nome.charAt(0))
//saída: H

//transformar tudo em UpperCase
console.log(nome.toUpperCase())
//saída: HUGO LEONARDO

//transformar tudo em LowerCase
console.log(nome.toLowerCase())
//saída: hugo leonardo

//pegar parte de uma string
console.log(nome.substring(5,8))
//saída: Leo
console.log(nome.slice(-8))
//saída: Leonardo
console.log(nome.slice(5,8))
//saída: Leo

//concatenar
let sobrenome = "Silva"
console.log(nome + sobrenome)
//saída: Hugo Leonardo Silva
console.log(nome.concat(sobrenome))
//saída: Hugo Leonardo Silva
console.log(`${nome} ${sobrenome}`)
//saída: Hugo Leonardo Silva
console.log(nome + " " +  sobrenome)
//saída: Hugo Leonardo Silva
console.log(`O meu nome é ${nome} e meu sobrenome é ${sobrenome}.`)
//saída: O meu nome é Hugo Leonardo e meu sobrenome é Silva!

