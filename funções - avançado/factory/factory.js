// Função factory (Função fábrica) retorna objeto

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        fala(assunto) { // Função dentro de um objeto se chama método
            return `${this.nome} está falando sobre ${assunto}` // This -> para mostrar que quero utilizar o peso DESSE OBJETO
        },
        peso,
        altura,
        imc() {
            const massaCorporea = this.peso / (this.altura ** 2)
            return massaCorporea.toFixed(2)
        }
    }
}

const pessoa = criaPessoa('Hirruá', 'Silva', 1.72, 60)
// THIS -> referese a quem chama ele, logo quando o objeto 'pessoa' chama o método fala(), THIS é pessoa (this.nome === pessoa.nome)
console.log(pessoa.fala('falando JS'))
console.log(pessoa.imc()) 
