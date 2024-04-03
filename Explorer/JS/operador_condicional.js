// Operador Condicional (Ternário)
// Dependendo da condição, nós receberemos valores diferentes
// Condição então valor 1 se não valor 2
// condition ? value1 : value2

/*
  Os operadores ternários, conhecidos como operadores de condição,
  como o nome sugere, são dependentes de condições e
  podem entregar valores diferentes com base nelas.

  Funciona da seguinte forma;
  condição ? valor1 : valor2
  Exemplo de uso:
*/
// Café da manhã top
let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

// Maior de 18

let age = 16
const canDrive = age >=18 ? 'can drive' : "can't drive"
console.log(canDrive)
