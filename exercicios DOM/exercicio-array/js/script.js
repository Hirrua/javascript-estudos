function meuEscopo () {
    const form = document.querySelector(".form")
    const resultado = document.querySelector(".resultado")

    const array = []

    form.addEventListener("submit", (evento) => {
        evento.preventDefault()
        const nome = form.querySelector(".nome")
        const sobrenome = form.querySelector(".sobrenome")
        const peso = form.querySelector(".peso")
        const altura = form.querySelector(".altura")
        
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }

        array.push(pessoa)
        console.log(array)
        
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`

    })
}

meuEscopo()