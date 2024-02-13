// Valor por referencia -> Os dois arrays estão apontado para o mesmo endereço na memória, logo se alterar qualquer um, os dois sofrem alteração
// const nomes = ['Jão', 'Pietro', 'Miguel', 'Heloisa'];
// const novo = nome;
// novo.pop(); -> o 'nome' também perdeu o ultimo elemteno

// Spread Opertator -> cria uma cópia do meu array, logo posso alterar um e o  outro se mantem intacto

//indices ->     0       1         2         3          4
const nomes = ['Jão', 'Pietro', 'Miguel', 'Heloisa', 'Olivia'];
const novo = [...nomes]; 

const removida = novo.pop(); // .pop() remove o ultimo elemento e me retorna o valor
const removido = novo.shift(); // .shift()  remove o primeiro elemento e me retorna o valor

novo.push('Heitor'); // .push() adiciona um elemento no final do array
novo.unshift('Sabrina'); // .unshift() adiciona no inicio do array

console.log(novo.length); // .length mostra o tamanho do array (OBS: é um atributo e não um metodo)
console.log(novo);

// OBS: .shift() e .unshift() altera todos os indices dos elementos dentro do array, se o array for muito grande, pode ocorrer problemas de performance

// Quero pegar os nomes 'Pietro' e 'Miguel', então utilizo o indice 1 e o 3, pois o ultimo não é contado, significa que se eu quero o indice 2 devo colocar o indice 3
const metade = nomes.slice(1, 3); // .slice() divide o array.
console.log(metade);

// Mesmo resultado anterior, porém com número negativos
const metadeNegativo = nomes.slice(1, -2); // Removi do final 'Heloisa' e 'Olivia'
console.log(metadeNegativo);

const nome = 'Olivia Almeida Rosario';
const nomesString = nome.split(' '); // .split() está separando o nome e sobrenome com o espaço e tornando em um array
console.log(nomesString);

const arrayString = ['Olivia', 'Almeida', 'Rosario'];
const nomeUnico = arrayString.join(' '); // .join() transforma o array em uma string pelo espaço, o reverso do .split()
console.log(nomeUnico);