console.log('Hello, world!');

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



const carro = {
    type:'BMW',
    model: 'i3',
    year: '2013'
};
console.log('A marca do carro é uma ' + carro.type + ' do tipo ' + carro.model + ' do ano de lanaçamento ' + carro.year + '.');

*/

/*
7. Função com Parâmetros Opcionais:
Crie uma função chamada mensagemPersonalizada que tenha dois parâmetros,  nome e mensagem,
sendo que o parâmetro mensagem deve ter um valor padrão de "Olá!".
A função deve imprimir a mensagem personalizada com o nome da pessoa.



let nome = prompt('Digite seu nome: ');
const mensagem = ('Olá! ');

function mensagemPersonalizada(nome, mensagem) {
    console.log(mensagem + nome);
}

mensagemPersonalizada (nome, mensagem)

*/

/*
8. Calculadora de Média:
Crie uma função chamada media que receba 3 números como
parâmetros e retorne a média aritmética desses números.



let n1 = parseFloat (prompt('Digite o primeiro número: '))
let n2 = parseFloat (prompt('Digite o segundo número: '))
let n3 = parseFloat (prompt('Digite o terceiro número: '))

function media (n1, n2, n3) {
    let media = (n1 + n2 + n3) / 3
    console.log('A média dessas 3 notas são: ' + media);
}

media(n1,n2,n3)

*/

/*
9. Laço for com Condição:
Crie um laço for que percorra de 1 a 20 e imprima "Múltiplo de 3"
nos  números que sejam múltiplos de 3, e "Não múltiplo de 3" nos outros números.



let n = 0

while (n < 20) {
    n++
    let resultado = n % 3

    if (resultado === 0) {
        console.log (n + ' é múltiplo de 3');
    }else {
        console.log(n + ' não é múltiplo de 3');
    }
}

*/

/*
10. Verificação de Palavra Palíndroma:
Crie uma função chamada verificarPalindromo que receba uma palavra e verifique
se ela é um palíndromo (ex: "arara"). A função deve retornar true ou false.



let string = prompt('Digite uma palavra: ')

function verificarPalindromo (string) {
    let reverse = string.split('').reverse('').join('');
    if (string === reverse) {
        console.log('Essa palavra é um Palíndromo');
    }else {
        console.log('Essa palavra não é um Palíndromo');
    }
}
verificarPalindromo (string)

*/

// LISTA 1 FEITA

/*
11. Verificação de Número Positivo ou Negativo:
Crie uma função chamada verificarSinal que receba um número como
parâmetro e imprima "Positivo", "Negativo" ou "Zero" conforme o caso.


let n = prompt('Digite um número: ')

function verificarSinal(n) {
    if (n > 0) {
        console.log('Positivo')
    } else if (n < 0) {
        console.log('Negativo')
    } else if (n == 0) {
        console.log('Zero')
    }
}

verificarSinal(n)
*/

/*
12. Função para Converter Celsius em Fahrenheit:
Crie uma função chamada converterTemperatura que receba uma
temperatura em Celsius e retorne o valor convertido para Fahrenheit.



let temp = parseFloat(prompt('Digite uma temperatura em Celcius'))

function converterTemperatura(temp) {
    const conversao = (temp * 1.8) + 32
    console.log('A conversão dessa temperatura para Fahrenheit é: ' + conversao)
}

converterTemperatura(temp)

*/

/*
13. Laço While para Somatório:
Crie um laço while que some os números de 1 até 100
e imprima o resultado final.



let soma = 0;
let n = 1;

while (n < 101) {
    soma += n;
    n++;
}

console.log("A somatória de 1 a 100 é: " + soma);

*/

/*
14. Substituição de Palavras em String:
Crie uma função chamada substituirPalavra que receba uma string
e substitua todas as ocorrências da palavra "azul" por "vermelho".



let string = prompt('Digite uma frase que contenha a palavra azul: ')

function substituirPalavra(string) {
    let novaString = string.replace('azul', 'vermelho');
    console.log(novaString)
}

substituirPalavra(string)

*/

/*
15. Verificação de Tamanho de String:
Crie uma função chamada verificarTamanho que receba uma
string e informe se ela tem mais de 10 caracteres ou não.



let string = prompt('Digite uma palavra: ')

function verificarTamanho(string) {
    let qntdLetras = string.length;
    if (qntdLetras > 10) {
        console.log('Essa palavra tem mais de 10 caracteres')
    } else {
        console.log('Essa palavra não tem mais de 10 caracteres')
    }
}
verificarTamanho(string)
*/

/*
16. Criando e Acessando Array:
Crie um array chamado frutas com pelo menos 5 frutas diferentes. 
Imprima no console a terceira fruta da lista.



let frutas = ["Maça", "Uva", "Banana", "Laranja", "Mamão"];

console.log(frutas[2]);

*/

/*
17. Função com Valor Padrão em Dois Parâmetros:
Crie uma função chamada saudacao que tenha dois parâmetros,
nome e saudacao, sendo saudacao padrão "Bem-vindo(a)".
A função deve retornar a frase completa.



let nome = prompt('Digite seu nome: ');
let saudacao = 'Bem vindo(a)! '

function saudacaoo(nome, saudacao) {
    console.log(saudacao + nome);
}
saudacaoo(nome, saudacao)

*/

/*
18. Verificação de Nota:
Crie uma função chamada verificarAprovacao que receba uma nota
retorne "Aprovado" se for maior ou igual a 6, e "Reprovado"
se for menor que 6.



let nota = prompt('Digite sua nota: ')

function verificarAprovacao(nota) {
    if (nota >= 6) {
        console.log('Você está Aprovado!')
    } else {
        console.log('Você está Reprovado.')
    }
}
verificarAprovacao(nota)

*/

/*
19. Laço for para Contagem de Pares:
Crie um laço for que percorra os números de 0 a 30
e imprima apenas os números pares.



for (let i = 0; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

*/

/*
20. Contagem de Vogais:
Crie uma função chamada contarVogais que receba uma palavra
e retorne a quantidade de vogais que ela possui.



let string = prompt('Digite uma palavra: ')
let i = 0
let vogais = 'aeiouAEIOU'

function contarVogais(string) {
    for (let letra of string) {
        if (vogais.includes(letra)) {
            i++
        }
    }
    console.log(i)
}
contarVogais(string) 
*/

/*
21. Soma dos Elementos de um Array:
Crie uma função chamada somarArray que receba um array
de números e retorne a soma de todos os elementos.


const n1 = parseFloat(prompt('Digite seu primeiro número: '));
const n2 = parseFloat(prompt('Digite seu segundo número: '));
const n3 = parseFloat(prompt('Digite seu terceiro número: '));
let notas = [n1, n2, n3];

let somaDasNotas = 0;

function somarArray(notas) {
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }
    console.log(somaDasNotas)
}
somarArray(notas)
*/

/*
22. Função para Dobrar Números:
Crie uma função chamada dobrarNumero que receba
um número e retorne o dobro desse número.



let n = parseFloat(prompt('Digite um número: '));

function dobrarNumero(n) {
    dobro = n + n;
    console.log('O dobro desse número é: ' + dobro);
}
dobrarNumero(n)
*/

/*
23. Laço While para Contagem de Pares:
Crie um laço while que imprima todos os números pares de 2 até 20.

*/

let n = 2

while (n <= 20) {
    n++
    if (n % 2 === 0) {
        console.log(n)
    }
}
