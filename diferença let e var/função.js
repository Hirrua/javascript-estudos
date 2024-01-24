const verdadeiro = true;
var sobrenome = "Souza"; // consigo acessar ela de dentro da função

function fala () {
    var nome = "Hirruá"; // protegido
    var numero = 22;
    console.log(nome, sobrenome)

    if (verdadeiro) {
        let animal = "Gato";
        console.log(numero) // VAR não tem escopo de bloco, logo não precisa estar criada dentro do bloco do IF
    }

    // Erro, pois LET tem escopo de bloco, logo não consegue acessar o valor que foi criado dentro do IF
    //console.log(animal)

}

// Erro, pois está definido dentro do bloco da função
//console.log(nome) 