function retornaHora(data) {
    if (data && !(data instanceof Date)) { // Se a data foi enviada E não for uma instancia da função construtora Date, lança um erro.
        throw new TypeError("Esperando uma instância de Date");
    }

    if (!data) { // Se eu não enviar uma data
        data = new Date(); // Pega a data atual. *Só é uma instancia aqueles objeto que utilizo new Date
    }

    return data.toLocaleString('pt-br', {hour12: false});
}

// const data = new Date('01-01-1970')

try {
    const hora = retornaHora(data);
    console.log(hora);
} catch(err) {
    console.log("Ocorreu um erro inesperado :(");
} finally {
    console.log("Tenha um bom dia!");
}