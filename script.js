console.log ('Hello, world!');

/*
1. Verificação de Par ou Ímpar:
Crie uma função chamada verificarPar que receba um número
como parâmetro e imprima "Par" ou "Ímpar" dependendo do valor.


let numero = prompt('Digite seu número:')

function verificarPar(numero) {

    if(numero % 2 === 0) {
        console.log(numero + " é igual a par.");
    }else{
        console.log(numero + " é igual a ímpar.");
    }
}

verificarPar(numero);
*/

/*
2. Operações Matemáticas Simples:
Crie uma função chamada calcular que receba dois números
e retorne a soma, subtração, multiplicação e divisão desses números.


let numero1 = parseFloat (prompt('Digite o primeiro número:'))
let numero2 = parseFloat (prompt('Digite o segundo número:'))

function calcular(numero1, numero2) {

    let soma = numero1 + numero2
    let subtracao = numero1 - numero2
    let multiplicacao = numero1 * numero2
    if(num2 === 0){
        console.log("Não dá para dividir por 0!")
    }else{
        let divisao = numero1 / numero2
    }
    console.log("A soma dos números é = " + soma);
    console.log("A subtração dos números é = " + subtracao);
    console.log("A multiplicação dos números é = " + multiplicacao);
    console.log("A divisão dos números é = " + divisao);
}

calcular(numero1, numero2);
*/

/*
3. Laço While para Contagem Regressiva:
Crie um laço while que imprima os números de 
10 até 1 no console, um número por vez.

*/

do {
    text += "The number is " + i;
    i++;
  }
  while (i < 10);