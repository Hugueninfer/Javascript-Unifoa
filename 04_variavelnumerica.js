const numero1 = 1.5555 //Forma padrão de criação de variáveis numéricas
const numero2 = Number('2.0') //Converte uma string em número
console.log(numero1,numero2)
console.log(typeof numero1)
console.log(typeof numero2)

console.log(Number.isInteger(numero1))
console.log(Number.isInteger(numero2))

const nota1 =  8.8 //Valor real 
const nota2 = 7.5 //Valor real
let media = (nota1+nota2)/2
console.log(media.toFixed(1)) // Fixa em o número de casas decimas
console.log(media.toString()) //Transforma m String

// ALguns cuidados com números
console.log('Alguns cuidados')
console.log(7/0)
console.log("10"/2)
console.log("Marcelo"*2)
console.log(0.1 + 0.7)