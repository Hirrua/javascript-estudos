const numeros = [5, 50, 80, 1, 2, 3, 11, 22, 27];
// Dobre os números
const numerosDobro = numeros.map(valor => valor * 2);
console.log(numerosDobro)

const pessoas = [
    {nome: 'Olivia', idade: 18},
    {nome: 'Pietro', idade: 21},
    {nome: 'Fernando', idade: 70},
    {nome: 'João', idade: 34},
    {nome: 'Julio', idade: 52},
]; 

// Retorne apenas uma string com o nome da pessoa
const nomes = pessoas.map(objeto => objeto.nome);
console.log(nomes);

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map(objeto => { 
    return {idade: objeto.idade}
 });
console.log(idades);

// Adicione uma chave id em cada objeto
const id = pessoas.map((objeto, indice) => { 
    const novoObjeto = {...objeto}; // Para não alterar o objeto principal (visto que objeto, arrays e funções são valores passados por referencia)
    novoObjeto.id = indice + 1;
    return novoObjeto;
});
 
console.log(id);