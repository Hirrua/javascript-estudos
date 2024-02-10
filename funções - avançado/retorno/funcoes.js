function falaFrase(comeco) {
    return function(resto) { // Posso retornar funçóes (anonimas ou não)
        return comeco + ' ' + resto; // concatena as strings (function anonima consegue ver a variavel 'comeco')
    }
}

const olaMundo = falaFrase('Olá'); // olaMundo recebe uma function anonima. Aqui a função anonima não foi executada
console.log(olaMundo('Mundo!')); // Aqui a função anonima FOI executada

function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);

console.log(duplica(10));
console.log(triplica(20));