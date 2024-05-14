/*
fetch("pessoas.json") Aqui retorna uma Promise
    .then(resposta => resposta.json()) Após pegar o json, preciso retornar outra Promise para conseguir visualizar os dados
    .then(json => carregaElementos(json));
*/

axios('pessoas.json').then(resposta => carregaElementos(resposta.data));

// Por baixo dos panos, o axios está realizando request igual ao XHR (XML HTTP REQUEST)

function carregaElementos(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
         
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `R$ ${pessoa.salario}`;
        tr.appendChild(td);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}