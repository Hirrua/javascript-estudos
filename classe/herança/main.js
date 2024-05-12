class Dipositivo {
    constructor(marca) {
        this.marca = marca;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(`${this.marca} já está ligado`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(`${this.marca} já está desligado`)
        }
        this.ligado = false;
    }

}

class Smartphone extends Dipositivo {
    constructor(marca, modelo, cor) {
        super(marca); // recebe o marca que recebeu na classe pai (Dispositivo)
        this.modelo = modelo;
        this.cor = cor;
    }
}

/*
As classes filhas herdam tudo da classe pai
*/

const s1 = new Smartphone('IPhone', '15 Pro Max', 'Titanium natural');
console.log(s1)