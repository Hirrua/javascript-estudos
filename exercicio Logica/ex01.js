// Escreva uma função que receba dois números e retorne o maior deles

function maior(x, y) {
     return Math.max(x, y);
}
console.log(`O maior numero é ${maior(12,60)}`);

console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");

function max(numero1, numero2) {
    return numero1 > numero2 ? numero1 : numero2;
}
console.log(`O maior numero é ${max(60,12)}`);

console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");

const arrow = (x, y) => {
    return x > y ? x : y;
}
console.log(`O maior numero é ${arrow(60,12)}`);

console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=");

const arrowV2 = (x, y) => x > y ? x : y;
console.log(`O maior numero é ${arrowV2(60,12)}`);