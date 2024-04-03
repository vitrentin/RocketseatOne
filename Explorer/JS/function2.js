// function expression
// function anonymous
// parâmetros (parameters)
const sum = function(number1, number2){
  //console.log(number1+number2)
  let total = number1 + number2
  // *obs: quando não tem return, retorna undefined
  return total
}
sum(2,3) // arguments - argumentos
sum(34,16)
let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`) // o número 1 é 34
console.log(`o número 2 é ${number2}`) // o número 2 é 25
console.log(`a soma é ${sum(number1,number2)}`) // 59 a soma é undefined *obs
// se não colocar o operador na variável, essa variável pode ser global e gerar um erro no fututo