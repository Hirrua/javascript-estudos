function soma(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw('x e y precisam ser números!');
    }
    return x + y;
}

console.log(soma(10, "2"))