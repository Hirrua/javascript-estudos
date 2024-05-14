document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async  function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');

        const response = await fetch(href);
        const html = await response.text();
        carregaResultado(html);

    } catch(e) {
        console.error(e)
    }
   

    /*

    Mesma resolução com THEN e CATCH

    fetch(href).then(response => { // Por padrão, fetch() já retorna uma Promise
        if(response.status !== 200) throw new Error('Ocorreu um erro ao busca a página!');
        return response.text(); // Fetch não retorna o dado direto, preciso acessar o dado com a função .text()
    }).then(html => {
        carregaResultado(html);
    }).catch(err =>  console.error(err));
    */

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}