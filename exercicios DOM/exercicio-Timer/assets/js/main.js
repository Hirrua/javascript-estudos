function pegaSegundos(segundos) { // função para criar uma data baseada nos segundos passados
    const data = new Date(segundos * 1000); // pego os segundos * 1000 (milesimos) pois o new Date recebe em milisegundos (estamos formatando os segundos)
    return data.toLocaleTimeString('pt-br', {hour12: false, timeZone: 'UTC'});
}

function iniciarRelogio() {
    timer = setInterval(function() { // setInterval é executado a cada 1 segundo para ficar contando/aumento os segundos a cada segundo
        segundos++; // contando
        relogio.innerHTML = pegaSegundos(segundos);
    }, 1000)
}

const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

let timer;
let segundos = 0;

// adiciono um evento para 'escutar' o click e passo uma arrow function

iniciar.addEventListener("click", (evento) => {
    const e = evento.target; // .target me diz qual foi o elemento que cliquei
    
    if (e.classList.contains("iniciar")) {      // .classList.contains(nome_classe) verifica se aquele elemento tem uma classe chamada "iniciar"
        clearInterval(timer);
        iniciarRelogio();
    }
})

pausar.addEventListener("click", (evento) => {
    const e = evento.target; // Não é necessário o .target (nesse exercicios, usando apenas para estudar/entender)

    if (e.classList.contains("pausar")) { // Não é necessario esse if (usando apenas para estudar/entender)
        clearInterval(timer);
     } 
})

zerar.addEventListener("click", (evento) => { 
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = pegaSegundos(segundos);  
})

// Repetir muitas vezes o addEventLister não perfomatico, aqui está outra ideia, onde utiliza o .classList.contains e .target

// document.addEventListener(function (event) {
//     const e = event.target;        

//     if (e.classList.contains("iniciar")) {
//         clearInterval(timer);
//         iniciarRelogio();
//     }

//    if (e.classList.contains("pausar")) {
//             clearInterval(timer);
//          } 
    
//     if (e.classList.contains("zerar")) {
//         clearInterval(timer);
//         segundos = 0;
//         relogio.innerHTML = pegaSegundos(segundos);  
//     }
// })
