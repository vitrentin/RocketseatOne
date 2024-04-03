/* Expressões e Operadores

- Expressions
- Operators
    Binary
    Unary
    Ternary
*/
// Expresssões são bem tranquilas, porque expressões são qualquer linha de código que
// resolve alguma coisa no JavaScript, um exemplo é a expressão:
// let number
// Isso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.
let number = 1;

(function(){
    console.log('alo')
})()
/*
    let number = 1 e a função executável depois:
    por baixo dos panos ele entende:
    let number = 1()() executar o 1, passar uma função como argumento
    e vai receber de volta uma outra função
*/
/*
Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula),
o final de uma expressão é facultativa, mas em algumas outras linguagens é obrigatório o uso de ; (ponto e vírgula).

Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável,
é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:

let number = 1

(function(){
  console.log('alo')
})()
Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.

*/
// Operadores:
// Binário:
console.log(number + 1)
// Unário:
console.log(--number) // ++number incrementa antes, number++ incrementa depois
// só possui 1 elemento

// Ternário:
console.log(true ? 'alo' : 'nada')
// Como você pode observar, temos no unário um elemento, no binário dois elementos e no ternário três elementos.

/*
    new

    * left-hand-side expression
    * criar um novo objeto
    
    A expressão new, também denominada como left-hand-side expression,
    serve para criar um novo objeto usando as funções construtoras que
    temos por padrão no JavaScript.

    Um exemplo de seu uso é:

    let date = new Date('2020-12-01')
    console.log(date.__proto__)
*/

let name = new String('Mayk')
name.surName = 'Brito'
let age = new Number(23)
console.log(name, age)
let date = new Date('2020-12--01')
console.log(date__proto__)

/* Comentário do Biro³

    O operador "new" em JavaScript é usado para criar uma nova instância de uma classe ou construtor.

    Segue estão alguns exemplos de como o operador "new" pode ser usado:

    Criando uma nova instância de uma classe:
    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    const person = new Person('João');
    console.log(person.name); // Output: "João"
    Criando uma nova instância de um construtor:
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }

    const car = new Car('Chevrolet', 'Fiat');
    console.log(car.make); // Output: "Chevrolet"
    console.log(car.model); // Output: "Fiat"
    Usando o operador new com uma função construtora já existente:
    const date = new Date();
    console.log(date); // Output: Thu Jan 12 2023 13:54:57 GMT-0300 (Brasilia Standard Time)
    Usando o new com uma função arrow
    const Pessoa = (name) => {
        this.name = name;
    }
    const pessoa = new Pessoa('Lucas')
    console.log(pessoa) // Output: Erro
    Note que a função arrow não tem acesso ao this, então usar new com ela gera um erro.
*/

/*
    Operadores unários
    typeof
    delete

    Em operadores unários, os mais comuns são o typeof e o delete, onde o typeof serve para saber o tipo de dado que temos na expressão, e o delete vai deletar alguma propriedade de um objeto, desde que ela exista.

Exemplos de uso:

    delete 
    const person = {
        name: 'Mayk',
        age: 25,
    }
    delete person.age

    console.log(person)
    Nesse caso estamos deletando a propriedade age do objeto person.

    console.log(tyepof "mayk")
    Aqui vemos qual o tipo de dado que temos, nesse caso uma string.
*/
const person = {
    name: 'Mayk',
    age: 25,
}
console.log(typeof 'mayk')
delete person.age
console.log(person)

/*
Falaremos nessa aula sobre operadores aritméticos, que nos possibilitam fazer cálculos matemáticos.

Operadores Aritméticos: 
Multiplicação, divisão, soma, subtração
Resto da divisão, incremento, decremento, exponencial

O operador de multiplicação é o * (asterisco);

O operador de divisão é a / (barra);

O operador de soma é o + (positivo);

O operador de subtração é o - (negativo).

Outros operadores aritméticos incluem o resto de divisão, incremento, decremento e exponencial, com exemplos a seguir:

/* resto da divisão: sinal % */
let remainder
remainder = 11 % 3
console.log(remainder) // 2   3*3=9 11-9=2

/* incremento: sinal ++ */
let increment = 0

console.log(++increment)
console.log(increment)

/* decremento: sinal -- */
let decrement = 0
decrement--
console.log(decrement--)
console.log(decrement)
/* exponencial: sinal ** */
console.log(2 ** 3) // 8    2 elevado a 3

/*
    Vamos falar sobre um operador que agrupa expressões, os parênteses.

    Na matemática, temos uma noção de precedência, onde certos operadores têm de ser realizados primeiro,
    e não é diferente para um computador, porém, podemos utilizar os parênteses para realizar o agrupamento
    de alguns operadores, que moverá a precedência do cálculo.
*/
    let total2 = 2 + 3 * 5
    console.log(total2)
    //com essa precedência, nosso resultado é 17.

    let total3 = (2 + 3) * 5
    console.log(total3)
    // o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.


// Operadores de comparação

// Irá comparar valores e retornar um Boolean com resposta à comparação

let one = 1
let two = 2

// ==    igual a
 console.log( two == 1)
 console.log( one == '1')

// !=   diferente de
 console.log(one != two)
 console.log(one != 1) 
 console.log(one != '1')

// ===      estritamente igual a
console.log( one === '1') // false, o tipo da variável é diferente
console.log( one === 1)

// !==      estritamente diferente de
consosole.log( two !== '2') //true é diferente do tipo, int e string
console.log( two !== 2)

// >        Maior que
console.log( one > two)

// >=       Maior ou igual a
console.log( one >= 1)
console.log( two >= 1)

// <        Menor que
console.log( one < two)

// <=       Menor igual a
console.log( one <= two)
console.log( one <= 1)
console.log( one <= 0)

/*
    Veremos nesta aula sobre operadores de atribuição. 
    Quando falamos em atribuição, queremos na verdade dizer assignment,
    que já vimos bastante, mas podemos também realizar diferentes tipos de atribuição,
    usando operadores aritméticos.

Exemplos:
*/
// Operadores de atribuição (Assignment)
let x

// assignment normal:
x = 1

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
x *= 2

// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2

