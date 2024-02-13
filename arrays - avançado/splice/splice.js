//               -5       -4       -3      -2         -1
//                0        1        2        3         4
const nomes = ['João', 'Maria', 'Miguel', 'Julia', 'Eduardo'];

// nomes.splice(índice, deletar, adicionar);

// siumulando o .pop()
nomes.splice(-1, 1);

// simulando o .shift()
nomes.splice(0,1);

// simulando o .push()
nomes.splice(nomes.length, 0, 'Heloisa', 'Olivia');

// simulando o .unshift()
nomes.splice(0, 0, 'Pietro', 'Miguel')

// OBS: primeiro passo o indice de onde quero deletar ou adicionar, depois a quantidade de elementos que quero deletar por exemplo quero deleltar a julia e eduardo -> nomes.splice(-2, 2); Posso adicionar quantos elementos eu quiser e a utilização do .length é para adicionar ao final do array