const pessoa = {
    nome: "Hirruá",
    idade: 21
}
console.log(pessoa.nome)

function criarPessoa(nome, sobrenome,idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}
const pessoa02 = criarPessoa("Hirruá", "Souza", 21)
console.log(pessoa02.nome)

function criarPessoa2(nome, sobrenome, idade) {
    return {nome, sobrenome, idade}
}

const pessoa03 = criarPessoa2("Alerhandra","Cunha", 20)
console.log(pessoa03.nome)