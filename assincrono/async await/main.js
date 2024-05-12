function rand(min = 1000, max = 4000) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

function espera(msg, tempo) {
    return new Promise((resolve, reject) => {

        if(typeof msg !== 'string') {
            reject('Valor inválido!');
            return;
        }
        setTimeout(() => {
            resolve(msg + ' - A promise passou');
        }, tempo);
    });

}

async function executa() {
    try {
        const fase1 = await espera('Fase 1', rand());
        console.log(fase1);

        const fase2 = await espera(123, rand());
        console.log(fase2);

        const fase3 = await espera('Fase 3', rand());
        console.log(fase3)
    } catch(e) {
        console.log('Cai no catch')
    }
}

executa();