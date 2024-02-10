const form = document.querySelector(".formulario")

form.addEventListener("submit", (evento) => {
    evento.preventDefault() // Não recarregar a página

    const inputPeso = evento.target.querySelector(".peso") // Pegar o input
    const inputAltura = evento.target.querySelector(".altura")
    
    const peso = Number(inputPeso.value) // Transformar o que foi escrito no input (string) em Number
    const altura = Number(inputAltura.value)

    // Verificar para não deixar os campos em brancos
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    
      if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = calcularImc(peso, altura)
    const nivel = nivelImc(imc)

    const mensagem = `Seu IMC é: ${imc} (Nivel: ${nivel})`

    mostrarResultado(mensagem, true)
})

function calcularImc(peso, altura) {
    const calculoImc = peso / altura ** 2
    return calculoImc.toFixed(2)
}

function nivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) {
        const resultadoImc = nivel[5]
        return resultadoImc
    }

    else if (imc >= 34.9) {
        const resultadoImc = nivel[4]
        return resultadoImc
    } 

    else if (imc >= 29.9) {   
        const resultadoImc = nivel[3]
        return resultadoImc
    }

    else if (imc >= 24.9) {
        const resultadoImc = nivel[2]
        return resultadoImc
    }

    else if (imc >= 18.5) {
        const resultadoImc = nivel[1]
        return resultadoImc
    }
    else {
        const resultadoImc = nivel[0]
        return resultadoImc
    }
}

function criarParagrafo() {
    const p = document.createElement("p")
    return p
}

function mostrarResultado(mensagem, isValid) {
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = ''

    const p = criarParagrafo()

    if (isValid) {
        p.classList.add("paragrafo-resultado")
    }
    p.innerHTML = mensagem;
    resultado.appendChild(p);
}