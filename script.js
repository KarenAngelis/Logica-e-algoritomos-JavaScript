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


CRIANDO LISTA DE COMPRAS

Capture 10 Itens para compor a lista de um supermercado.

Após capturar os 10 itens. imprima-os, separando por vírgula.

alert("Lista de supermercado com 10 itens")

let items = []

for (let item=0; item<10; item++){
    let itemName= prompt("Digite o item: " + (item + 1))

items [item] = itemName
}

alert(items)

JOGO DE ADIVINHAÇÃO

  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas

let result = prompt("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente:")
  xAttempts++
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você advinhou o número em ${xAttempts} tentativas`)

 Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.


  let option
let items = []

while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))
  
  
  if(option == 1) {
    let item = prompt("Digite o nome do item")
    items.push(item) 
  }
  
  else if (option == 2) {
  
    if(items.length == 0) {
      alert("Não existem itens cadastrados")
    } else {
      alert(items)
    }
  
  } else {
    alert("Tchau")
  }
  
  console.log(option, items)

}


OUTRA FORMA DE FAZER:

/*

  Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
  Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  
  --- 
  O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

  Caso o usuário digite 1, ele poderá cadastrar um item em uma lista
  Caso o usuário digite 2, ele poderá ver os itens cadastrados
    Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
  Caso o usuário digite 3, a aplicação deverá ser encerrada.



let option
let items = []

while(option != 3) {

  option =  Number(prompt(`
    Olá usuário! Digite o número da opção desejada
    
    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
  `))

  switch(option) {
    case 1:
      let item = prompt("Digite o nome do item")
      items.push(item) 
      break
    case 2:
      if(items.length == 0) {
        alert("Não existem itens cadastrados")
      } else {
        alert(items)
      }
      break
    case 3: 
      alert("Tchau")
      break
    default:
      alert("Opção inválida. Tente novamente")
  }

}

Estruturando dados com Objetos

Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes


const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190,
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170,
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180,
  },
]

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(patient.name)
}

alert(patientsNames)


CALCULAR IMC
 Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC

 peso / (altura * altura) *

const patients = [
  {
    name: "Luiz",
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: "Alexandra",
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: "Carlos",
    age: 42,
    weight: 90,
    height: 180
  },
]

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

function printPatientIMC(patient) {
  return `
    Paciente ${patient.name} possui o IMC de
    ${IMC(patient.weight, patient.height)}
  `
}

for (let patient of patients) {
  let IMCmessage = printPatientIMC(patient)
  alert(IMCmessage)
}

*/



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