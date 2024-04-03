// function hoisting

sayMyName();
function sayMyName(){
  console.log('Vinícius')
}
// arrow function 
const myName = (name) => {
  console.log(name)
}
myName('Trentin')

// callback function
function callAgain(name){
  console.log('antes de executar a função callback')
  name()
  console.log('depois de executar a callback')
}
callAgain(
  () => {
    console.log('estou em uma callback')
  }
)
