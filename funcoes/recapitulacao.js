
function fazerCafe() {
  console.log ("Ferver a água")  
  console.log ("Adicionar o café") 
  console.log ("Servir o café") 
}
/*
fazerCafe()
fazerCafe()
fazerCafe()
*/
function fazerCafeConformePedido(adicional) {
   console.log ("Ferver a água")  
   console.log ("Adicionar o café")
   console.log ("Adicionar " + adicional) 
   console.log ("Servir o café") 
}
/*
fazerCafeConformePedido("Leite")
fazerCafeConformePedido("Baunilha")
*/
function fazerCafeCalcularOValor(adicional) {
    let valorDoCafe = 5

    if (adicional == "Baunilha") {
        valorDoCafe = valorDoCafe + 1.50
    }

    fazerCafeConformePedido(adicional)
    return valorDoCafe

}

console.log(`O valor do café com Leite é de R$ ${fazerCafeCalcularOValor("Leite")}`) 
console.log(`O valor do café com Baunilha é de R$ ${fazerCafeCalcularOValor("Baunilha")}`) 

fazerCafeCalcularOValor("Leite")
fazerCafeCalcularOValor("Baunilha")