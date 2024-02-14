// Some todos os números
const numeros = [5, 50, 80, 1, 2, 3, 11, 22, 27];
// o primeiro parametro é o acumulador, podemos definir uma valor inicial pra ele
const total = numeros.reduce((acumulador, valor) => {
    console.log(`acumulador: ${acumulador} - valor: ${valor}`);
    return acumulador += valor; // funciona como uma total += i em um for
}, 0);

console.log(total);

const pessoas = [
    {nome: 'Olivia', idade: 18},
    {nome: 'Pietro', idade: 21},
    {nome: 'Fernando', idade: 70},
    {nome: 'João', idade: 34},
    {nome: 'Julio', idade: 52},
]; 

// Retorne a pessoa mais velha
const velha = pessoas.reduce((acumulador, objeto) => {
    if (acumulador.idade > objeto.idade) return acumulador;
    return objeto;
});
console.log(velha)