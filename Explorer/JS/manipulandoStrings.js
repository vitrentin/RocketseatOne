// Manipulando Strings e Números

// Transformar String em Número e Número em String

let string = '123'
console.log(Number(string)) // number fica roxo no console
let number = 321
console.log(String(number)) // string fica branco no console

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número
let word = "Paralelepipedo"
console.log(word.length)
let number2 = 1234
console.log(String(number2).length)

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula   
let number3 = 421.2481124
console.log(number3.toFixed(2).replace('.',','))
console.log(Number(number3.toFixed(2).replace('.',',')))  // NaN

// Transforme letras minúsculas em maíusculas. Faça o contrário disso também

let word2 = 'Programar é muito bacana!'
console.log(word2.toUpperCase())
console.log(word2.toLowerCase())
console.log(word2.toUpperCase().toLowerCase())

/*
    Separe um texto que contem espaços, em um novo array ondee
cada texto é uma posição do array. Depois disso, transforme
o array em um texto e onde eram espaços , coloque _
*/
let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(' ')
console.log(myArray) // (5) ['Eu', 'quero', 'viver', 'o', 'Amor!']
console.log(phrase.split('o')) // (4) ['Eu quer', ' viver ', ' Am', 'r!']
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore.toUpperCase())

// Verificar se o texto contém a palavra Amor
let phrase2 = 'Eu quero viver!'
console.log(phrase.includes('Amor'))

// Criar Array com construtor
let myArray2 = new Array('a', 'b', 'c')
console.log(myArray)

// Contar elementos de um array
console.log([
    'a', 
    function(){return 'hello'}, 
    {type: 'Array'}
].length)
console.log([
    'a', 
    function(){return 'hello'}, 
    {type: 'Array'}
] [1]())
console.log([
    'a', 
    function(){return 'hello'}, 
    {type: 'Array'}
] [2].type)

// Transformar uma cadeia de caracteres em elementos de um array
let word3 = 'Manipulação'
console.log(Array.from(word3))

let techs = ['html', 'css', 'js']
// adicionar um item no fim
techs.push('nodejs') // (4) ['html', 'css', 'js', 'nodejs']
// adicionar no começo
techs.unshift('sql') // (5) ['sql', 'html', 'css', 'js', 'nodejs']
// remover do fim
techs.pop() // (4) ['sql', 'html', 'css', 'js']
// remover do começo
techs.shift() // (3) ['html', 'css', 'js']
// pegar somente alguns elementos do array
console.log(techs.slice(1, 3)) // (2) ['css', 'js']
console.log(techs.slice(1, 2)) // (1) ['css']
console.log(techs.slice(1, 1)) // []
// remover  1 ou mais items em qualquer posição do array
// techs.splice(1,1) // (2) ['html', 'js']
// techs.splice(1,2) // (1) ['html']
// techs.splice(1,3) // (1) ['html']
// encontrar a posição de um elemento no array
let index = techs.indexOf('html')
techs.splice(index,1) 
console.log(techs)