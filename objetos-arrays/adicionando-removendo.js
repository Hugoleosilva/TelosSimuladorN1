const alunos = ['Ruan', 'Leandro', 'Maíra']
console.log(alunos)
/*
saída: [ 'Ruan', 'Leandro', 'Maíra' ]
*/

alunos.push('Deisiane')
console.log(alunos)
/*
push: adiciona elemento no final do array 
saída: [ 'Ruan', 'Leandro', 'Maíra', 'Deisiane' ]
*/

alunos.unshift('Rafael')
console.log(alunos)
/*
unshift: adiciona elemento no início do array 
saída: [ 'Rafael', 'Ruan', 'Leandro', 'Maíra', 'Deisiane' ]
*/

alunos.pop()
console.log(alunos)
/*
pop: remove elemento do final do array 
saída: [ 'Rafael', 'Ruan', 'Leandro', 'Maíra' ]
*/

alunos.shift()
console.log(alunos)
/*
shift: remove elemento do início do array 
saída: [ 'Ruan', 'Leandro', 'Maíra' ]
*/