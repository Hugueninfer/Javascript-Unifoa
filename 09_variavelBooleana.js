let isAtivo = true  //Variavel Booleana
console.log(isAtivo)

isAtivo = false  //Variavel Booleana
console.log(isAtivo)
//Verifica se tem valor no nome, caso positivo imprime o nome, caso negativo imprime desconhecido
let nome = ''
console.log(nome || 'Desconhecido' )
nome= 'marcelo'
console.log(nome || null )