/*
Metodos que podemos acessar na classe sem precisar instancialos
*/

class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de intância
    aumentar() {
        this.volume += 2;
    }

    diminuir() {
        this.volume -= 2;
    }

    // Método estático
    static trocaPilha() {
        console.log('Trocando as pilhas de todos os controles');
    }
}

// REFERENTE A ESSA INSTANCIA
const controle1 = new ControleRemoto('LG');
controle1.aumentar();
controle1.aumentar();
controle1.aumentar();
controle1.aumentar();
console.log(controle1) // Aqui não consigo acessar o método estático

// REFERENTE A CLASSE
ControleRemoto.trocaPilha(); // Aqui não tenho acesso aos dados (tv, volume, etc..)
