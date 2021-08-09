//1
let palavra1  = "Aprendendo"
console.log("Palavra 1 : " + palavra1 )

//2
let palavra2  = " Strings em JavaScript"

//3
console.log(palavra1.concat(palavra2))

//4
palavra1  = " palavra1"
palavra2  = " palavra2"
palavra3  = " palavra3"

//5
let frase1  = "Esta é a frase com a"
let frase2  = "Esta é a frase com a"
let frase3  = "Esta é a frase com a"

//6,7,8 e 9
console.log(frase1.concat(palavra1))
console.log(frase2.concat(palavra2))
console.log(frase3.concat(palavra3))

//10
substring = 'Primeiro contato com Javascript'
console.log("Substring : " + substring.substr(21,10) )

//11
let cor = "Amarelo,Azul,Verdee e Marron"
console.log( cor.split(","))

//12
texto = "O tipo String do JavaScript é usado para representar informações de texto. É um conjunto de elementos composto por valores inteiros de 16-bits sem sinal. Cada elemento dentro da String ocupa uma posição dentro dessa String. O primeiro elemento está no índice 0, o próximo no índice 1, e assim sucessivamente. O tamanho de uma String é a quantidade de elementos que ela possui. Você pode criar strings usando strings literais ou objetos string"
 let textoreplace = texto.replace(/String/gi,"caractere string")
console.log(textoreplace)