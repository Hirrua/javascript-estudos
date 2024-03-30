function Produto(nome, preco, estoque) { 
    this.nome = nome; 
    this.preco = preco;

    let estoquePrivado = estoque

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                throw new TypeError('O valor não representa um número!');
            }
            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camisite', 20, 3);
console.log(p1)
console.log('Estoque antes do setter: ', p1.estoque)
p1.estoque = 5000
console.log('Estoque depois do setter', p1.estoque)