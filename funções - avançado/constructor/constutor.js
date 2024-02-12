// Constructor function -> retorna um objeto, deve ser iniciar em letra maiscula
function Pessoa(nome, sobrenome) {

    // Atributos ou metodos privados (let e const) -> não podem ser acessados de fora 
    const ID = 1234;
    const medotoPrivado = function() {
        console.log('Sou um método privado')
    }

    // Atributos ou metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function() {
        console.log(`${this.nome}: é um metodo`);
    }
}

// o new faz o this apontar para o objeto que está sendo utilizando e retorna implicitamente

const p1 = new Pessoa('Miguel', 'Rodiugues');
const p2 = new Pessoa('Jão', 'Ruivo');

p1.metodo();