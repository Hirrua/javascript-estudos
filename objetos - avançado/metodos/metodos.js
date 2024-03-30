/*
Object.keys() -> retorna as chaves
Object.freeze() -> congela
Object.defineProperties() -> define váris propriedade
Object.defineProperty() -> define uma propriedade
*/

/*
Object.values -> ler os valores
Object.entries -> ler chave e valores
Object.assign()
Object.getOwnPropertyDescriptor() -> temos acesso as configurações dos defineProperties
... (spread)
*/

const pessoa = {
    nome:'Jorge',
    idade: 32
};

const pessoa2 = {...pessoa}; // Copiando o objeto
const pessoa3 = Object.assign({}, pessoa, {trabalha: true})

console.log('Pessoa: ', pessoa);
console.log('Outra pessoa: ', pessoa2);
console.log('Outra: ', pessoa3);

console.log('Valores: ', Object.values(pessoa))
console.log('Valores: ', Object.entries(pessoa))

for (let entry of Object.entries(pessoa)) {
    console.log(entry)
}

for (let [chave, valor] of Object.entries(pessoa)) {
    console.log(chave, valor)
}