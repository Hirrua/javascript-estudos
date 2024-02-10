// Clássica

function falaOi() {
    console.log("Oi");
}
falaOi();

// Function expression

const souUmDado = function() {
    console.log("Sou um dado");
}
souUmDado();

// Arrow function

const funcaoArrow = () => {
    console.log("Arrow function");
}
funcaoArrow();

// Dentro de um objeto

const objeto = {
    fala() {
        console.log("Falando")
    }
};
objeto.fala();