// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number). Retorne true se a imagem estiver no modo paisagem.

function ePaisagem (largura, altura) {
    return largura > altura; // Não é preciso fazer if ternario com (? true : false), pois o return já realiza a verificação (true ou false)
}
console.log(ePaisagem(1920, 1080));

const ePaisagemV2 = (largura, altura) => largura > altura;
console.log(ePaisagemV2(1920, 1080));