// LET tem escopo de bloco { ... }
// VAR só tem escopo de função

const verdadeiro = true;

let nome = "Hirruá"; // Criando
var nome2 = "Souza";

if (verdadeiro) {
    let nome = "Pietro"; // Criando
    var nome2 = "Da"; // Redeclarando

    if (verdadeiro) {
        let nome = "Miguel"; // Criando
        var nome2 = "Silva"; // Redeclarando
    }
}

console.log(nome, nome2)