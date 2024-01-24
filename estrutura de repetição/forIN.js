// FOR IN -> lê os indices ou chaves do objeto

const pessoa = { nome: "Hirruá", sobrenome: "Souza", idade: 21 }

for (let chave in pessoa) {
    console.log(`Chave: ${chave}, Valor: ${pessoa[chave]}`)
}

const frutas = ["maça", "melancia", "uva"]

for (let indice in frutas) {
    console.log(indice)
}