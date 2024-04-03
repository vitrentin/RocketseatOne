// import qualquerNome from "./utils.js" // nessa linha ele importa e já executa o arquivo
import { text, message } from "./utils.js"
// `import funcaoPadrao, { date, greeting } from './utils.js`
// forma de importe misto

// import { sum as soma } from "./utils.js"
// forma de import: import as
// console.log(soma(2,4))

// import * as calculator from './utils.js
// forma de import: import * as, o * significa todos/múltiplos
// console.log(calculator.divide(4,2))

// console.log(message) não consigo usar a variável message nesse arquivo
// console.log(qualquerNome) // método para usar a variável nesse arquivo
console.log(message, text)
