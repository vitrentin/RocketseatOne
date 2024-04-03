// for...in

let person = {
  name: 'John',
  age: 30,
  weight: 88.35,
}

for(let property in person){
  console.log(property) // vai printar as propriedades do objeto: name, age e weight
  console.log(person['name']) // person.name   person.property
}                      
