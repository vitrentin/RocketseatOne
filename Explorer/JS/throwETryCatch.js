// throw (disparar/lançar) e  try (tentar)...catch (pegar/capturar)
/*
  Nesta aula veremos sobre o throw e try/catch. 
  São parte do controle de fluxo da aplicação.

  Throw em inglês significa lançar, disparar, 
  catch quer dizer pegar e try tentar.

  Isso significa que vamos tentar executar um bloco de código, 
  e se der algum erro, será disparado e capturado na nossa aplicação. 
  Suponhamos que haja uma função que dispare um erro 
  caso não seja passado um parâmetro dessa função.
*/
function sayMyName(name = '') {
  if (name === '') {
      throw 'Nome é obrigatório'
  }

  console.log(name)
}
/*
  Nesse caso, se o nome vier vazio, será disparada uma mensagem.

  Precisamos agora usar o try/catch para capturarmos esse erro, 
  caso contrário, ele irá encerrar nossa aplicação, 
  e nós o faremos da seguinte maneira:
*/
try {
  sayMyName()
} catch(e) {
  console.log(e)
}

console.log('após ao try/catch')
/*
  O try irá executar a função, 
  enquanto o catch vai capturar o erro e atribuir à variável e, 
  que só existe dentro do catch. Após isso, mesmo com o erro, 
  nossa aplicação não será interrompida por completo.


  Se eu executa essa função fora do try catch,
  ela irá dar o erro Uncaught (não pego) não pegou o erro
  e caso tenha mais código abaixo, ele não irá executar,
  acabando com a aplicação

  Dando o erro e entrando no try catch não executa a parte
  do print do name
  */
