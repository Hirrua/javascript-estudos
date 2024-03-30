// defineProperty -> definir uma propriedade do objeto
// defineProperties -> definir mais de uma propriedade do objeto

// Enumerable true significa que a propriedade será listada quando tentarmos exibir as chaves do objeto;
// Writable true significa que a propriedade poderá ser alterada;
// Configurable true significa que será possível reconfigurar a propriedade.
// Value é o valor da propriedade
// Get é um getter (função) para obter o valor da propriedade e modificar se necessário
// Set é o setter (função) para setar o valor da propriedade, podendo validar ou modificar o valor.

// Temos um maior controle com o que acontece com cada chave do dicionario

function Produto(nome, preco, estoque) { // Função construtora
    //this indica o objeto que esta sendo criado
    this.nome = nome; 
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: true,
            configurable: true
        }
    })
}

//wiretable -> se pode ou não ser alterado

const p1 = new Produto('Camisite', 20, 3);
p1.estoque = 10
delete p1.estoque
console.log(p1)
