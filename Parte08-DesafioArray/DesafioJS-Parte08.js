/* VALIDAÇÃO DE CARTÃO DE CRÉDITO (ALGORITMO DE LUHN)
Nesse exercício, você fará a validação de números de cartão de crédito utilizando o algoritmo de Luhn:
1) Retire o último dígito do número. Ele é o verificador;
2) Escreva os números na ordem inversa;
3) Multiplique os dígitos das casas pares por 2 e subtraia 9 de todos os resultados maiores que 9;
4) Some todos os números;
5) O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados pra obter um módulo 10.
6) O cartão será válido se os números somados % 10 === 0.
*/
let numeroCartao = '4620548130334725'
function validarCartao(numeroCartao){
    let arrayCartao=numeroCartao.split('');
    // console.log(arrayCartao);
    // retirando o último digito do numero
    let digitoFinal = arrayCartao.pop();

    //invertendo a numeração do cartão
    let cartaoInvertido = arrayCartao.reverse();
    const cartaoInvertidoParseado = cartaoInvertido.map(i => parseInt(i))
    // console.log(cartaoInvertidoParseado)
    // multiplicando os digitos das casas pares por 2 
    let digitosMultiplicados = cartaoInvertidoParseado.map(function(i,index) {
        if (index%2 !== 1){
          return  i * 2;
        } else{
              return i;
          }
      });
      // subtraindo 9 de todos os resultados maiores que nove
      let subtracao = digitosMultiplicados.map(function(i){
        if (i>9){
            return  i -= 9;
          } else{
                return i;
            }
      });
      //somando todos os valores do array
      let somaSemDigito = 0;
      for (let i= 0; i < subtracao.length; i++){
          somaSemDigito += subtracao[i];
      }
    /*Usando o reduce
    let numeroFinal = subtracao.reduce(function(acum,atual)){
      return acum + atual;
    }
    */
      // somando o digito verificador
      let somaFinal  = somaSemDigito + parseInt(digitoFinal);
    // verificando se a divisão da soma por 10 possui resto e retornando se o cartão é válido 
      if(somaFinal % 10 == 0){
          return 'válido'
      }else{
          return 'inválido'
      }   
     
}
console.log(validarCartao(numeroCartao));