// essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar
const message = "mensagem"
const text = "outra mensagem"
// export default message
// Pode exportar o que quiser, uma função, um texto, ...
// só pode usar um default por arquivo !!!

// named import
export { text, message }
// outra maneira
// export const message = "mensagem"
// const text = "outra mensagem"

// Misto (named e default)

// const date = new Date()
// const greeting = (name) => `hello ${name}`
// export default function (argument) {
//   console.log(date, greeting(argument))
// }
// export { date, greeting }

// import as:

// export function sum(a, b) {
//   return a + b
// }

// import * as:
// export const sum = (a, b) => a + b
// export const multiply = (a, b) => a * b
// export const subtract = (a, b) => a - b
// export const divide = (a, b) => a / b
// ou
// export { sum, multiply, subtract, divide }
