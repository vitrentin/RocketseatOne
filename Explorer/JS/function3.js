// Função é um liquidificador

function fazerSuco(fruta1, fruta2){
  return fruta1 + fruta2
}
const copo = fazerSuco('banana', 'maçã')
console.log(copo)

// function scope
let subject = 'create video'
function createThink(subject){
  subject = 'study'
  return subject
}
console.log(subject)
console.log(createThink(subject))

 