const numeros = [5, 50, 80, 1, 2, 3, 11, 22, 27];

const numerosFiltrados = numeros.filter(callbackFilter);

// Entendendo como funciona (maneira mais longa)
function callbackFilter(valor, indice, array) { // indice e array são opcionais, já está sendo mandado automaticamente, mas se não quiser não precisa receber
    return valor > 10;  // Dica:  se só tem uma comparação e está retornando um bool, retorne a própria condição, logo não é necessário if ou ternário
}

// Como é normalmente usado
const filtrados = numeros.filter((valor, indice, array) => {
    //console.log(`${indice} - ${valor} - ${array}`)
    return valor > 10;
});
console.log(filtrados)

const pessoas = [
    {nome: 'Olivia', idade: 18},
    {nome: 'Pietro', idade: 21},
    {nome: 'Fernando', idade: 70},
    {nome: 'João', idade: 34},
    {nome: 'Julio', idade: 52},
]; 
// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasNomeGrande = pessoas.filter(objeto => objeto.nome.length >= 5);
console.log(pessoasNomeGrande)

// Retorne as pessoas com mais de 50 anos
const pessoasMaisCinquenta = pessoas.filter(objeto => objeto.idade > 50);
console.log(pessoasMaisCinquenta)

// Retorne as pessoas cujo o nome termina com a
const nomeTerminaComA = pessoas.filter(objeto => objeto.nome.endsWith('a'));
console.log(nomeTerminaComA);
