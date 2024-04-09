/*
    Prototipo é aquilo que foi criado primeiro e serve de molde para outros objetos
    Todos os objetos tem referencia a (__proto__) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Ao tentar acessar, o JS (engine) vai tentar encontrar esse 'membro' no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar ( ou não).
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    //this.nomeCompleto = () => `Original: ${this.nome} ${this.sobrenome}` // Caso tenha esse metodo presente aqui, ele vai sobrescrever __proto__
}

Pessoa.prototype.nomeCompleto = function() { // __proto__
    return `${this.nome} ${this.sobrenome}`
}

/*
    É mais performatico criar métodos nos prototype, assim cada vez que criar uma pessoa, não vai carregar em cada objeto, e sim, ser reutilizada
*/

const pessoa = new Pessoa('Jorginho', 'Zulu')

console.dir(pessoa) // Mostra informações detalhadas

/*
    Posso reaproveitar métodos de outro objeto em outros objetos
    Sempre que criamos um objeto por debaixo dos panos o JS  cria Object.Prototype
    __proto__ === Object.Prototype

    * Muito cuidado para utilizar, não é recomendavel manipular o prototype, pode causar problemas
    Object.__proto__ -> Object.getPrototypeOf(ObjB)

    É mais performatico colocar os métodos fora da função construtora
*/

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

const p1 = new Produto('Camisa', 50);
p1.desconto(100);
console.log(p1)