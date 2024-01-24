const pessoa = {
    nome:"Hirruá",
    sobrenome: "Souza",
    idade: 21,
    endereco: {
        rua: "Afonso",
        numero: 1377
    }
}

// Devido a variavel criada e a chave possuir o apelido, logo -> extrai do objeto pessoa a chave 'nome' e já cria uma variavel com o mesmo nome
const { nome, sobrenome } = pessoa
console.log(nome, sobrenome)

// Aqui estou pegando a chave 'nome' e criando uma variavel chamada 'teste', logo recebo o valor da chave nesta variavel 
const { nome: teste } = pessoa
console.log(teste)

// Posso garantir um valor padrão, caso não seja encontrado a chave com aquele nome
const { nome: nome_var, sobrenome: sobrenome_var, profissao = 'Não possui uma profissão' } = pessoa
console.log(nome_var, sobrenome_var, profissao)

// Acessando um objeto dentro do objeto -> utilizo o nome da chave 'endereco' abro {} e passo os nomes das chaves para acessar os valores
const { endereco: { rua, numero } } = pessoa
console.log(rua, numero)

// Juntando tudo
// Acessei a chave endereco, acessei o objeto dentro com as chaves presentes, criei variaveis para aquelas chaves e defini um valor padrão, caso não encontre uma chave com aquele valor
const { endereco: { rua: rua_var = "Não consta", numero: numero_var = "Não consta", bairro: bairro_var = "Não consta" } } = pessoa
console.log(rua_var, numero_var, bairro_var) // Output: Afonso 1377 Não consta