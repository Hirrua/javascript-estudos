// Somente disponivel em arrays -> serve para iterar

const numeros = [5, 50, 80, 22];

// Simulando um reduce
let total = 0;
numeros.forEach(valor => {
    return total += valor;
});

console.log(total);