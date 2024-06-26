/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  'Advinhe o número que estou pensando? Está entre 0 e 10'

  Crie uma lógica para gerar um número aleatório 
  e verificando se o número digitado é o mesmo que o aleatório
  gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  'Erro, tente novamente'

  Caso o usuário acerte o número, apresentar a mensagem:
  'Parabéns! Você advinhou o número em x tentativas'

  Substitua o 'x' da mensagem, pelo número de tentativas.
*/
let result = prompt('Advinhe o número que estou pensando? Está entre 0 e 10')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1;

console.log(result, randomNumber)
while(Number(result) != randomNumber){
  result = prompt('Erro, tente novamente:')
  xAttempts++;
}
if(xAttempts == 1){
  alert(`Parabéns! Você adivinhou em ${xAttempts} tentativa`)
}else{
  alert(`Parabéns! Você adivinhou em ${xAttempts} tentativas`)
}
