function rand(min = 1000, max = 3000) { // Gerar segundos entre 1s - 3s aleatoriamente
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

function f1(callback) { // Parametro callback -> verificação de segurança para garantir que a função "callback" exista antes de ser executada   
    setTimeout(function() { // O Timeout dentro da function já é conseiderado um callback
        console.log('f1')
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2')
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3')
        if (callback) callback();
    }, rand());
}

// Callback -> chamamos quando algo terminou de ocorrer e agora preciso que em seguinda essa outra coisa execute (ex: o arquivo de 1Gb precisa baixar primeiro que o arquivo de 1Mb)

// Funções callback -> Mesmo gerando segundos aleatorios criamos uma sequencia para serem executados, logo: f1 -> f2 -> f3 -> console.log
// Funções callback mais 'estruturadas', só não estamos usando funcões anonimas dentro dos paramentros como no proximo exemplo

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá, Mundo!');
}

// Callback Hell: Basicamente vamos criando uma 'arvore' de callback

// f1(function() {
//     f2(function() {
//         f3(function() {
//             console.log('Olá Mundo!');
//         });
//     });
// })