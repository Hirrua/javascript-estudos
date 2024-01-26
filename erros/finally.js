// Um bom exemplo de uso do FINALLY, é para manipular arquivos, onde pode ser gerado um erro antes de fechar o arquivo, gerando possíveis problemas para o prpgrama

try {
    console.log("Abrindo um arquivo");
    console.log("Manipulando o arquivo e gerou um erro");
    console.log(testando)
    console.log("Fechando o arquivo"); // Não vai fechar, porque aconteceu um erro antes e vai cair direto no CATCH
} catch (err) {
    // É executado quando há erros
    // É perigoso tentar fechar no CATCH, pois teriamos que assumir que sempre vai ocorrer erros no programa
    console.log("Trantando o erro");
} finally {
    // SEMPRE É EXECUTADO, independente de ter gerado erro ou não
    console.log("FINALLY -> Eu SEMPRE sou executado, fechando o arquivo...");
}