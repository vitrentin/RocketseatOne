// Estrutura de repetição
// for
// break - para a execução do loop
// continue - pula a execução do momento
// A estrutura de repetição for tem a seguinte sintaxe:
// for(inicialização de uma variável; condição de continuação para o loop; expressão final)
for(let i = 0; i < 10; i++){
  if(i === 5){
    continue; // quando for 5 não irá printar, passará para o próximo loop
  }
  console.log(i)
}
