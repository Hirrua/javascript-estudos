function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-br', {hour12: false, timeZone: 'UTC'});
}

// Referencia da função (normalmente usa função anonima),  de quanto em quanto tempo (1000 milisegundo -> 1 segundo) 
setInterval(function () {
    console.log(mostraHora())
}, 1000);