const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9] // posso usar let ou const
const [primeiroNumero, segundoNumero] = numeros
console.log(primeiroNumero, segundoNumero) // 1 2

const [um, , tres, , cinco] = numeros // utilizando o (espaço) pulo os números que não quero pegar
console.log(um, tres, cinco)