//Objeto
const item = {
    nome: "leite",
    marca: "Ninho",
    quantidade: 3
}

console.log(item)
//saída: { nome: 'leite', marca: 'Ninho', quantidade: 3 }
item.quantidade = 2

console.log(item)
//saída: { nome: 'leite', marca: 'Ninho', quantidade: 2 }

item.tipo = "Lata"

console.log(item)
//saída: { nome: 'leite', marca: 'Ninho', quantidade: 2, tipo: 'Lata' }

console.log(item.nome)
//saída: leite