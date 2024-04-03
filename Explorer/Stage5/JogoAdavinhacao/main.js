// Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", enterPress(e))
// funções callback
function handleTryClick(event) {
  event.preventDefault() // Não faça o padrão
  // Nesse caso, não envia o formulário

  const inputNumber = document.querySelector("#inputNumber")
  if (Number(inputNumber.value) != "") {
    if (Number(inputNumber.value) > 10) {
      alert("Digite um número de 0 até 10!")
    }
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      // document.querySelector(".screen1").classList.add("hide")
      // document.querySelector(".screen2").classList.remove("hide")
      document.querySelector(
        ".screen2 h2"
      ).innerText = `Vc acertou em\n ${xAttempts} tentativas.`
    }
    inputNumber.value = ""
    xAttempts++

    console.log(inputNumber.value)
  } else {
    alert("Digite um número antes de tentar")
  }
}
function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
function enterPress(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}
