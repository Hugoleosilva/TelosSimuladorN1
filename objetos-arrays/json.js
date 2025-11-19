const usuario = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo"
}
/*
1. O Lado WEB que envia os dados para o servidor!
*/
console.log(usuario.nome)
/*
saída: João
*/

/*
2. Transformando objeto JavaScript em JSON!
*/
const usuarioJSON = JSON.stringify(usuario)

console.log(usuario)
/*
saída: { nome: 'João', idade: 25, cidade: 'São Paulo' }
*/

/*
3. Servidor ao receber os dados fez um PARSE para interpretar para algo manipulável!
*/
const usuarioJSONRecebido = '{"nome": "Ruan", "idade": 29, "cidade": "Salvador"}';

const usuarioRecebido = JSON.parse(usuarioJSONRecebido);


/*
4. Agora virou objeto JavaScript!
*/
console.log(usuarioRecebido.nome)
/*
saída: Ruan
*/

console.log(usuarioRecebido)
/*
saída: { nome: 'Ruan', idade: 29, cidade: 'Salvador' }
*/