const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Roberto',
    falarNome() {
        return `${this.nome} está falando seu nome.`;
    }
};

const pessoa2 = new Object();
pessoa2.nome = 'Luiz 2';
pessoa2.sobrenome = 'Roberto 2';
pessoa2.idade = 21;
pessoa2.falarNome = function() {
    return `Agora ${this.nome} está falando seu nome.`
};
pessoa2.anoNascimento = function() {
    const anoAtual = new Date();
    return anoAtual.getFullYear() - this.idade;
};

const chave = 'nome';

// Chaves e valores
console.log(pessoa.nome); // Anotação de ponto
console.log(pessoa['nome']); // Anotação de chaves
console.log(pessoa[chave]); // Anotação de chaves, porém de forma dinamica

// Métodos
console.log(pessoa.falarNome());
console.log(pessoa2.falarNome());
console.log(pessoa2.anoNascimento());

// Ver as chaves e valores
for (let chave in pessoa) {
    console.log(chave); // Chaves
    console.log(pessoa[chave]); // Valores
}