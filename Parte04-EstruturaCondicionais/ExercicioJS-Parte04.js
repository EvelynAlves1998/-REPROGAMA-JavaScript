//EXERCÍCIOS {reprograma}
//PARTE 04 - EstruturaCondicionais

//1. Crie um código que retorne uma quantidade de pontos que seu time fez de acordo com o resultado do jogo. (Se o seu time vencer, ele recebe 3 pontos. Se o resultado foi empatado, ele recebe 1 ponto. Se ele perdeu, não recebe nada.)
function partidadefutebol(resultado){

    if(resultado === 'v'){
        return "Seu time venceu!, e tem mais de 3 pontos! ";
      }else if(resultado === "e"){
        return "Seu time empatou!, e tem apenas 1 ponto!";
      }else {
        return "Seu time perdeu! e tem 0 pontos!";
        }
      }
      console.log(partidadefutebol('v'));
    
	

//2. Palíndromos são palavras ou frases que podem ser lidas da esquerda para a direita ou da direita para a esquerda. Crie uma função que informe se uma palavra é um palíndromo.
function verificarPalindromo(palavra) {
    let palindromo = palavra.split('').reverse().join('');
    if (palavra === palindromo) {
        return 'palindromo';
    } else {
        return 'Palavra não é palindromo';
    }
}
console.log(verificarPalindromo('Digite aqui a palavra que deseja saber...'));



//Usuário digita a palavra que deseja saber se é palindromo ou não.
alert('Descubra se a palavra é palindromo ou não');
let palavra = prompt('Digite a palavra');

function verificarPalindromo(palavraPalindNao) {
    let palindromo = palavra.split('').reverse().join('');
    if (palavra === palindromo) {
        return 'palindromo';
    } else {
        return 'Palavra não é palindromo';
    }
}
console.log(verificarPalindromo('palavraPalindNao'));




//3. Faça uma função que seja dada um número, retorne se ele é par ou ímpar.
function verificaparouimpar(numero){
    
    if(typeof numero !== 'number'){
        return 'Isso não é um numero!';
    }

    if(numero %  2 === 0){
        return 'O número é par!';
    }else {
        return 'O número é impar!';
    }
}
    console.log(verificaparouimpar('A'));
    console.log(verificaparouimpar(4));
    console.log(verificaparouimpar(1));

	

//Usuário digita apenas número para saber se é IMPAR ou PAR.
alert('Descubra se o número é impar ou par');
let digitar = prompt('Digite aqui o número');

function verificarParOuImpar(digitar) {

    if (digitar % 2 === 0) {
        return 'O número é par';

    } else {
        return 'O número é ímpar';
    }
}
console.log(verificarParOuImpar(digitar));



//4. Faça uma função que seja dada um número, retorne uma classificação do ângulo. (Ângulo agudo: ângulo medido maior que 0 ° menor que 90 °; ângulo reto: ângulo medido igual a 90 °; ângulo obtido: ângulo medido maior que 90 ° e menor que 180 °; ângulo angular: ângulo com medida igual a 0 ° ou 180 °; Ângulo Côncavo: ângulo de medição entre 180 ° e 360 ​​°; Ângulo completo: ângulo de medida igual a 360 °).
function classficacaoAngulo(angulo){
    if( angulo > 0 && angulo < 90){
        return 'Ângulo Agudo!';
    }else if(angulo === 90){
       return 'Ângulo Reto!';
    }else if(angulo > 90 && angulo < 180){
        return 'Ângulo obtuso!';
    }else if(angulo === 0 && angulo < 180){
       return 'Ângulo Raso!';
    }else if( angulo >= 180 &&  angulo <= 360){
       return 'Ângulo Côncavo';
    }else if(angulo === 360){
        return 'Ângulo Completo';
    }
}
console.log(classficacaoAngulo(50));



// De acordo com a tabela ...
/*5. Baseado na tabela abaixo, retorne a classificação de um produto.
Código	                    Classificação
1	                        Alimento não-perecível
2,3 ou 4	                Alimento perecível
5 ou 6	                    Vestuário
7	                        Higiene Pessoal
8 até 15	                Limpeza e Utensílios Domésticos
Qualquer outro código	    Código inválido
*/
function classificarProduto(codigoProduto){
    if(codigoProduto === 1){
        return 'Alimento não-perecível';
    }else if(codigoProduto >=2 && codigoProduto <= 4){
        return 'Alimento perecivel';
    }else if(codigoProduto === 5 || codigoProduto === 6){
        return 'Vestuário';
    }else if(codigoProduto === 7){
        return 'Higiene Pessoal';
    }else if(codigoProduto >= 8 && codigoProduto <= 15){
        return 'Limpeza e Utensílios Domésticos';
    }else{
        return 'Código inválido';
    }  
}
console.log(classificarProduto(1));

//Usuário escolhe um número e aparece o código do produto
let codigoProduto = parseInt(prompt('Digite o código do produto'));

function classificarProduto(codigoProduto){
  switch (codigoProduto){
    case 1:
      return 'Alimento não-perecível';
    case 2:
    case 3:
    case 4:
       return 'Alimento perecível';
      case 5:
      case 6:
       return 'Vestuário';
      case 7:
       return 'Higiene Pessoal';
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
       return 'Limpeza e Utensílios Domésticos';
    default:
      return 'Código inválido';
  }
}

console.log(classificarProduto(codigoProduto));


//6. Baseado na tabela abaixo, escreva um algoritmo que leia o código do item comprado pelo consumidor e a quantidade, calculando e mostrando o valor do pagamento. A mensagem de retorno deve conter o produto, uma quantidade e o valor total a pagar.
/*Código	    Produto	                Preço Unitário (R$)
100	    Cachorro quente	        R$ 1,70
101	    Bauru Simples	            R$ 2,30
102	    Bauru com ovo	            R$ 2,60
103	    Hamburguer	                R$ 2,40
104	    Cheeseburguer	            R$ 2,50
105	    Refrigerante	            R$ 1,00
*/

function identificaProduto(codigoProduto,quantidadeProduto){
    switch (codigoProduto){
      case 100:
        produto = 'Cachorro quente';
        valorUnitario = 1.70;
        valorTotal = valorUnitario * quantidadeProduto;
      console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                   + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
         case 101:
            produto = 'Bauru Simples';
            valorUnitario = 2.30;
           valorTotal = valorUnitario *quantidadeProduto ;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                   + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
         case 102:
            produto = 'Bauru com ovo';
            valorUnitario = 2.60;
            valorTotal = valorUnitario * quantidadeProduto;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto  : ' 
                       + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
        
        case 103:
          produto = 'Hamburguer';
            valorUnitario = 2.40;
           valorTotal = valorUnitario * quantidadeProduto;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                       + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
        case 104:
          produto = 'Cheeseburguer';
          valorUnitario = 2.50;
          valorTotal = valorUnitario * quantidadeProduto;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                       + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
        case 105:
          produto = 'Refrigerante';
            valorUnitario = 1;
           valorTotal = valorUnitario * quantidadeProduto;
           console.log('Você selecionou '+quantidadeProduto + ' unidades do produto : ' 
                       + produto + ' .O valor total da compra é : R$:' +valorTotal);
        break;
        
        default :
        console.log('Valor incorreto, tente novamente!')
    }
  }
  
  console.log(identificaProduto(100, 20))
  


// 7. Escreva um código que receba dois número e determine qual o maior entre eles.
function Maiornumero(num1,num2){
   
    if(num1 > num2){
        return "O número" + num1 + " é maior que o numero " + num2;

    }else if(num2 > num1){
        return "O número" + num2 + " é maior que o numero " + num1;
    }else{
        return "Os dois valores estão Iguais";
    }
}
console.log(Maiornumero(5,7));



// 8. Escreva um código que receba um número (1-7) e devolva o dia da semana correspondente.
function DiaSemana(num){
    if(num === 1){
        return "Segunda-Feira!";
    }else if(num === 2){
    return "Terça-Feira!";
   }else if(num === 3){
   return "Quarta-Feira!";
   }else if(num === 4){
   return "Quinta-Feira!";
   }else if(num === 5){
       return "Sexta-Feira!";
   }else if(num === 6){
           return "Sabado!";
   }else if(num === 7){
               return "Domingo!";
   
   }else{
       return "O número que você digitou não é um dia da semana! :(";
   }
}
console.log(DiaSemana(8));



// 9. Escreva um código que receba um número (1-12), e diga qual mês e quantos dias ele tem.
function Meses(mes){
    if(mes === 1){
        return "Esse mês é Janeiro!";
    }else if(mes === 1){
        return "Esse mês é Janeiro! e este mês tem 31 Dias!";
    }else if(mes === 2){
        return "Esse mês é Fevereiro! e este mês tem 28 Dias!";
    }else if(mes === 3){
        return "Esse mês é Março! e este mês tem 31 Dias!";
    }else if(mes === 4){
        return "Esse mês é Abril! e este mês tem 30 Dias!";
    }else if(mes === 5){
        return "Esse mês é Maio! e este mês tem 31 Dias!";
    }else if(mes === 6){
        return "Esse mês é Junho! e este mês tem 30 Dias!";
    }else if(mes === 7){
        return "Esse mês é Julho! e este mês tem 31 Dias!";
    }else if(mes === 8){
        return "Esse mês é Agosto! e este mês tem 31 Dias!";
    }else if(mes === 9){
        return "Esse mês é Setembro! e este mês tem 30 Dias!";
    }else if(mes === 10){
        return "Esse mês é Outubro! e este mês tem 31 Dias!";
    }else if(mes === 11){
        return "Esse mês é Novembro! e este mês tem 30 Dias!";

    }else if(mes === 12){
        return "Esse mês é Dezembro! e este mês tem 31 Dias!";
    }
}
console.log(Meses(12));



// 10. Utilizando switch-case, receba uma letra e determine se é uma vogal ou consoante.
  /* A – B – C – D – E – F – G – H – I – J – K – L – M – N – O – P – Q – R –
  S – T – U – V – W – X – Y – Z */
  function IdentificarVogaisEConsoantes(letra){
    switch(letra){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return 'Você digitou uma vogal'
      case 'b':
      case 'c':
      case 'd':
      case 'f':
      case 'g':
      case 'h':
      case 'i':
      case 'j':
      case 'k':
      case 'l':
      case 'm':
      case 'n':
      case 'p':
      case 'q':
      case 'r':
      case 's':
      case 't':
      case 'v':
      case 'w':
      case 'x':
      case 'y':
      case 'z':    
        return 'Você digitou uma consoante';
      default:
        return 'Você não digitou uma letra, tente novamente! ';
    }
  }
  
  console.log (IdentificarVogaisEConsoantes('b'))
  
  

// 11. Escreva um código que receba três ângulos e determine se eles formam um triângulo válido. Em um triângulo válido, a soma dos três ângulos é igual a 180º.
function determinarTriangulo(angulo1, angulo2, angulo3){
    if (angulo1+angulo2+angulo3 === 180){
      return 'Os ângulos digitados formam um triângulo válido';
    }
    else{
      return 'Os ângulos não formam um triângulo';
    }
  }
  
  console.log(determinarTriangulo(100,40,30))
  
  
  
// 12. Vamos reescrever a função de Báskara. Para isso temos que verificar atráves de delta se é possível calcular x' e x". Se delta for menor que zero, a equação não tem raízes. Se delta for igual a zero, a equação tem uma raiz. Se delta for maior que zero, a equação tem duas raízes.
function calcularBaskara (a,b,c){
    let delta = (b**2) - (4*a*c);
   if (delta < 0 ){
     return "O valor de delta é negativo, a função não tem raízes";
      } else if (delta === 0){
          let x1= (-b + Math.sqrt(delta))/(2*a);
          return `O valor de delta é 0 e o valor de x1 é ${x1}`;
      }else if (delta>0){
          let x1= (-b + Math.sqrt(delta))/(2*a);
          let x2= (-b - Math.sqrt(delta))/2*a;
           return `O valor de x1 é ${x1} e o valor de x2 é ${x2}`;
      }else{
           return 'Valores inválidos, tente novamente!';
      }
   }
   console.log(calcularBaskara(1,-2,1))
   
   
   
// 13. Crie uma calculadora simples.
function calculadora(valor1, operacao, valor2){
    switch(operacao){
      case '+':
        return valor1 + valor2;
      case '-':
        return valor1 - valor2;
      case '*':
        return valor1 * valor2;
      case '/':
        return valor1 / valor2;
      default:
        return 'operação inválida';
    }
  
  }
  
  console.log (calculadora (10, '-',2 ));