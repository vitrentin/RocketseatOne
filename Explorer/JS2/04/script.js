/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre e calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os parabéns.

  Se o aluno não passou no bimestre,
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome
  do aluno e a nota.
*/
let student = prompt("Qual o nome do(a) aluno(a)?");
let number1 = prompt("Qual a nota da primeira prova?");
let number2 = prompt("Qual a nota da segunda prova?");
let number3 = prompt("Qual a nota da terceira prova?");

let average = (Number(number1) + Number(number2) + Number(number3)) / 3;

let result = average >= 6;
average = average.toFixed(2);
if (result) {
  alert("Parabéns, " + student + "! Sua média foi de : " + average);
} else if (average < 3) {
  alert("Reprovado!");
} else {
  alert(
    student +
      " estude bastante para sua prova de recuperação! Sua média foi de: " +
      average
  );
}
