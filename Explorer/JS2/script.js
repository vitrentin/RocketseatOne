/*
  Faça um programa que tenha um menu e apresente a seguinte mensagem:

  Olá usuário! Digite a opção desejada

    1. Cadastrar um item da lista
    2. Mostrar itens cadastrados
    3. Sair do programa.

  ---
  O programa deverá capturar o número digitado pelo usuário e mostrar os seguintes
  cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem:
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.
*/
/*
  Dados de entrada do usuário
  1. número desejado
  2. item da lista

  variáveis
  1. opção digitada
  2. lista de itens
*/
let option = Number(
  prompt(`
Olá usuário! Digite a opção desejada

1. Cadastrar um item da lista
2. Mostrar itens cadastrados
3. Sair do programa.
`)
);
let itens = [];
if (option == 1) {
  itens[0] = prompt("Digite o nome do item");
} else if (option == 2) {
  if (itens.length == 0) {
    alert("Não existem itens cadastrados");
  } else {
    alert(itens);
  }
}
