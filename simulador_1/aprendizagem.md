### SIMULADOR N1 TÉLOS

#### EXPLICAÇÃO DETALHADA DO CÓDIGO EM JAVASCRIPT

- const dadosRepasse = [ 
    
- array de objetos ex:

 {

    "orgao": "Polícia Civil", 
    "data": "01/01/2024", 
    "valor": 5500.00, 
    "status": "sucesso" 

 }];

- const: Define uma constante (não pode ser reatribuída).

- dadosRepasse: Array que armazena TODOS os repasses.


#### Cada objeto dentro do array representa um repasse com:

- orgao: Nome do órgão governamental.

- data: Data do repasse.

- valor: Valor em reais.

- status: "sucesso" ou "falha".

- motivo: Apenas para status "falha".


#### FUNÇÃO historia1() - TOTAL DE REPASSES

function historia1() {
    console.log('HISTÓRIA DE USUÁRIO 1');
    console.log(`Total de repasses processados: ${dadosRepasse.length}`);
    console.log('');
}

#### O que faz:

- Exibe o número total de repasses no sistema.

- dadosRepasse.length: Propriedade que retorna quantos elementos tem no array.

#### Variáveis:

- Não cria variáveis novas, usa diretamente o array principal!

#### FUNÇÃO historia2() - ANÁLISE POR STATUS

function historia2() {
    - FILTRANDO OS DADOS

    const repassesSucesso = dadosRepasse.filter(r => r.status === 'sucesso');
    const repassesFalha = dadosRepasse.filter(r => r.status === 'falha')};

#### O que faz:

- Divide os repasses em dois grupos: sucesso e falha.

#### filter(): 

- Método que cria novo array com elementos que passam no teste.

#### Variáveis:

- repassesSucesso: Array só com repasses de status "sucesso".

#### repassesFalha: 

- Array só com repasses de status "falha".

#### ANÁLISE DOS REPASSES BEM-SUCEDIDOS

    - QUANTIDADE POR ÓRGÃO (SUCESSO)

    const quantidadePorOrgaoSucesso = {};
    repassesSucesso.forEach(r => {
        quantidadePorOrgaoSucesso[r.orgao] = (quantidadePorOrgaoSucesso[r.orgao] || 0) + 1;
    });

#### O que faz:

- Conta quantos repasses cada órgão teve com sucesso.

#### forEach(): 

- Executa função para cada elemento do array.

quantidadePorOrgaoSucesso[r.orgao] || 0: Se não existir, usa 0 (evita undefined)

#### Variáveis:

- quantidadePorOrgaoSucesso: Objeto que armazena {orgao: quantidade}

#### CÁLCULO DE VALORES

    - VALOR TOTAL (SUCESSO).

    const valorTotalSucesso = repassesSucesso.reduce((acc, r) => acc + r.valor, 0);

#### O que faz:

- Soma todos os valores dos repasses bem-sucedidos.

#### reduce(): 

- Reduz array a um único valor (soma acumulada).

#### acc: 

- Acumulador (valor da soma até agora).

- r: Repasse atual sendo processado.

#### Variáveis:

- valorTotalSucesso: Soma de todos os valores de sucesso

#### FUNÇÃO historia3() - ESTATÍSTICAS GERAIS

    - MAIOR E MENOR VALOR

    const repasseMaiorValor = dadosRepasse.reduce((max, r) => r.valor > max.valor ? r : max, dadosRepasse[0]);

#### O que faz:
- Encontra o repasse com maior valor.

#### Operador ternário: 
#### (O operador ternário, também conhecido como operador condicional, é uma forma concisa de escrever uma instrução condicional em várias linguagens de programação)

- condição ? valor_se_verdadeiro : valor_se_falso

- r.valor > max.valor ? r : max: Se valor atual > máximo, atualiza máximo.

#### Variáveis:

- repasseMaiorValor: Objeto completo do repasse de maior valor.

- repasseMenorValor: Objeto completo do repasse de menor valor.

#### CONTAGEM POR DATA E ÓRGÃO

    - DIA COM MAIS REPASSES

    const repassesPorData = {};
    dadosRepasse.forEach(r => {
        repassesPorData[r.data] = (repassesPorData[r.data] || 0) + 1;
    });

#### O que faz:

- Conta quantos repasses aconteceram em cada data.

- Cria objeto no formato: {"01/01/2024": 5, "02/01/2024": 3, ...}

#### FUNÇÃO historia4() - BUSCA POR ÓRGÃO

     function historia4(orgaoBuscado = 'Polícia Civil') {
        const repassesOrgao = dadosRepasse.filter(r => 
        r.orgao.toLowerCase().includes(orgaoBuscado.toLowerCase())
     )};

#### O que faz:

- Filtra repasses de um órgão específico.

toLowerCase(): Converte para minúsculas (busca case-insensitive).

includes(): Verifica se string contém o termo buscado.

orgaoBuscado = 'Polícia Civil': Parâmetro com valor padrão.

#### Variáveis:
- orgaoBuscado: Parâmetro da função (órgão a ser buscado).

- repassesOrgao: Array filtrado com repasses do órgão.

#### FUNÇÃO historia5() - TRATAMENTO DE ERROS

     function historia5() {
        const transacoesInvalidas = dadosRepasse.filter(r => 
        r.status === 'falha' && (!r.motivo || r.motivo.trim() === '')
     )};

#### O que faz:

- Identifica transações problemáticas.

- status === 'falha': Só considera repasses que falharam.

- !r.motivo: Verifica se motivo é null, undefined ou string vazia.

- r.motivo.trim() === '': Verifica se string só tem espaços em branco.

#### Variáveis:

- transacoesInvalidas: Array com transações que têm falha sem motivo.

#### FUNÇÃO historia6() - AJUSTES NAS ESTATÍSTICAS

     function historia6() {
        const transacoesInvalidas = dadosRepasse.filter(r => 
        r.status === 'falha' && (!r.motivo || r.motivo.trim() === '')
     )};
    
        const dadosValidos = dadosRepasse.filter(r => 
        !(r.status === 'falha' && (!r.motivo || r.motivo.trim() === ''))
     );

#### O que faz:

- Remove transações inválidas dos cálculos.

- ! (operador NOT): Inverte a condição (pega tudo que NÃO é inválido).

- Cria novo array apenas com dados confiáveis.

#### Variáveis:

- dadosValidos: Array filtrado sem transações problemáticas.

#### FUNÇÃO EXECUTAR TODAS

 function executarTodasHistorias() {
    console.log('=== SIMULADOR TÉLOS - RESULTADOS COMPLETOS ===\n');
    
    historia1();
    historia2();
    historia3();
    historia4('Polícia Civil');
    const transacoesInvalidas = historia5();
    const dadosValidos = historia6();
    
    console.log('=== SIMULAÇÃO CONCLUÍDA ===');
}

#### O que faz:

- Orquestra a execução de todas as funções.

- Sequência lógica: Do mais simples para o mais complexo.

- transacoesInvalidas e dadosValidos: Armazenam retornos das funções.

#### MÉTODOS E CONCEITOS IMPORTANTES:

#### Array Methods:

- filter(): Filtra elementos baseado em condição.

- forEach(): Executa função para cada elemento.

- reduce(): Reduz array a um único valor.

- map(): Transforma cada elemento (não usado aqui).

#### Object Methods:

- Object.entries(): Converte objeto em array de [chave, valor].

- Object.keys(): Retorna array com apenas as chaves.

#### String Methods:

- toLowerCase(): Converte para minúsculas.

- includes(): Verifica se contém substring.

- trim(): Remove espaços do início e fim.

#### Operadores:

- || (OR): a || b - retorna a se truthy, senão b.

- && (AND): a && b - retorna b se a for truthy.

- ! (NOT): !a - inverte valor booleano.

- ?: (ternário): condição ? valor1 : valor2.

#### RESUMO DO FLUXO:

- Carrega dados → Array de objetos.

- Conta total → historia1().

- Separa por status → historia2().

- Calcula estatísticas → historia3().

- Busca específica → historia4().

- Identifica problemas → historia5().

- Ajusta dados → historia6().


Vale ressalatar que nesse caso, cada função é independente e resolve uma parte específica do problema!