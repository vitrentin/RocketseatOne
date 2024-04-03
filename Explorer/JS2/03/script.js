/*
    Capturar 2 números
    e fazer as operações matemáticas
    de soma, subtração, multiplicação,
    divisão e resto da divisão.

    E para cada operação, mostrar um alerta
    com o resultado.
*/
let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')
let operator = prompt('Digite o operador matemático')
firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)
function calculator(firstNumber, operator, secondNumber){
  switch(operator){
    case '+':
      const sum = firstNumber + secondNumber
      alert('Soma: '+sum)
      break;
    case '-':
      const sub = firstNumber - secondNumber
      alert('Subtração: '+sub)
      break;
    case '*':
      const multi = firstNumber * secondNumber
      alert('Multiplicação: '+multi)
      break;
    case '/':
      const div = firstNumber / secondNumber
      alert('Divisão: '+div)
      break;
    case '%':
      const restDiv = firstNumber % secondNumber
      alert('Resto da divisão: '+restDiv)
      break;
    default:
      alert('Operador inválido')
      break;
  }
  return 0;
}
calculator(firstNumber,operator,secondNumber);
