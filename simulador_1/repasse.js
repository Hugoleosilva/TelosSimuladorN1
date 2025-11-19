/*
Para esse simulado você deverá criar uma constante com o seguinte valor:
#DicaTelos 1💡: Se o VS Code reclamar do tamanho da string, nas configurações você
pode alterar a propriedade maxTokenizationLineLength para 200000
#DicaTelos 2💡: Transforme a constante que você criou em JSON para facilitar o
desenvolvimento das atividades!
*/
const dadosRepasse = [
{
    "orgao": "Polícia Civil", 
    "data": "01/01/2024", 
    "valor": 5500.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Polícia Rodoviária Federal", 
    "data": "02/01/2024", 
    "valor": 6000.00,
    "status": "falha", "motivo": "Problemas técnicos"
}, 
{ 
    "orgao": "Polícia Militar", 
    "data": "03/01/2024", 
    "valor": 4500.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Corpo de Bombeiros",
    "data": "04/01/2024", 
    "valor": 7000.00, 
    "status": "sucesso" 
}, 
{   "orgao": "Guarda Municipal",
    "data": "05/01/2024", 
    "valor": 3500.00, 
    "status": "falha", 
    "motivo": "Documentação incompleta" 
}, 
{
    "orgao": "Receita Federal", 
    "data": "06/01/2024",
    "valor": 8000.00, 
    "status": "sucesso" 
}, 
{
    "orgao": "Ministério Público", 
    "data": "07/01/2024",
    "valor": 9000.00, 
    "status": "falha", 
    "motivo": "Erro no sistema" 
}, 
{ 
    "orgao": "Defesa Civil",
    "data": "08/01/2024", 
    "valor": 4000.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Detran", 
    "data": "09/01/2024", 
    "valor": 5000.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Polícia Federal",
    "data": "10/01/2024", 
    "valor": 6500.00, 
    "status": "falha", 
    "motivo": "Falta de recursos" 
}, 
{
    "orgao": "Ibama", 
    "data": "11/01/2024", 
    "valor": 5500.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Anvisa", 
    "data": "12/01/2024", 
    "valor": 6000.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Inmetro", 
    "data": "13/01/2024", 
    "valor": 3000.00, 
    "status": "falha", 
    "motivo": "Dados incorretos" 
}, 
{ 
    "orgao": "Cetesb", 
    "data": "14/01/2024", 
    "valor": 7000.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Susep", 
    "data": "15/01/2024", 
    "valor": 8000.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
}, 
{
    "orgao": "Polícia Civil", 
    "data": "16/01/2024",
    "valor": 5200.00, 
    "status": "sucesso" 
},
{
    "orgao": "Polícia Rodoviária Federal", 
    "data": "17/01/2024", 
    "valor": 6100.00, 
    "status": "falha", 
    "motivo": "Erro humano" 
},
{
    "orgao": "Polícia Militar", 
    "data": "18/01/2024",
    "valor": 4600.00, 
    "status": "sucesso" 
},
{
    "orgao": "Corpo de Bombeiros", 
    "data": "19/01/2024",
    "valor": 7100.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Guarda Municipal", 
    "data": "20/01/2024",
    "valor": 3600.00, 
    "status": "falha", 
    "motivo": "Sistema fora do ar" 
},
{ 
    "orgao": "Receita Federal", 
    "data": "21/01/2024", 
    "valor": 8100.00,
    "status": "sucesso" 
},
{
    "orgao": "Ministério Público", 
    "data": "22/01/2024", 
    "valor": 9100.00,
    "status": "falha", 
    "motivo": "Recursos insuficientes"
}, 
{ 
    "orgao": "Defesa Civil", 
    "data": "23/01/2024", 
    "valor": 4100.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Detran", 
    "data": "24/01/2024", 
    "valor": 5100.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Polícia Federal",
    "data": "25/01/2024", 
    "valor": 6600.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
},
{
    "orgao": "Ibama", 
    "data": "26/01/2024", 
    "valor": 5600.00, 
    "status": "sucesso" 
},
{  
    "orgao": "Anvisa",
    "data": "27/01/2024", 
    "valor": 6100.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Inmetro", 
    "data": "28/01/2024", 
    "valor": 3100.00, 
    "status": "falha", 
    "motivo": "Dados incorretos" 
},
{  
    "orgao": "Cetesb", 
    "data": "29/01/2024", 
    "valor": 7100.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Susep", 
    "data": "30/01/2024", 
    "valor": 8100.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
},
{
    "orgao": "Polícia Civil", 
    "data": "31/01/2024",
    "valor": 5300.00, 
    "status": "sucesso" 
},
{
    "orgao": "Polícia Rodoviária Federal", 
    "data": "01/01/2024", 
    "valor": 6200.00, 
    "status": "falha", 
    "motivo": "Erro humano" 
},
{
    "orgao": "Polícia Militar", 
    "data": "02/01/2024",
    "valor": 4700.00, 
    "status": "sucesso" 
},
{
    "orgao": "Corpo de Bombeiros", 
    "data": "03/01/2024",
    "valor": 7200.00, 
    "status": "sucesso" 
},
{
    "orgao": "Guarda Municipal", 
    "data": "04/01/2024",
    "valor": 3700.00, 
    "status": "falha", 
    "motivo": "Sistema fora do ar" 
},
{ 
    "orgao": "Receita Federal", 
    "data": "05/01/2024", 
    "valor": 8200.00,
    "status": "sucesso" 
},
{ 
    "orgao": "Ministério Público", 
    "data": "06/01/2024", 
    "valor": 9200.00,
    "status": "falha", 
    "motivo": "Recursos insuficientes"
}, 
{ 
    "orgao": "Defesa Civil", 
    "data": "07/01/2024", 
    "valor": 4200.00, 
    "status": "sucesso" 
},
{
    "orgao": "Detran", 
    "data": "08/01/2024", 
    "valor": 5200.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Polícia Federal",
    "data": "09/01/2024", 
    "valor": 6700.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
},
{
    "orgao": "Ibama", 
    "data": "10/01/2024", 
    "valor": 5700.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Anvisa", 
    "data": "11/01/2024",
    "valor": 6200.00, 
    "status": "sucesso" 
},
{
    "orgao": "Inmetro", 
    "data": "12/01/2024",
    "valor": 3200.00, 
    "status": "falha", 
    "motivo": "Dados incorretos" 
},
{
    "orgao": "Cetesb",
    "data": "13/01/2024", 
    "valor": 7200.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Susep", 
    "data": "14/01/2024", 
    "valor": 8200.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
},
{
    "orgao": "Polícia Civil", 
    "data": "15/01/2024",
    "valor": 5400.00, 
    "status": "sucesso" 
}, 
{
    "orgao": "Polícia Rodoviária Federal", 
    "data": "16/01/2024", 
    "valor": 6300.00, 
    "status": "falha", 
    "motivo": "Erro humano" 
},
{
    "orgao": "Polícia Militar", 
    "data": "17/01/2024",
    "valor": 4800.00, 
    "status": "sucesso" 
},
{
    "orgao": "Corpo de Bombeiros", 
    "data": "18/01/2024",
    "valor": 7300.00, 
    "status": "sucesso" 
},
{
    "orgao": "Guarda Municipal", 
    "data": "19/01/2024",
    "valor": 3800.00, 
    "status": "falha", 
    "motivo": "Sistema fora do ar" 
},
{ 
    "orgao": "Receita Federal", 
    "data": "20/01/2024", 
    "valor": 8300.00,
    "status": "sucesso" 
},
{ 
    "orgao": "Ministério Público", 
    "data": "21/01/2024", 
    "valor": 9300.00,
    "status": "falha", 
    "motivo": "Recursos insuficientes"
}, 
{ 
    "orgao": "Defesa Civil", 
    "data": "22/01/2024", 
    "valor": 4300.00, "status":
    "sucesso" }, { "orgao": "Detran", 
    "data": "23/01/2024", 
    "valor": 5300.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Polícia Federal",
    "data": "24/01/2024", 
    "valor": 6800.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
},
{
    "orgao": "Ibama", 
    "data": "25/01/2024", 
    "valor": 5800.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Anvisa", 
    "data": "26/01/2024", 
    "valor": 6300.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Inmetro", 
    "data": "27/01/2024", 
    "valor": 3300.00, 
    "status": "falha", 
    "motivo": "Dados incorretos" 
}, 
{
     "orgao": "Cetesb", 
     "data": "28/01/2024", 
     "valor": 7300.00, 
     "status": "sucesso" 
}, 
{ 
    "orgao": "Susep", 
    "data": "29/01/2024", 
    "valor": 8300.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
},
{
    "orgao": "Polícia Civil", 
    "data": "30/01/2024",
    "valor": 5500.00, 
    "status": "sucesso" 
}, 
{
    "orgao": "Polícia Rodoviária Federal", 
    "data": "31/01/2024", 
    "valor": 6400.00, 
    "status": "falha", 
    "motivo": "Erro humano" 
}, 
{
    "orgao": "Polícia Militar", 
    "data": "01/01/2024",
    "valor": 4900.00, 
    "status": "sucesso" 
}, 
{
    "orgao": "Corpo de Bombeiros", 
    "data": "02/01/2024",
    "valor": 7400.00, 
    "status": "sucesso" 
}, 
{
    "orgao": "Guarda Municipal", 
    "data": "03/01/2024",
    "valor": 3900.00, 
    "status": "falha", 
    "motivo": "Sistema fora do ar" 
}, 
{ 
    "orgao": "Receita Federal", 
    "data": "04/01/2024", 
    "valor": 8400.00,
    "status": "sucesso" 
}, 
{ 
    "orgao": "Ministério Público", 
    "data": "05/01/2024", 
    "valor": 9400.00,
    "status": "falha", 
    "motivo": "Recursos insuficientes"
}, 
{ 
    "orgao": "Defesa Civil", 
    "data": "06/01/2024", 
    "valor": 4400.00, 
    "status": "sucesso" 
},
{
    "orgao": "Detran", 
    "data": "07/01/2024", 
    "valor": 5400.00, 
    "status": "sucesso" 
},
{ 
    "orgao": "Polícia Federal",
    "data": "08/01/2024", 
    "valor": 6900.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
}, 
{
    "orgao": "Ibama", 
    "data": "09/01/2024", 
    "valor": 5900.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Anvisa", 
    "data": "10/01/2024", 
    "valor": 6400.00, 
    "status": "sucesso" 
}, 
{   
    "orgao": "Inmetro", 
    "data": "11/01/2024", 
    "valor": 3400.00, 
    "status": "falha", 
    "motivo": "Dados incorretos" 
}, 
{ 
    "orgao": "Cetesb", 
    "data": "12/01/2024", 
    "valor": 7400.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Susep", 
    "data": "13/01/2024", 
    "valor": 8400.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
}, 
{
    "orgao": "Polícia Civil", 
    "data": "14/01/2024",
    "valor": 5600.00, 
    "status": "sucesso" 
},
{
    "orgao": "Polícia Rodoviária Federal", 
    "data": "15/01/2024", 
    "valor": 6500.00, 
    "status": "falha", 
    "motivo": "Erro humano" 
}, 
{
    "orgao": "Polícia Militar", 
    "data": "16/01/2024",
    "valor": 5000.00, 
    "status": "sucesso" 
},
{
    "orgao": "Corpo de Bombeiros", 
    "data": "17/01/2024",
    "valor": 7500.00, 
    "status": "sucesso" 
}, 
{
    "orgao": "Guarda Municipal", 
    "data": "18/01/2024",
    "valor": 4000.00, 
    "status": "falha", 
    "motivo": "Sistema fora do ar" 
}, 
{ 
    "orgao": "Receita Federal", 
    "data": "19/01/2024", 
    "valor": 8500.00,
    "status": "sucesso" 
},
{
    "orgao": "Ministério Público", 
    "data": "20/01/2024", 
    "valor": 9500.00,
    "status": "falha", 
    "motivo": "Recursos insuficientes"
}, 
{ 
    "orgao": "Defesa Civil", 
    "data": "21/01/2024", 
    "valor": 4500.00, 
    "status": "sucesso"
}, 
{  
    "orgao": "Detran", 
    "data": "22/01/2024", 
    "valor": 5500.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Polícia Federal",
    "data": "23/01/2024", 
    "valor": 7000.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
}, 
{
    "orgao": "Ibama", 
    "data": "24/01/2024", 
    "valor": 6000.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Anvisa", 
    "data": "25/01/2024", 
    "valor": 6500.00, 
    "status": "sucesso" 
}, 
{ 
    "orgao": "Inmetro", 
    "data": "26/01/2024", 
    "valor": 3500.00, 
    "status": "falha", 
    "motivo": "Dados incorretos" 
}, 
{ 
    "orgao": "Cetesb", 
    "data": "27/01/2024", 
    "valor": 7500.00, 
    "status": "sucesso"
},
{ 
    "orgao": "Susep", 
    "data": "28/01/2024", 
    "valor": 8500.00, 
    "status": "falha", 
    "motivo": "Problemas técnicos" 
}, 
{
    "orgao": "Polícia Civil", 
    "data": "29/01/2024",
    "valor": 5700.00, 
    "status": "sucesso" 
},
{
    "orgao": "Polícia Rodoviária Federal", 
    "data": "30/01/2024", 
    "valor": 6600.00, 
    "status": "falha", 
    "motivo": "Erro humano" 
},
{
     "orgao": "Polícia Militar", 
     "data": "31/01/2024",
     "valor": 5100.00, 
     "status": "sucesso" 
},
{
    "orgao":"MEC",
    "data":"01/01/2024",
    "valor":500.00,
    "status":"sucesso"
},
{   "orgao":"Ministério da Saúde",
    "data":"03/01/2024",
    "valor":750.00,
    "status":"sucesso"
},
{
    "orgao":"MEC",
    "data":"05/01/2024",
    "valor":1000.00,
    "status" :"sucesso"
},
{
    "orgao":"Ministério da Educação",
    "data":"08/01/2024",
    "valor":600.00,
    "status":"sucesso"
},
{
    "orgao":"Ministério da Saúde",
    "data":"10/01/2024",
    "valor":900.00,
    "status":"sucesso"
},
{
    "orgao":"Ministério da Educação",
    "data":"12/01/2024",
    "valor":300.00,
    "status":"falha",
    "motivo":"dados inválidos"
},
{
    "orgao":"Ministério da Saúde",
    "data":"15/01/2024",
    "valor":1200.00,
    "status":"sucesso"
},
{
    "orgao":"MEC",
    "data":"17/01/2024",
    "valor":800.00,
    "status":"falha",
    "motivo":"falta de verba"
},
{
    "orgao":"Ministério da Educação",
    "data":"20/01/2024",
    "valor":400.00,
    "status":"falha",
    "motivo":"falta de limite"
},
{
    "orgao":"MEC",
    "data":"22/01/2024",
    "valor":1100.00,
    "status":"falha"
}]
/*
01) História de Usuário 1: Recebimento e Exibição de Dados do
Governo
*/
function historia1() {
    console.log("HISTÓRIA DE USUÁRIO 01")
    console.log(`Total de repasses processados: ${dadosRepasse.length}`);
}
historia1()
/*
01) Total de repasses processados: 93
*/

/*
02) História de Usuário 2: Análise de Transações por status
*/
function historia2() {
const repassesSucesso = dadosRepasse.filter(repass => repass.status === "sucesso");
const repassesFalha = dadosRepasse.filter(repass => repass.status === "falha");

    console.log("HISTÓRIA DE USUÁRIO 02")
    console.log(`a. Repasses bem sucedidos: ${repassesSucesso.length}`);
    console.log(`a. Quantidade total: ${repassesSucesso.length}`);

const quantidadePorOrgaoSucesso = {};
    repassesSucesso.forEach(r => {
         quantidadePorOrgaoSucesso [r.orgao] = (quantidadePorOrgaoSucesso[r.orgao] || 0) +1;
});
/*
Quantidade por órgão (sucesso)
*/
    console.log("b. Quantidade por Órgão: ");
Object.entries(quantidadePorOrgaoSucesso).forEach(([orgao, quantidade]) => {
    console.log(`      - ${orgao}: ${quantidade}`);
});
/*
a. Repasses bem sucedidos: 56
b. Quantidade por Órgão: 
      - Polícia Civil: 7
      - Polícia Militar: 7
      - Corpo de Bombeiros: 6
      - Receita Federal: 6
      - Defesa Civil: 6
      - Detran: 6
      - Ibama: 6
      - Anvisa: 6
      - Cetesb: 6
*/

/*
Valor total (sucesso)
*/
const valorTotalSucesso = repassesSucesso.reduce((acc, r) => acc + r.valor, 0);
    console.log(`c. Valor total: R$ ${valorTotalSucesso.toFixed(2)}`);
/*
c. Valor total: R$ 337300.00
*/

/*
Valor por órgão (sucesso)
*/
const valorPorOrgaoSucesso = {};
    repassesSucesso.forEach(r => {
        valorPorOrgaoSucesso[r.orgao] = (valorPorOrgaoSucesso[r.orgao] || 0) + r.valor;
});
    console.log("d. Valor por órgão:");
    Object.entries(valorPorOrgaoSucesso).forEach(([orgao, valor]) => {
    console.log(`   - ${orgao}: R$ ${valor.toFixed(2)}`);
});
/*
d. Valor por órgão:
   - Polícia Civil: R$ 38200.00
   - Polícia Militar: R$ 33600.00
   - Corpo de Bombeiros: R$ 43500.00
   - Receita Federal: R$ 49500.00
   - Defesa Civil: R$ 25500.00
   - Detran: R$ 31500.00
   - Ibama: R$ 34500.00
   - Anvisa: R$ 37500.00
   - Cetesb: R$ 43500.00
*/

/*
Repasses com falhas
*/
    console.log("Repasses com falhas");
    console.log(`a. Quantidade total: ${repassesFalha.length}`);
/*
Repasses com falhas
a. Quantidade total: 37
*/ 

/*
Quantidade por órgão (falhas)
*/
const quantidadePorOrgaoFalha = {};
    repassesFalha.forEach(r => {
        quantidadePorOrgaoFalha[r.orgao] = (quantidadePorOrgaoFalha[r.orgao] || 0) + 1;
});
    console.log("b. Quantidade por órgão:");
    Object.entries(quantidadePorOrgaoFalha).forEach(([orgao, quantidade]) => {
        console.log(`   - ${orgao}: ${quantidade}`);
});
/*
b. Quantidade por órgão:
   - Polícia Rodoviária Federal: 7
   - Guarda Municipal: 6
   - Ministério Público: 6
   - Polícia Federal: 6
   - Inmetro: 6
   - Susep: 6
*/

/*
Quantidade por motivo (falha)
*/
const quantidadePorMotivo = {};
    repassesFalha.forEach(r => {
        if (r.motivo) {
            quantidadePorMotivo[r.motivo] = (quantidadePorMotivo[r.motivo] || 0) + 1;
        }
});
    console.log("c. Quantidade por motivo:");
    Object.entries(quantidadePorMotivo).forEach(([motivo, quantidade]) => {
        console.log(`   - ${motivo}: ${quantidade}`);
});
/*
c. Quantidade por motivo:
   - Problemas técnicos: 12
   - Documentação incompleta: 1
   - Erro no sistema: 1
   - Falta de recursos: 1
   - Dados incorretos: 6
   - Erro humano: 6
   - Sistema fora do ar: 5
   - Recursos insuficientes: 5
*/

/*
Valor total (falha)
*/
const valorTotalFalha = repassesFalha.reduce((acc, r) => acc + r.valor, 0);
    console.log(`d. Valor total: R$ ${valorTotalFalha.toFixed(2)}`);
/*
d. Valor total: R$ 231600.00
*/

/*
Valor por órgão (falha)
*/
const valorPorOrgaoFalha = {};
    repassesFalha.forEach(r => {
        valorPorOrgaoFalha[r.orgao] = (valorPorOrgaoFalha[r.orgao] || 0) + r.valor;
});
    console.log('e. Valor por órgão:');
    Object.entries(valorPorOrgaoFalha).forEach(([orgao, valor]) => {
        console.log(`   - ${orgao}: R$ ${valor.toFixed(2)}`);
});
/*
e. Valor por órgão:
   - Polícia Rodoviária Federal: R$ 44100.00
   - Guarda Municipal: R$ 22500.00
   - Ministério Público: R$ 55500.00
   - Polícia Federal: R$ 40500.00
   - Inmetro: R$ 19500.00
   - Susep: R$ 49500.00
*/

/*
Valor por motivo (falha)
*/
const valorPorMotivo = {};
    repassesFalha.forEach(r => {
        if (r.motivo) {
            valorPorMotivo[r.motivo] = (valorPorMotivo[r.motivo] || 0) + r.valor;
        }
});
    console.log("f. Valor por motivo:");
    Object.entries(valorPorMotivo).forEach(([motivo, valor]) => {
        console.log(`   - ${motivo}: R$ ${valor.toFixed(2)}`);
});
    console.log('');
}
historia2()
/*
f. Valor por motivo:
   - Problemas técnicos: R$ 89500.00
   - Documentação incompleta: R$ 3500.00
   - Erro no sistema: R$ 9000.00
   - Falta de recursos: R$ 6500.00
   - Dados incorretos: R$ 19500.00
   - Erro humano: R$ 38100.00
   - Sistema fora do ar: R$ 19000.00
   - Recursos insuficientes: R$ 46500.00
*/

console.log("HISTÓRIA DE USUÁRIO 03")
/*
Estatísticas gerais

Repasse com maior valor
*/
const repasseMaiorValor = dadosRepasse.reduce((max, r) => r.valor > max.valor ? r : max, dadosRepasse[0]);
    console.log("a. Repasse com maior valor:");
    console.log(`   Órgão: ${repasseMaiorValor.orgao}`);
    console.log(`   Data: ${repasseMaiorValor.data}`);
    console.log(`   Valor: R$ ${repasseMaiorValor.valor.toFixed(2)}`);
    console.log(`   Status: ${repasseMaiorValor.status}`);
/*
a. Repasse com maior valor:
   Órgão: Ministério Público
   Data: 20/01/2024
   Valor: R$ 9500.00
   Status: falha
*/

/*
Repasse com menor valor
*/
function historia3() {
const repasseMenorValor = dadosRepasse.reduce((min, r) => r.valor < min.valor ? r : min, dadosRepasse[0]);
    console.log("b. Repasse com menor valor:");
    console.log(`   Órgão: ${repasseMenorValor.orgao}`);
    console.log(`   Data: ${repasseMenorValor.data}`);
    console.log(`   Valor: R$ ${repasseMenorValor.valor.toFixed(2)}`);
    console.log(`   Status: ${repasseMenorValor.status}`);
/*
b. Repasse com menor valor:
   Órgão: Inmetro
   Data: 13/01/2024
   Valor: R$ 3000.00
   Status: falha
*/

/*
Dia com mais repasses
*/
const repassesPorData = {};
    dadosRepasse.forEach(r => {
        repassesPorData[r.data] = (repassesPorData[r.data] || 0) + 1;
});

const diaMaisRepasses = Object.keys(repassesPorData).reduce((a, b) => 
        repassesPorData[a] > repassesPorData[b] ? a : b
);
    console.log(`c. Dia com mais repasses: ${diaMaisRepasses} (${repassesPorData[diaMaisRepasses]} repasses)`);
/*
c. Dia com mais repasses: 31/01/2024 (3 repasses)
*/ 

/*
Órgão com mais repasses
*/
const repassesPorOrgao = {};
    dadosRepasse.forEach(r => {
        repassesPorOrgao[r.orgao] = (repassesPorOrgao[r.orgao] || 0) + 1;
});

const orgaoMaisRepasses = Object.keys(repassesPorOrgao).reduce((a, b) => 
        repassesPorOrgao[a] > repassesPorOrgao[b] ? a : b
);
    console.log(`d. Órgão com mais repasses: ${orgaoMaisRepasses} (${repassesPorOrgao[orgaoMaisRepasses]} repasses)`);
/*
d. Órgão com mais repasses: Polícia Militar (7 repasses)
*/

/*
Órgão com mais repasses com sucesso
*/
const sucessoPorOrgao = {};
    dadosRepasse.filter(r => r.status === "sucesso").forEach(r => {
        sucessoPorOrgao[r.orgao] = (sucessoPorOrgao[r.orgao] || 0) + 1;
});

const orgaoMaisSucesso = Object.keys(sucessoPorOrgao).reduce((a, b) => 
        sucessoPorOrgao[a] > sucessoPorOrgao[b] ? a : b
);
    console.log(`e. Órgão com mais repasses com sucesso: ${orgaoMaisSucesso} (${sucessoPorOrgao[orgaoMaisSucesso]} repasses)`);
/*
e. Órgão com mais repasses com sucesso: Polícia Militar (7 repasses)
*/

/*
Órgão com mais repasses falhados
*/
const falhaPorOrgao = {};
    dadosRepasse.filter(r => r.status === "falha").forEach(r => {
        falhaPorOrgao[r.orgao] = (falhaPorOrgao[r.orgao] || 0) + 1;
});

const orgaoMaisFalha = Object.keys(falhaPorOrgao).reduce((a, b) => 
        falhaPorOrgao[a] > falhaPorOrgao[b] ? a : b
);
    console.log(`f. Órgão com mais repasses falhados: ${orgaoMaisFalha} (${falhaPorOrgao[orgaoMaisFalha]} repasses)`);
/*
f. Órgão com mais repasses falhados: Polícia Rodoviária Federal (7 repasses)
*/

/*
Motivo de falha com mais repasses
*/
const motivoMaisFalha = {};
    dadosRepasse.filter(r => r.status === "falha" && r.motivo).forEach(r => {
        motivoMaisFalha[r.motivo] = (motivoMaisFalha[r.motivo] || 0) + 1;
});

const motivoMaisComum = Object.keys(motivoMaisFalha).reduce((a, b) => 
        motivoMaisFalha[a] > motivoMaisFalha[b] ? a : b
);
    console.log(`g. Motivo de falha com mais repasses: ${motivoMaisComum} (${motivoMaisFalha[motivoMaisComum]} repasses)`);
    console.log("");
}
historia3()    
/*
g. Motivo de falha com mais repasses: Problemas técnicos (12 repasses)
*/

/*
Busca por órgão específico
*/
function historia4(orgaoBuscado = "Polícia Civil") {
console.log("HISTÓRIA DE USUÁRIO 04")   
const repassesOrgao = dadosRepasse.filter(r => 
        r.orgao.toLowerCase().includes(orgaoBuscado.toLowerCase())
);
    
    console.log(`Busca automática por: ${orgaoBuscado}`);
    console.log(`Total de transações encontradas: ${repassesOrgao.length}`);
    
    repassesOrgao.forEach((repass, index) => {
        console.log(`  Transação ${index + 1}:`);
        console.log(`  Órgão: ${repass.orgao}`);
        console.log(`  Data: ${repass.data}`);
        console.log(`  Valor: R$ ${repass.valor.toFixed(2)}`);
        console.log(`  Status: ${repass.status}`);
        if (repass.motivo) {
            console.log(`  Motivo: ${repass.motivo}`);
        }
});
    console.log(" ");
}
    historia4();
/*
Busca automática por: Polícia Civil
Total de transações encontradas: 7

Transação 1:
  Órgão: Polícia Civil
  Data: 01/01/2024
  Valor: R$ 5500.00
  Status: sucesso

Transação 2:
  Órgão: Polícia Civil
  Data: 16/01/2024
  Valor: R$ 5200.00
  Status: sucesso

Transação 3:
  Órgão: Polícia Civil
  Data: 31/01/2024
  Valor: R$ 5300.00
  Status: sucesso

Transação 4:
  Órgão: Polícia Civil
  Data: 15/01/2024
  Valor: R$ 5400.00
  Status: sucesso

Transação 5:
  Órgão: Polícia Civil
  Data: 30/01/2024
  Valor: R$ 5500.00
  Status: sucesso

Transação 6:
  Órgão: Polícia Civil
  Data: 14/01/2024
  Valor: R$ 5600.00
  Status: sucesso

Transação 7:
  Órgão: Polícia Civil
  Data: 29/01/2024
  Valor: R$ 5700.00
  Status: sucesso
*/

/*
Transações inválidas
*/
function historia5() {
    console.log("HISTÓRIA DE USUÁRIO 5");

    const transacoesInvalidas = dadosRepasse.filter(r => 
        r.status === "falha" && (!r.motivo || r.motivo.trim() === "")
    );
    
    console.log("TRANSAÇÕES INVÁLIDAS - FALHA SEM MOTIVO:");
    if (transacoesInvalidas.length === 0) {
        console.log("Nenhuma transação inválida encontrada.");
} else {
        transacoesInvalidas.forEach((transacao, index) => {
            console.log(`  Transação inválida ${index + 1}:`);
            console.log(`  Órgão: ${transacao.orgao}`);
            console.log(`  Data: ${transacao.data}`);
            console.log(`  Valor: R$ ${transacao.valor.toFixed(2)}`);
            console.log(`  Status: ${transacao.status}`);
            console.log("  MOTIVO: NÃO INFORMADO!");
    });
}
    console.log("");
    return transacoesInvalidas;
}
historia5()
/*
TRANSAÇÕES INVÁLIDAS - FALHA SEM MOTIVO:
  Transação inválida 1:
  Órgão: MEC
  Data: 22/01/2024
  Valor: R$ 1100.00
  Status: falha
  MOTIVO: NÃO INFORMADO!
*/

/*
Ajustes nas estatísticas (excluindo transações inválidas)
*/
function historia6() {
    console.log("HISTÓRIA DE USUÁRIO 6");
    
    /*
    Identificar transações inválidas
    */
    const transacoesInvalidas = dadosRepasse.filter(r => 
        r.status === "falha" && (!r.motivo || r.motivo.trim() === "")
    );
    
    /*
    Criar conjunto de dados válidos
    */
const dadosValidos = dadosRepasse.filter(r => 
        !(r.status === "falha" && (!r.motivo || r.motivo.trim() === "")
        ));
    
    console.log(`Transações inválidas removidas: ${transacoesInvalidas.length}`);
    console.log(`Total de transações válidas: ${dadosValidos.length}`);
    
    // Recalcular totais com dados válidos
const totalValidoSucesso = dadosValidos.filter(r => r.status === "sucesso").length;
const totalValidoFalha = dadosValidos.filter(r => r.status === "falha").length;
    
    console.log("ESTATÍSTICAS AJUSTADAS");
    console.log(`Repasses válidos com sucesso: ${totalValidoSucesso}`);
    console.log(`Repasses válidos com falha: ${totalValidoFalha}`);
    console.log(`Total geral válido: ${dadosValidos.length}`);
    
    return dadosValidos;
}
    historia6()
/*
Transações inválidas removidas: 1
Total de transações válidas: 102
ESTATÍSTICAS AJUSTADAS
Repasses válidos com sucesso: 62
Repasses válidos com falha: 40
Total geral válido: 102
*/

/*
Execução principal de todas as histórias
*/
function executarTodasHistorias() {
    console.log("SIMULADOR TÉLOS - RESULTADOS COMPLETOS");
    
/*
Executar cada história
*/
    historia1(); /*Total de repasses*/
    historia2(); /*Análise por status*/
    historia3(); /*/ Estatísticas gerais*/
    historia4("Polícia Civil"); /*Busca por órgão*/
    const transacoesInvalidas = historia5(); /*Tratamento de erros*/
    const dadosValidos = historia6(); /*Estatísticas ajustadas*/
    
    console.log("SIMULAÇÃO CONCLUÍDA");
}

/*
Executar todas as histórias
*/
executarTodasHistorias();
/*

SIMULADOR TÉLOS - RESULTADOS COMPLETOS
HISTÓRIA DE USUÁRIO 01
Total de repasses processados: 103
HISTÓRIA DE USUÁRIO 02
a. Repasses bem sucedidos: 62
a. Quantidade total: 62
b. Quantidade por Órgão: 
      - Polícia Civil: 7
      - Polícia Militar: 7
      - Corpo de Bombeiros: 6
      - Receita Federal: 6
      - Defesa Civil: 6
      - Detran: 6
      - Ibama: 6
      - Anvisa: 6
      - Cetesb: 6
      - MEC: 2
      - Ministério da Saúde: 3
      - Ministério da Educação: 1
c. Valor total: R$ 342250.00
d. Valor por órgão:
   - Polícia Civil: R$ 38200.00
   - Polícia Militar: R$ 33600.00
   - Corpo de Bombeiros: R$ 43500.00
   - Receita Federal: R$ 49500.00
   - Defesa Civil: R$ 25500.00
   - Detran: R$ 31500.00
   - Ibama: R$ 34500.00
   - Anvisa: R$ 37500.00
   - Cetesb: R$ 43500.00
   - MEC: R$ 1500.00
   - Ministério da Saúde: R$ 2850.00
   - Ministério da Educação: R$ 600.00
Repasses com falhas
a. Quantidade total: 41
b. Quantidade por órgão:
   - Polícia Rodoviária Federal: 7
   - Guarda Municipal: 6
   - Ministério Público: 6
   - Polícia Federal: 6
   - Inmetro: 6
   - Susep: 6
   - Ministério da Educação: 2
   - MEC: 2
c. Quantidade por motivo:
   - Problemas técnicos: 12
   - Documentação incompleta: 1
   - Erro no sistema: 1
   - Falta de recursos: 1
   - Dados incorretos: 6
   - Erro humano: 6
   - Sistema fora do ar: 5
   - Recursos insuficientes: 5
   - dados inválidos: 1
   - falta de verba: 1
   - falta de limite: 1
d. Valor total: R$ 234200.00
e. Valor por órgão:
   - Polícia Rodoviária Federal: R$ 44100.00
   - Guarda Municipal: R$ 22500.00
   - Ministério Público: R$ 55500.00
   - Polícia Federal: R$ 40500.00
   - Inmetro: R$ 19500.00
   - Susep: R$ 49500.00
   - Ministério da Educação: R$ 700.00
   - MEC: R$ 1900.00
f. Valor por motivo:
   - Problemas técnicos: R$ 89500.00
   - Documentação incompleta: R$ 3500.00
   - Erro no sistema: R$ 9000.00
   - Falta de recursos: R$ 6500.00
   - Dados incorretos: R$ 19500.00
   - Erro humano: R$ 38100.00
   - Sistema fora do ar: R$ 19000.00
   - Recursos insuficientes: R$ 46500.00
   - dados inválidos: R$ 300.00
   - falta de verba: R$ 800.00
   - falta de limite: R$ 400.00

HISTÓRIA DE USUÁRIO 03
a. Repasse com maior valor:
   Órgão: Ministério Público
   Data: 20/01/2024
   Valor: R$ 9500.00
   Status: falha
b. Repasse com menor valor:
   Órgão: Ministério da Educação
   Data: 12/01/2024
   Valor: R$ 300.00
   Status: falha
c. Dia com mais repasses: 22/01/2024 (4 repasses)
d. Órgão com mais repasses: Polícia Militar (7 repasses)
e. Órgão com mais repasses com sucesso: Polícia Militar (7 repasses)
f. Órgão com mais repasses falhados: Polícia Rodoviária Federal (7 repasses)
g. Motivo de falha com mais repasses: Problemas técnicos (12 repasses)

HISTÓRIA DE USUÁRIO 04
Busca automática por: Polícia Civil
Total de transações encontradas: 7
  Transação 1:
  Órgão: Polícia Civil
  Data: 01/01/2024
  Valor: R$ 5500.00
  Status: sucesso
  Transação 2:
  Órgão: Polícia Civil
  Data: 16/01/2024
  Valor: R$ 5200.00
  Status: sucesso
  Transação 3:
  Órgão: Polícia Civil
  Data: 31/01/2024
  Valor: R$ 5300.00
  Status: sucesso
  Transação 4:
  Órgão: Polícia Civil
  Data: 15/01/2024
  Valor: R$ 5400.00
  Status: sucesso
  Transação 5:
  Órgão: Polícia Civil
  Data: 30/01/2024
  Valor: R$ 5500.00
  Status: sucesso
  Transação 6:
  Órgão: Polícia Civil
  Data: 14/01/2024
  Valor: R$ 5600.00
  Status: sucesso
  Transação 7:
  Órgão: Polícia Civil
  Data: 29/01/2024
  Valor: R$ 5700.00
  Status: sucesso
 
HISTÓRIA DE USUÁRIO 5
TRANSAÇÕES INVÁLIDAS - FALHA SEM MOTIVO:
  Transação inválida 1:
  Órgão: MEC
  Data: 22/01/2024
  Valor: R$ 1100.00
  Status: falha
  MOTIVO: NÃO INFORMADO!

HISTÓRIA DE USUÁRIO 6
Transações inválidas removidas: 1
Total de transações válidas: 102
ESTATÍSTICAS AJUSTADAS
Repasses válidos com sucesso: 62
Repasses válidos com falha: 40
Total geral válido: 102
SIMULADOR TÉLOS - RESULTADOS COMPLETOS
HISTÓRIA DE USUÁRIO 01
Total de repasses processados: 103
HISTÓRIA DE USUÁRIO 02
a. Repasses bem sucedidos: 62
a. Quantidade total: 62
b. Quantidade por Órgão: 
      - Polícia Civil: 7
      - Polícia Militar: 7
      - Corpo de Bombeiros: 6
      - Receita Federal: 6
      - Defesa Civil: 6
      - Detran: 6
      - Ibama: 6
      - Anvisa: 6
      - Cetesb: 6
      - MEC: 2
      - Ministério da Saúde: 3
      - Ministério da Educação: 1
c. Valor total: R$ 342250.00
d. Valor por órgão:
   - Polícia Civil: R$ 38200.00
   - Polícia Militar: R$ 33600.00
   - Corpo de Bombeiros: R$ 43500.00
   - Receita Federal: R$ 49500.00
   - Defesa Civil: R$ 25500.00
   - Detran: R$ 31500.00
   - Ibama: R$ 34500.00
   - Anvisa: R$ 37500.00
   - Cetesb: R$ 43500.00
   - MEC: R$ 1500.00
   - Ministério da Saúde: R$ 2850.00
   - Ministério da Educação: R$ 600.00
Repasses com falhas
a. Quantidade total: 41
b. Quantidade por órgão:
   - Polícia Rodoviária Federal: 7
   - Guarda Municipal: 6
   - Ministério Público: 6
   - Polícia Federal: 6
   - Inmetro: 6
   - Susep: 6
   - Ministério da Educação: 2
   - MEC: 2
c. Quantidade por motivo:
   - Problemas técnicos: 12
   - Documentação incompleta: 1
   - Erro no sistema: 1
   - Falta de recursos: 1
   - Dados incorretos: 6
   - Erro humano: 6
   - Sistema fora do ar: 5
   - Recursos insuficientes: 5
   - dados inválidos: 1
   - falta de verba: 1
   - falta de limite: 1
d. Valor total: R$ 234200.00
e. Valor por órgão:
   - Polícia Rodoviária Federal: R$ 44100.00
   - Guarda Municipal: R$ 22500.00
   - Ministério Público: R$ 55500.00
   - Polícia Federal: R$ 40500.00
   - Inmetro: R$ 19500.00
   - Susep: R$ 49500.00
   - Ministério da Educação: R$ 700.00
   - MEC: R$ 1900.00
f. Valor por motivo:
   - Problemas técnicos: R$ 89500.00
   - Documentação incompleta: R$ 3500.00
   - Erro no sistema: R$ 9000.00
   - Falta de recursos: R$ 6500.00
   - Dados incorretos: R$ 19500.00
   - Erro humano: R$ 38100.00
   - Sistema fora do ar: R$ 19000.00
   - Recursos insuficientes: R$ 46500.00
   - dados inválidos: R$ 300.00
   - falta de verba: R$ 800.00
   - falta de limite: R$ 400.00

b. Repasse com menor valor:
   Órgão: Ministério da Educação
   Data: 12/01/2024
   Valor: R$ 300.00
   Status: falha
c. Dia com mais repasses: 22/01/2024 (4 repasses)
d. Órgão com mais repasses: Polícia Militar (7 repasses)
e. Órgão com mais repasses com sucesso: Polícia Militar (7 repasses)
f. Órgão com mais repasses falhados: Polícia Rodoviária Federal (7 repasses)
g. Motivo de falha com mais repasses: Problemas técnicos (12 repasses)

HISTÓRIA DE USUÁRIO 04
Busca automática por: Polícia Civil
Total de transações encontradas: 7
  Transação 1:
  Órgão: Polícia Civil
  Data: 01/01/2024
  Valor: R$ 5500.00
  Status: sucesso
  Transação 2:
  Órgão: Polícia Civil
  Data: 16/01/2024
  Valor: R$ 5200.00
  Status: sucesso
  Transação 3:
  Órgão: Polícia Civil
  Data: 31/01/2024
  Valor: R$ 5300.00
  Status: sucesso
  Transação 4:
  Órgão: Polícia Civil
  Data: 15/01/2024
  Valor: R$ 5400.00
  Status: sucesso
  Transação 5:
  Órgão: Polícia Civil
  Data: 30/01/2024
  Valor: R$ 5500.00
  Status: sucesso
  Transação 6:
  Órgão: Polícia Civil
  Data: 14/01/2024
  Valor: R$ 5600.00
  Status: sucesso
  Transação 7:
  Órgão: Polícia Civil
  Data: 29/01/2024
  Valor: R$ 5700.00
  Status: sucesso
 
HISTÓRIA DE USUÁRIO 5
TRANSAÇÕES INVÁLIDAS - FALHA SEM MOTIVO:
  Transação inválida 1:
  Órgão: MEC
  Data: 22/01/2024
  Valor: R$ 1100.00
  Status: falha
  MOTIVO: NÃO INFORMADO!

HISTÓRIA DE USUÁRIO 6
Transações inválidas removidas: 1
Total de transações válidas: 102
ESTATÍSTICAS AJUSTADAS
Repasses válidos com sucesso: 62
Repasses válidos com falha: 40
Total geral válido: 102
SIMULAÇÃO CONCLUÍDA
*/