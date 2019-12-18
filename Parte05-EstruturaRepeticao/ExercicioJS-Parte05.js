//EXERCÍCIOS {reprograma}
//PARTE 05 - EstruturaRepeticao

//1. Faça um algoritmo que imprima números inteiros de n a 1;
for(let n = 0 ;n <= 1; n++){
    console.log(n);
}



//2. Faça um algoritmo que imprima apenas os números ímpares de 1 a 100; (do-while)
let numeroimpar = 0;
do{   
    for ( numeroimpar = 0; numeroimpar < 100; numeroimpar++){
     numeroimpar++;
    if(numeroimpar % 2 !== 0){
         console.log(numeroimpar);
    }
    }
}
while(!numeroimpar);



//3. Dados dois números calcule o MDC deles.
let mdc = 1;
let divisor = 2;
let x = 90;
let y = 54;

console.log(x + '|' + y + '|' + divisor);
while(x > 1 && y > 1){
    if(x % divisor === 0 && y % divisor === 0){
        mdc *= divisor; // mdc = mdc * divisor;
        x /= divisor; // x = x / divisor;
        y /= divisor; // y = y / divisor;
        divisor = 2;
        console.log(x + '|' + y + '|' + divisor);

    }else if(x % divisor ===0){
        x /= divisor;
        divisor = 2;
        console.log(x + '|' + y + '|' + divisor);

    }else if(y % divisor === 0){
        y = y / divisor; //y /= divisor;
        divisor = 2;
        console.log(x + '|' + y + '|' + divisor);

    }else{
        divisor++;
    }

}
console.log('O MDC é: ' + mdc);



//4. Faça um algoritmo que imprima a soma dos números múltiplos de 3 e 5, menores que 1000.
let num = 1;
do{
    if(num%3==0 && num%5==0){
        console.log(num);
    }
        num++;
    
}
while(num <= 1000);



//5. Seu Miguel da vendinha da esquina, não sabe multiplicar. Faça para ele um programa que dado um número, print (console.log) a tabuado do mesmo de 1 a 10.
let tabuada = 2
let i = 0;
while (i <= 10) {
    console.log(tabuada + 'x' + i + '=' + tabuada * i);
    i++
}



//6. Faça um programa que leia 5 números e informe o maior número.
let arrv = [8, 5, 43, 95, 15];
let maiorNumer = 0;
for (let i = 0; i < arrv.length; i++) {
    if (arrv[i] > maiorNumer) {
        maiorNumer = arrv[i];
    }
}
console.log(maiorNumer);



//7. Faça um Programa que leia um array de 5 números inteiros e mostre-os. (Fazer com a mamãe)
let arrv = [8, 5, 43, 95, 15];
for (let i = 0; i < arrv.length; i++) {
    console.log(arrv[i]);
}


//8. O Sr. Manoel Joaquim possui uma grande loja de artigos de R$ 1,99, com cerca de 10 caixas. Para agilizar o cálculo de quanto cada cliente deve pagar ele desenvolveu um tabela que contém o número de itens que o cliente comprou e ao lado o valor da conta. Desta forma a atendente do caixa precisa apenas contar quantos itens o cliente está levando e olhar na tabela de preços. Você foi contratado para desenvolver o programa que monta esta tabela de preços, que conterá os preços de 1 até 50 produtos, conforme o exemplo abaixo:
let reais = 1.99;
let prod
for (let i = 1; i < 50; i++) {
    prod = i * reais;
    console.log(prod);
}



//9. Faça um programa que peça um número inteiro e determine se ele é ou não um número primo. Um número primo é aquele que é divisível somente por ele mesmo e por 1.
let numero = 71;
let divisores = 0;
for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores++;
    }
}

if (divisores === 2) {
    console.log(numero + ' é primo');
} else {
    console.log(numero + ' não é primo');
}



//10. A série de Fibonacci é formada pela seqüência 0,1,1,2,3,5,8,13,21,34,55,... Faça um programa capaz de gerar a série até o n−ésimo termo.
n1 = 0;
n2 = 1;
proximoNumero = n1 + n2;
n1 = n2;
n2 = proximoNumero;

function calcFibonacciSequence(qtdNumbers) {
    if (qtdNumbers <= 0) {
        return [];
    } else if (qtdNumbers === 1) {
        return [0];
    } else if (qtdNumbers === 2) {
        return [0, 1]
    } else {
        let fibonacciSeq = [0, 1];
        let n1 = 0;
        let n2 = 1;

        for (let i = 3; i <= qtdNumbers; i++) {
            let nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
            fibonacciSeq.push(nextNumber);
        }

        return fibonacciSeq;
    }
}

console.log(calcFibonacciSequence());



// 11. O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:
// Lojas Tabajara
// Produto 1:   R$ 2.20
// Produto 2:   R$ 5.80
// Produto 3:   R$ 0
// Total:       R$ 9.00
// Dinheiro:    R$ 20.00
// Troco:       R$ 11.00

let valoresCompra = [20, 10.55, 1, 12, 0];
let valorPago = 50;
function calcularCompra(valoresCompra) {
    let ValorAPagar = 0;

    for (let i = 0; i < valoresCompra.length; i++) {
        if (valoresCompra[i] == 0) {
            break;
        } else {
            ValorAPagar += valoresCompra[i];
        }

    }
    return ValorAPagar;
}
let valorTotal = calcularCompra(valoresCompra);
console.log('Total : R$' + valorTotal);
console.log('Dinheiro: R$' + valorPago);
let troco = valorPago- valorTotal;
console.log(`Troco R$ : ${troco.toFixed(2)}`);



// 12. O Departamento Estadual de Meteorologia lhe contratou para desenvolver um programa que leia as um conjunto indeterminado de temperaturas, e informe ao final a menor e a maior temperaturas informadas, bem como a média das temperaturas.

let temperaturas = [22, 35,12,7,4,40];
let max = 0;
let min = 0;
let somaTemperaturas = 0;

for(let i = 0; i< temperaturas.length; i++){
    if (temperaturas[i]>max){
        max = temperaturas[i];
        somaTemperaturas += temperaturas[i];
    
    }else if (temperaturas[i]<max){
        min = temperaturas[i];
        somaTemperaturas += temperaturas[i];
        
    }else{
        somaTemperaturas += temperaturas[i];
        console.log(somaTemperaturas);

    }
}
mediaTemperaturas = somaTemperaturas/ temperaturas.length;
console.log(`A maior temperatura é ${max}`);
console.log(`A menor temperatura é ${min}`);
console.log(`A temperatura média é ${mediaTemperaturas}`);



// 13. Em uma competição de ginástica, cada atleta recebe votos de sete jurados. A melhor e a pior nota são eliminadas. A sua nota fica sendo a média dos votos restantes. Você deve fazer um programa que receba o nome do ginasta e as notas dos sete jurados (um array) alcançadas pelo atleta em sua apresentação e depois informe a sua média, conforme a descrição acima informada. As notas não são informados ordenadas. Um exemplo de saída do programa deve ser conforme o exemplo abaixo:
// Resultado final:
// Atleta:          Aparecido Parente
// Melhor nota:     9.9
// Pior nota:       7.5
// Média:           9.04
// Voltou a ficar fá

let medias = [9.9,7.5,8.4,7.9, 10, 8.7,8];
let nomeAtleta = 'Aparecido Parente';


function calcularMedia(medias, nomeAtleta){
    let nota =0 ;
    let somaNotas = 0;
    let maiorNota = 0;
    let menorNota = 10;
    let mediaFinal = 0;
    for(let i = 0; i < medias.length; i++){
       nota = medias[i];
       if(maiorNota<nota){
           maiorNota = nota;
           somaNotas += nota;
       }else if(menorNota> medias[i]){
           menorNota = medias[i];
           somaNotas += nota;
       }else{
        somaNotas += nota;
       }
    }
    mediaFinal = (somaNotas-menorNota - maiorNota) / (medias.length-2);
    console.log(`Atleta: ${nomeAtleta}`);
    console.log(`Melhor nota: ${maiorNota}`);
    console.log(`Pior nota: ${menorNota}`);
    console.log(`Média : ${mediaFinal}`)
    


}
calcularMedia(medias, nomeAtleta);



//14. Para calcular o fatorial de um número, você multiplica todos os números menores que ele até 1. Por exemplo, 10! = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1. Faça um algoritmo que dado um número calcule o fatorial do mesmo.
function fatorial(valor) {
    // para valores negativos
    if (valor < 0) {
        return 'Valor deve ser maior ou igual a zero';

        // para valor = 0  ou igual a 1
    } else if ((valor == 0) || (valor == 1)) {
        return 1;

    } else {
        let acumula = 1;
        for (let x = valor; x > 1; x--) {
            acumula = acumula * x;
        }
        return acumula;
    }
}
console.log('O valor do fatorial é: ' + fatorial(35))


//15. Faça uma função que receba uma quantidade x e retorne um array com x números randomicos.
let numRand = []

function retornandoNumRandomicos(x) {
    for (let i = 0; i < x; i++) {
        let met = Math.floor(Math.random() * 15);
        numRand.push(met);
    }
    return numRand;
}
console.log(retornandoNumRandomicos(15));


//16. Faça um algoritmo que sortei cara (0) ou coroa (1) n vezes. E no fim mostre quantas vezes deu cara e quantas coroa.

 function calcularCaraCoroa(numerosSorteio){
    let ladoCara = 0;
    let ladoCoroa = 0;
    let ladoMoeda ;
    for (let i = 0; i< numerosSorteio; i++){
        ladoMoeda = Math.floor(Math.random() * 2) ;
        if (ladoMoeda == 0){
            ladoCara ++;
        }
        else{
            ladoCoroa ++;
        }

    }
    let resultado = `Você sorteou ${numerosSorteio} vezes. O lado cara foi sorteado: ${ladoCara} vezes e o lado coroa: ${ladoCoroa} vezes `
    return resultado;
}
console.log(calcularCaraCoroa(7));



// 17. Escreva um algoritmo que printe o seguinte padrão no console:
// *******
// ******
// *****
// ****
// ***
// **
// *
for (let i = 5; i >= 1; i--) {
    let linha = '';
    for (let j = i; j >= 1; j--) {
        linha += '*';
    }
    console.log(linha);
}



// 18. Escreva um algoritmo que printe o seguinte padrão no console:
// 1
// 22
// 333
// 4444
// 55555
for (let i = 0; i <= 5; i++) {
    let linha = '';
    for (let j = 1; j <= i; j++) {
        linha += i;
    }
    console.log(linha);
}



// 19. Pangrama é uma frase que possui todas as letras do alfabeto. Faça um algoritmo que verifique se uma frase é um pangrama ou não.
function isPangram(str){
    let alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    str = str.toLowerCase();
        for(let i = 0; i < alfabeto.length; i++){
            if (str.indexOf(alfabeto[i] < 0)){
                return false; 

        }
    }

       return true;
}
console.log(isPangram('Jane quer LP,fax,CD,giz,TV, e bom whisky'));


