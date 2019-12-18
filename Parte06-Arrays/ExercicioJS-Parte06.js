//EXERCÍCIOS {reprograma}
//PARTE 06 - Arrays

//1) Percorrrer array e printar no console
const arr1 = [1,2,3,4,5]
        for(i = 0;i < arr1.length;i++){

    console.log(arr1[i]);
    }

	
//2) Inventer ordem do for e printar valores
const arr2 = [1,2,3,4,5]
     
for(i=arr2.length -1; i >= 0; i--){
    console.log(arr2[i]);
}


//3) Localizar índice de valor da array
let valor = 5
const arr3 = [1,2,3,4,5]
    for(i = 0;i < arr3.length;i++){
    if(valor === arr3[i]){
       
        console.log(i);

    }
}


// 4) Escreva uma função comprimentoMedioPalavras que receba duas strings e devolva o comprimento médio de ambas as strings.
// Exemplo de entrada:
// console.log(comprimentoMedioPalavras('xuxu', 'bananada')); // --> 6

function comprimentoMedioPalavras(palavra1,palavra2){

        let media = (palavra1.length + palavra2.length) / 2;
        return media;
}
console.log(comprimentoMedioPalavras("Evelyn","Jéssica"));


// 5) Escreva uma função chamada pegaElemento.
// Dado um array e um inteiro, pegaElemento devolve o valor de acordo com o inteiro dado, 
//dentro do array fornecido.
// Se o array tiver um comprimento de 0, ele deve retornar undefined.

// Exemplo de entrada:
// console.log(pegaElemento([1, 3, 5], 1);
function pegaElemento(arr,n){
    
    if(arr.length === 0){

        return 'undefined';
                
    
    }else{
        return arr[n];
    }
    
}
console.log(pegaElemento([1,3,5],0));


// 6) Escreva uma função chamada credencialEhValida.
// Dado um nome e uma senha, credencialEhValida retorna true se o nome contiver 
//mais do que 3 caracteres e a senha pelo menos 8 caracteres. Caso contrário, retorna false.

// Exemplo:
// console.log(credencialEhValida('Xuxu', 'minhasenha'));
function credencialEhValida(nome,senha){

    if(nome.length > 3 && senha.length >= 8){
        
        return true;
    }else{
        return false;
    }
}
console.log(credencialEhValida('Evelyn','12345678'));


// 7) Dada uma lista de inteiros não negativos e o resultado desejado de uma soma, 
//encontre dois números na lista cuja soma seja o resultado desejado.

// Exemplo:
// console.log(encontrarParDaSoma([3, 34, 4, 12, 5, 2], 9); // --> [4, 5]
let dif = 0;
let valor = 0,valor2=0;
function encontrarParDaSoma(arr,n){
        for(let i = 0;i < arr.length;i++){
            if(arr[i] <= n){
            dif = n - arr[i];
            valor = arr[i]; 
            for(let i = 0;i < arr.length;i++){
                if(arr[i] === dif){
                    valor2 = arr[i];
                    return valor2 + "," + valor;
                }   
            }
        }
    }
}
console.log(encontrarParDaSoma([3, 34, 4, 12, 5, 2], 9)); 


// 8) Escreva uma função chamada "encontrarMenorPalavra".
// Dado um array, "encontrarMenorPalavra" devolve a string mais curta encontrada no array 
//especificado.
// Notas:
// Se houver repetições, você deve optar pelo primeiro elemento que aparece no array 
//especificado.
// Assuma que o array pode ter outros valores além de strings.
// Se o array informado estiver vazio, ela deve devolver uma string vazia.
// Se o array informado não contiver strings, ela deverá retornar uma string vazia.
// Exemplo:
// console.log(encontrarMenorPalavra([4, 'dois', 2, 'cinco']); // --> 'dois'
function encontrarMenorPalavra(arr){

    
    for(i = 0;i <= arr.length; i++){

    }
}
console.log(encontrarMenorPalavra([4, 'dois', 2, 'cinco']));


// 9) Escreva uma função que receba uma array como parâmetro e devolva outra, mas sem elementos repetidos.
// const numerosVarios = [ 45, 765, 23, 76, 43, 65, 2345, 677, 5, 34, 22, 546, 77, 4355, 5667, 45, 56, 7, 4, 755, 45]
const numerosVarios =[ 45, 765, 23, 76, 43, 65, 2345, 677, 5, 34, 22, 546, 77, 4355, 5667, 45, 56, 7, 4, 755, 45]
function removerRepetidos(numerosVarios){
    const numerosUnicos = [];
    for( let i = 0; i<numerosVarios.length; i++){
       let valorArray = numerosUnicos.indexOf(numerosVarios[i]);
      if(valorArray == -1 ){
          numerosUnicos.push(numerosVarios[i]);
      }
      

    }
    return numerosUnicos;
}
   
console.log (removerRepetidos(numerosVarios));


// 10) Inverta a ordem de uma array de caracteres sem utilizar o método array.reverse().
// Resolva de duas formas: utilizando somente array.push() / utilizando array.pop() e array.splice()

const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"]
function removerRepetidos(letras){
    const arr = [];
    for(i=letras.length-1; i>-1 ;i--){
        arr.push(letras[i]);
    }
    return arr;
}

console.log(removerRepetidos(letras));

