//EXERCÍCIOS {reprograma}
//PARTE 01 - IntroVariaveis


//1. Faça uma mensagem de "Olá Mundo!"
alert("Olá Mundo!");

// Aparece uma mensagem e o usuário responde.
alert("Olá meninas");
var digNome = prompt("Digite seu nome");
console.log(digNome)
alert(digNome);



//2. Faça uma saída de soma de 2 números.
var num1 = 4;
var num2 = 4;
var result = num1 + num2;
console.log(result);

// Usuário digita 2 números.
var num1 = prompt("Digite um numero:");
var num2 = prompt("Digite um numero:");
var result = parseInt(num1) + parseInt(num2);
alert(result);



//3. Utilizando variáveis, solicite o ano de nascimento do usuário, calcule sua idade e mostre em um alert.
var anoNasc = prompt("Digite seu ano de nascimento:")
var idade = 2019 - anoNasc;
console.log(anoNasc);
alert(idade);

// Envia uma mensagem ao usuário informando o resultado.
alert("Calcule sua idade");
var ano = prompt("Digite o ano de seu nascimento");
var result = 2019 - ano;
console.log(ano);
alert("Você tem " + result + " anos");



//4. Receba do usuários 3 números e calcule a média entre eles.
alert("Calcule a média dos números");
var num1 = prompt("Digite o primeiro número");
var num2 = prompt("Digite o segundo número");
var num3 = prompt("Digite o terceiro número");
var result = ((num1 + num2 + num3) / 3);
alert("O resultado da media é: " + result);
console.log(result);

// Calculando a média sem o usuário ter enviado os números.
var medis = (1 + 2 + 3) / 3;
console.log(medis);