// 1. Declare uma variável de nome weight
// R: let weight = 77
let weight
// 2. Que tipo de dado é a variável acima?
// R: Number  
      console.log(typeof weight) // undefined
/* 3. Declare uma variável e atribua valores
      para cada um dos dados:
          * name: String
          * age: Number (integer)
          *  stars: Number (float)
          *  isSubscribed: Boolean
    R: let dados = {
      name: "Vinícius",
      age: 23,
      stars: 4.8,
      isSubscribed: true
    }
*/
/*
    4. A variável student abaixo é de que tipo de dados?
    R: Tipo Object
    4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
    4.2 Mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.
    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
let student = {
  name: "Vinícius",
  age: 23,
  weight: 77.5,
  isSubscribed: true
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/*
  5. Declare uma variável do tipo Array, de nome student e atribua a ela nenhum valor,
  ou seja, somente o Array vazio
*/
  let students = []

/*
  6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
  (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/
  students = [student]

/*
  7. Coloque no console o valor da posição zero do Array acima
*/
  console.log(students[0])

/*
  8. Crie um novo student e coloque na posição 1 do Array students
*/
  const jhon = {
    name: 'Jhon',
    age: 23,
    weight: 74.5,
    isSubscribed: true
  }
  students[1] = jhon
  console.log(students[1])

/*
  9. Sem  rodar o código responda qual é a resposta do código abaixo e por que?
  Após sua resposta, rode o código e veja se você acertou.
  console.log(a)
  var a = 1
  R: undefined
*/
