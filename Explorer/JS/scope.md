# Scope

* Escopo determina a visibilidade de alguma variável no JS

* Block statement
```js
// vamos iniciar um bloco 
{
  // aqui dentro é um bloco e posso colocar qualquer código
  let x = 0
  console.log(x) // 0
} // aqui fechamos o bloco 
```
O bloco , também criará um novo escopo. Chamamos de `block-scoped`

## var
```js
// var é global e poderá funcionar fora de um escopo de bloco
//var x = 0
// Por baixo dos panos ele faz var x
// hoinsting  "Elevação"
console.log('> existe x antes do bloco?', x) // undefined
{
  var x = 0
  // e x = 0    por isso o undefined
}
console.log('> existe x depois do bloco?', x)
```
## let e const
```js
// const e let são locais e só funcionam no escopo onde foi criada
console.log('> existe y antes do bloco?', y)
{
  let y=0
}
console.log('> existe y depois do bloco?', y)
```
```js
let y = 1
{
   y=0
   console.log('> existe y', y)
}
console.log('> existe y depois do bloco?', y)
```