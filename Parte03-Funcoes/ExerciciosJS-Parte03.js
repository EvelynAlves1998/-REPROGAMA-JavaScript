//EXERCÍCIOS {reprograma}
//PARTE 03 - Funcoes

//1. Crie uma função que seja dada um número retornado ou o número reverso. Exemplo: dado 1234, devolução 4321.
function inverterNumero(numero) {
    return numero.toString().split('').reverse().join('');
}
console.log(inverterNumero(1234));

//Usuário digita os números e o programa retorna o inverso. Exemplo: 123, retorna 321. 
alert('Inverter números');
let num = prompt('Digite os números');

function inverterNumero(num) {
    return num.toString().split('').reverse().join('');
}
console.log(inverterNumero(num));


//2. Crie uma função que receba uma palavra e ordene suas letras em ordem alfabética.
function ordemAlfab(palavras) {
    return palavras.split('').sort().join('');
}
console.log(ordemAlfab('palavras'));

//Usuário digita a palavra que deseja e o programa retorna em ordem alfabética.
alert('Sua palavra em ordem alfabetica');
let palavra = prompt('Digite a palavra que deseja inverter')

function ordemAlfab(palavras) {
    return palavra.split('').sort().join('');
}
console.log(ordemAlfab('palavra'));


//3. Crie uma função que receba uma string, contenha nome e sobrenome e retorne como inicias. Exemplo: dado "Débora Borges", retorne "DB".
function pegaIniciais(nomeCompleto){
    let letra1 = nomeCompleto.substring(0,1);
     let indice = nomeCompleto.indexOf(" ");
     let letra2 = nomeCompleto.substring(indice+1,indice+2)
     return letra1 + letra2;
   }
   let resultadonome = "Débora Borges";
   
   console.log(pegaIniciais(resultadonome ));


//4. Crie uma função que receba a quantidade de bilhetes vendidos em um concurso e ganhe um bilhete.
function sorteioBilhetes(sorteios){
    var sorteio = Math.floor((Math.random() * sorteios) + 1);
    return sorteio; 
  }
   var sorteios = prompt("Digite o numero de bilhetes: ");
  console.log(sorteioBilhetes(sorteios));


//Usuário diz quantos pontos o time fez e o programa retorna o resultado de (Vencedor, empate ou perdedor).
let pontoCalc = Number(prompt('Digite a quantidade de pontos, sendo: 3 pontos (VENCEDOR), 2 ponto (EMPATE), 0 ponto (PERDEU)'));
switch (pontoCalc) {
    case 3:
        console.log('Vencedor');
        break;
    case 2:
        console.log('Empate');
        break;
    case 0:
        console.log('Perdeu, mas continue tentando!');
        break;
    default:
        console.log('Inválido');
}

//5. Altere a função que calcula IMC de maneira que o valor do IMC tenha apenas duas casas decimais.
function calculoIMC(peso,altura){   
    let imc = peso / (altura**2);
     
   console.log("o seu imc é:" + imc.toFixed(2));
 }
 
 calculoIMC(60,1.70);