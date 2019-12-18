//EXERCÍCIOS {reprograma}
//PARTE 07 - Objetos

// imprimir lista de cores por gato, no formato
  // nome do gato
  //cor
  //-------------
const satanas = {
    nome: 'Satanás',
    idade: 6, 
    castrado: true,
    cores: ['preto', 'branco']
  };
  
  const churrumina = {
    nome: 'Churrumina',
    idade: 1,
    castrado: true,
    cores: ['branca', 'creme', 'cinza']
  };
  
  const odo = {
    nome: 'Odo',
    idade: 2,
    castrado: true,
    cores: ['branco', 'marrom', 'preto']
  };
  
  const ford = {
    nome: 'Ford Prefect',
    idade: 3,
    castrado: true,
    cores: ['rajado']
  };
  
  const gatos = [satanas, churrumina, odo, ford]

  // exibindo a lista de gatos via console 
  for (let gato of gatos) {
      console.log(`${gato.nome}`);
      for (let cor of gato.cores) {
        console.log(`${cor}`)
    };
      console.log('-------------')
  }
  
  
  /*
Array para Object
Escreva uma função que receba um array 2d e retorne um objeto com cada par de elementos do array como um par chave-valor. Por exemplo:
const arr = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]]
const obj = {
  fabricante : 'Ford',
  modelo : 'Mustang',
  ano : 1964
}
Escreva também uma função que faça o contrário. Transforme os pares de key-value de um object em um array 2d.
*/
const arr = [['fabricante', 'Ford'], ['modelo', 'Mustang'], ['ano', 1964]];

function criarObj(array){
    let objeto = {}
    for(let ind of array){
        objeto[ind[0]] = ind[1];
    }
    return objeto;
}
console.log(criarObj(arr));
 