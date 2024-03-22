// alert("Olá mundo")

/* 

AULA 01

Encontre a solução ao problema:

Pergunte  nome do usuário e escreva a mensagem:
"Olá, [nome do usuário]"

Estou aprendendo agora:
Executar funções
Variáveis
Concatenação
Tipo de dado: string (cadeia de caracteres)
Básica de sintaxe

RESOLUÇÃO 01
let nome = prompt("Qual o seu nome?")
alert("Olá, " + nome)


RESOLUÇÃO 02
// Solicita o nome do usuário
let nomeUsuario = prompt("Digite seu nome:");

// Cria a mensagem com o nome do usuário
let mensagem = "Olá, " + nomeUsuario;

// Exibe a mensagem
alert(mensagem);

AULA 02

Solicite 2 numeros. faça a soma deles e apresente o resultado ao usuário

Usamos a função prompt() para solicitar dois números ao usuário.
Os números fornecidos pelo usuário são convertidos para números inteiros usando a função parseInt().
Em seguida, realizamos a soma dos dois números e armazenamos o resultado na variável soma.
Finalmente, usamos a função alert() para exibir o resultado da soma ao usuário.
Ao executar este script, o usuário será solicitado a inserir dois números. O script então calculará a soma desses números e exibirá o resultado em um alerta.

RESOLUÇÃO 01
alert("Iremos somar 2 números")
let numberOne = prompt("Digite o primeiro número:")
let numberTwo = prompt("Digite o segundo número:")
let result = Number(numberOne) + Number(numberTwo)
alert("Resultado final: " + result)



RESOLUÇÃO 02
// Solicita o primeiro número ao usuário e converte para um número inteiro
let numberOne = parseInt(prompt("Digite o primeiro número:"));

// Solicita o segundo número ao usuário e converte para um número inteiro
let numberTwo = parseInt(prompt("Digite o segundo número:"));

// Calcula a soma dos dois números
let soma = numberOne + numberTwo;

// Apresenta o resultado ao usuário
alert("A soma dos números é: " + soma);




  Capturar 2 números
  e fazer as operações matemáticas
  de soma, subtração, multiplicação,
  divisão e resto da divisão.

  E para cada operação, mostrar um alerta
  com o resultado.

Resolução 01

alert("Vamos realizar algumas operações matemáticas")
let numberOne = parseInt(prompt("Ditite o primeiro número: "))
let numberTwo = parseInt(prompt("Ditite o segundo número: "))

let resultSum = numberOne + numberTwo;
alert ("O Resultado da some é: " + (resultSum))

let resultSubtraction = numberOne - numberTwo;
alert ("O Resultado da Subtração é: " + (resultSubtraction))

let resultMultiplication = numberOne * numberTwo;
alert ("O Resultado da Multiplicação é: " + (resultMultiplication))

let resultDivision = numberOne / numberTwo;
alert ("O Resultado da Divisão é: " + (resultDivision))

let resultRest = numberOne % numberTwo;
alert ("O Resultado do Resto é: " + (resultRest))


Resolução 02

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da divisão: ' + restDiv)




  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota


let student = prompt("Qual o nome do(a) aluno(a)?")
let n1 = prompt("Qual a nota da primeira prova?")
let n2 = prompt("Qual a nota da segunda prova?")
let n3 = prompt("Qual a nota da terceira prova?")

let average = (Number(n1) + Number(n2) + Number(n3)) / 3

let result = average > 6

average = average.toFixed(2)

if (result) {
  alert("Parabéns, " + student + "! Sua média foi de: " + average)
} else if (average < 3) {
  alert("Reprovado")
} else {
  alert(student + " estude para sua prova de recuperação! Sua média foi de: " +  average)
}


Resolução 02
alert("Aqui vamos ver qual é a sua nota")

let student = prompt("Qual é o seu nome?");
let noteOne = parseInt(prompt("Digite a primeira nota: "))
let noteTwo = parseInt(prompt("Digite a segunda nota: "))
let noteThree = parseInt(prompt("Digite a terceira nota: "))

let noteResult = (noteOne + noteTwo + noteThree) / 3;

alert("Sua nota Final é: " + (noteResult));

let result = noteResult > 6

noteResult = noteResult.toFixed(2)


if (noteResult >= 6){
    alert ("Parabéns, " + student + "! Sua média foi de: " + noteResult);
}else{
    alert (student + " estude para sua prova de recuperação! Sua média foi: " +  noteResult);
}

*/

