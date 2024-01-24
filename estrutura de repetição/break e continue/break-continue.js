const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i]
    if (numero === 2) {
        console.log("Pulei o numero 2")
        continue
    }
    if (numero === 7) {
        break
    }
    console.log(numero)
}

console.log("**************************")

for (let i in numeros) {
    let numero = numeros[i]

    if (numero === 2) {
        console.log("Pulei o numero 2")
        continue
    }
    if (numero === 7) {
        break
    }
    console.log(numero)
}

console.log("**************************")

for (let numero of numeros) {
    if (numero === 2) {
        console.log("Pulei o numero 2")
        continue
    }
    if (numero === 7) {
        break
    }
    console.log(numero)
}

console.log("**************************")

let i = 0
while (i < numeros.length) {
    let numero = numeros[i]
    if (numero === 2) {
        console.log("Pulei o numero 2")
        i++
        continue
    }
    if (numero === 7) {
        i++
        break
    }
    console.log(numero)
    i++
}

console.log("**************************")

let x = 0
do {
    let numero = numeros[x]
    if (numero === 2) {
        console.log("Pulei o numero 2")
        i++
        continue
    }
    if (numero === 7) {
        i++
        break
    }
    console.log(numero)
    i++
} while (x < numeros.length)