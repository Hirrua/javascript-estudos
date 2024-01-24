//"palavras" que começam VAR e FUNCTIONS sofrem de Hoisting (elevação)

//a engine do js pega todas as variaveis e funções que são declaradas como VAR e FUNCTIONS e elevam para o inicio do código, é elevada a declaração sem os seus devidos valores

//elevou a declaração da variavel, logo sabe que existe mas não se sabe o valor, por isso no console.log parace com undefined

var sobrenome; // Declaração

console.log(sobrenome ) //Undefined

sobrenome = "Souza"; // Inicialização