function rand(min = 1000, max = 4000) { // Gerar segundos entre 1s - 3s aleatoriamente
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

/*
Resolve: Código executou com sucesso, então resolve ele
Reject: Código não executou com sucesso (erro), rejeita ele

Then: Será executado quando resolvermos a nossa promessa (promise) -> o then é executado quando chamamos resolve
Catch: Vai capturar o erro -> é executado quando chamamos o reject

then() e catch() também recebem funções
*/

function espera(msg, tempo) {

    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') reject('Valor inválido!')

        setTimeout(() => {
            resolve(msg); // Ao inves de retornar a mensagem, jogo dentro de um parametro
        }, tempo);
    });

}

espera('Conectando ao Banco', rand())
    .then(resposta => {
        console.log(resposta);
        return espera('Buscando dados', rand());
    })
    .then(resposta => {
        console.log(resposta);
        return espera(12324, rand());
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('Erro: ', e);
    });