//EXERCÍCIOS {reprograma}
//PARTE 02 - TipoDadosOperadores


//1. Crie uma função que receba 1 parâmetro e calcule 5% de desconto, retornando ou valor do desconto;
function calcularDesconto(valor){
    let desconto = valor * 0.05;
     console.log(desconto);
   return desconto;
 }
 let resultado = calcularDesconto(67);

 

//2. Crie uma função que receba 2 parâmetros e exiba o resultado e o restante da divisão entre eles;
function calcularDivisao(valor1,valor2){
  let divisao = valor1 / valor2;
  
  let resto = valor1 % valor2
    
  console.log("o resultado da divisao:" + divisao + "e o resto da divisao é:" + resto);
}
calcularDivisao(6,7);



//3. Crie uma função que recebe 2 parâmetros (altura e peso) e retorna o IMC;
function calculoIMC(peso,altura){
    let imc = peso / altura**2;
     
   console.log("o seu imc é:" + imc);
 }
 calculoIMC(60,1.70);

 

//4. Crie uma função que receba 3 parâmetros, e use a fórmula de Báskara, a mesquita ou o resultado de x 'e x ".
function calculabaskara(a,b,c){
    let delta = (b**2) - (4*a*c);
    
    console.log('delta' + delta);
    
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    
    let x2 = (-b - Math.sqrt(delta)) / (2*a);
    
    console.log('O valor de x1 é:' + x1 + 'O valor de x2 é:' + x2);
  }
  calculabaskara(1,5,4);

  

// 5. Refatore seu código da questão anterior, de maneira que o novo código possua 3 funções:
// a. A primeira recebe 3 parâmetros e calcula apenas o resultado de "delta";
// b. A segunda recebe 3 parâmetros e calcula o resultado de x';
// c. A terceira recebe 3 parâmetros e calcula o resultado de x";
function calculadelta(a,b,c){
  let delta = (b**2) - (4*a*c);
  
  return delta; 
}
function calculax1(a,b,c){
  let delta = (b**2) - (4*a*c);
  let x1 = (-b + Math.sqrt(delta)) / (2*a);
  
  return x1; 
}
function calculax2(a,b,c){
  
   let delta = (b**2) - (4*a*c);
   let x2 = (-b - Math.sqrt(delta)) / (2*a);
  
  return x2;
}
let resultadodelta = calculadelta(1,5,4);
    console.log("Resultado de delta: " + resultadodelta);
let resultadox1 = calculax1(1,5,4);
    console.log("Resultado de x1: " + resultadox1);
let resultadox2 = calculax2(1,5,4);
    console.log("Resultado de x2: " + resultadox2);


	
//6. Crie uma função que calcule quantos dias o usuário viveu, baseado na idade;
function calculodias(idade){
  let idadeusuario = (idade*365);
   
  return idadeusuario;
}
  let resultadoidade = calculodias(21);
console.log("Os dias que você viveu é de: " + resultadoidade);



// 7. Crie uma função que calcule quantos batidas por dia dá um coração, considerando que, ele bate a 70 bpm;
function batidascoracao(numbatidas){
  let minutosdia = (24*60);
  let batidasdia = (minutosdia) * numbatidas;
   
  return batidasdia;
}
  let batidasdodia = batidascoracao(70);
console.log("o total de batidas do seu coração por dia é: " + batidasdodia);



//8. Crie uma função que calcule quantos batidas pela vida dá um coração, 
//considerando que, ele bate a 70 bpm;
function calculodias(idade){
  let idadeusuario = (idade*365);
   
  return idadeusuario;
}
  let resultadoidade = calculodias(21);
console.log("Os dias que você viveu é de: " + resultadoidade);
function batidascoracao(numbatidas){
  let minutosdia = (24*60);
  let batidasdia = (minutosdia) * numbatidas;
   
  return batidasdia;
}
  let batidasdodia = batidascoracao(70);
    console.log("o total de batidas do seu coração por dia é: " + batidasdodia);
  let batidasdavida = (resultadoidade * batidasdodia);
    console.log("A quantidade total que o seu coração bateu durante dua vida toda é: " 
                + batidasdavida );