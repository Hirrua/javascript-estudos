function soma() {
    let total = 0;
    for(let argumento of arguments) { // A variavel arguments aramazena todos os argumentos enviado para função
        total += argumento;
    }
    console.log(total);
}
soma(1, 2, 3, 4, 5);

// Definir valores padrões para as variaveis, caso não seja passado no argumento algum valor
function mostrarSoma(a, b = 2, c = 4) {
    console.log(a + b + c);
}
mostrarSoma(2, undefined, 20); // Caso queira que o b assuma o 2, devo enviar undefined como argumento

// Atribuição via desestruturação

function funcao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}
const obj = { nome: 'Hirruá', sobrenome: 'Souza', idade: 21 };
funcao(obj);

function funcao02([valor01, valor02, valor03]) {
    console.log(valor01, valor02, valor03);
}
const arr = ['Hirruá', 'Souza', 21];
funcao02(arr);