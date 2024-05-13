// AJAX -> JavaScript e XML assíncono

const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); // Inicializa uma requisição
        xhr.send(); // Envia a requisição para o servidor

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) { // Igual ou maior de 200 e menor de 300 é uma request de sucesso
                resolve(xhr.responseText); // Retorna uma string contendo os dados textuais recebidos
            } else {
                reject(xhr.statusText); // Retorna string com a mensagem de status da resposta retornada pelo servidor HTTP
            }
    });
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); // Buscar as tag ancôras: 'a'

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href'); // Pegamos a url da index.html

    const objConfig = {
        method: 'GET',
        url: href
    }

    const response = await request(objConfig);
    carregaResultado(response);
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}