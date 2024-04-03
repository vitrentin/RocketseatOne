// Variáveis e tipos de dados
// declaração or declaration
var name

// assigment or atribuição de valores
name = "Mayk"

// que tipo de dado foi colocado na variável

console.log(typeof name)

//let age = 20
//let isHuman = true
// agrupamento de declarações
let age, isHuman
age = 20
isHuman = true
// multiplos argumentos na função
console.log(name, age, isHuman)
// escrita de texto + variáveis
// concatenando valores
console.log('O '+name +' tem '+age+' anos.')

// interpolando valores com templates literals or template strings
console.log(`o ${name} tem ${age} anos.`)

// Object

const person = {
  name: "Jhon",
  agr: 30,
  weight: 88.6,
  isAdmin: true
}
console.log(`${person.name} tem ${person.age} anos.`)

// Array
const animals = [
  'Lion',
  'Monkey',
  {
    name: 'Cat',
    age: 3
  }
]

// acessar valores dentro do Array
 console.log(animals[2].name)
 console.log(animals.length)
