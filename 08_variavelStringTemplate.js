let nome = "Marcelo "  //Variavel String
let concatenacao = 'Olá ! ' + nome //Variavel String
let msg = 'SEja bemvindo'
let confinal = concatenacao + msg
console.log(confinal)

const template = `
    Olá !
    ${nome} 
    ${msg} `
//Concatenação imprime na mesma linha e Template em duas linhas
console.log(template)
