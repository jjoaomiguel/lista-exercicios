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



let contador = 10

while (contador >= 1) {
    console.log(contador);
    contador--;
}
console.log ("FIM!")

*/

/* 
4. Manipulação de Strings: 
Crie uma função chamada inverterTexto que receba uma string como 
parâmetro e retorne essa string invertida.



let string = prompt('Digite sua palavra:')

function inverterTexto(string) {
    let reversed = string.split('').reverse().join('');
    console.log(reversed)
}

inverterTexto(string)

*/

/*
5. Contagem de Caracteres em uma String:
Crie uma função chamada contarCaracteres que receba
uma string e retorne o número de caracteres dessa string.



let string = prompt('Digite sua palavra:')

function contarCaracteres(string) {
    let qntdLetras = string.length;
    console.log(qntdLetras);
}

contarCaracteres(string)

*/

/*
6. Acessando Propriedades de Objetos:
Crie um objeto carro com as propriedades marca, modelo e ano.
Imprima no console o valor da propriedade modelo.

*/

const carro = {
    type:'BMW',
    model: 'i3',
    year: '2013'
};
console.log('A marca do carro é uma ' + carro.type + ' do tipo ' + carro.model + ' do ano de lanaçamento ' + carro.year + '.');
