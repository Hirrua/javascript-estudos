// Herança / Delegação

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
    this.cor = cor;
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta

/* 
    Camiseta.prototype é um objeto vazio que tem como protótipo Produto.prototype
    Tudo que não existe em Camiseta nem em camiseta.prototype será DELEGADO para Produto.prototype
*/