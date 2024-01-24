function formataData(data) {

    const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    const dia = data.getDate();
    const numeroSemana = data.getDay();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const seg = data.getSeconds();

    switch (numeroSemana) {
        case 0:
            return `domingo, ${dia} de ${mes} de ${ano} ${hora}:${min}:${seg}`;
        case 1:
            return `segunda-feira, ${dia} de ${mes} de ${ano} ${hora}:${min}:${seg}`;
        case 2:
            return `terça-feira, ${dia} de ${mes} de ${ano} ${hora}:${min}:${seg}`;
        case 3:
            return `quarta-feira, ${dia} de ${mes} de ${ano} ${hora}:${min}:${seg}`;
        case 4:
            return `quinta-feira, ${dia} de ${mes} de ${ano} ${hora}:${min}:${seg}`;
        case 5:
            return `sexta-feira, ${dia} de ${mes} de ${ano} ${hora}:${min}:${seg}`;
        case 6:
            return `sábado, ${dia} de ${mes} de ${ano} ${hora}:${min}:${seg}`;
        default:
            return `Erro :(`;
    }
}

const resultado = document.querySelector(".data");
const data = new Date();
const dataHoje = formataData(data)
resultado.innerHTML = dataHoje

// const h1 = document.querySelector("h1");
// const data = new Date();
// h1.innerHTML = data.toLocaleString('pt-br', { dateStyle: "full", timeStyle: "short" })