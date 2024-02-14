const numeros = [5, 50, 80, 1, 2, 3, 7, 11, 22, 27, 34];

// Retorne a soma do dobro de todos os pares
// Filtrar pares
// Dobrar valores
// Reduzir (somar tudo)

const pares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador += valor);

console.log(pares)
