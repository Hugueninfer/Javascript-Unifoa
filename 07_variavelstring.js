let curso = "Javascript "  //Variavel String
let disciplina = 'Ambiente Web II'  //Variavel String
console.log("Curso : " + curso)
console.log("Disciplina : " + disciplina)

// Busca a posição 6 na variável curso
curso = "Javascript "  //Variavel String
console.log("charAt : " + curso.charAt(6)) 

// Busca a posição dentro de uma String
disciplina = 'Ambiente Web II'  //Variavel String
console.log("indexOf : " + disciplina.indexOf('I',0)) 

// Busca parte de uma String
disciplina = 'Ambiente Web II'  //Variavel String
console.log("Substring : " + disciplina.substr(9,3) )

// Função de concatenação (união)
curso = "Javascript "  //Variavel String
disciplina = 'Ambiente Web II'  //Variavel String
console.log("Concat : " + curso.concat(disciplina).concat( "!") )

// Função de replace (substituição)
curso = "Curso de Javascript "  //Variavel String
let resultado = curso.replace("Javascript","JS")
console.log("Replace : " + resultado)

// Função split (Transformando uma string num vetor)
let nomes = "João,Maria,Carlos,Joana"
console.log(nomes)
console.log( nomes.split(","))