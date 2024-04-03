/*
  Capture 10 items para compor a lista de um supermercado

  Após capturar os 10 itens, imprima-os, seprando por vírgula.

*/
let items = [];
for(let i=0;i<10;i++){
  items[i] = prompt('Digite o item '+(i+1))
}
alert(items)
