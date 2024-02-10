function criaCalculadora() {
    return {
        display: document.querySelector('.display'), // Sempre que precisar usar acesso com o this.display

        inicia() { // inicia é a calculadora
            this.cliqueBtn(); // calculadora chama o cliqueBtn
            this.pressionaEnter();
        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1) // Tamanho da string menos um
        },

        pressionaEnter() {
            this.display.addEventListener('keypress', e => { // quando soltar o enter, realizar a conta
                if (e.keyCode === 13) { // código do enter
                    console.log(e.keyCode);
                    this.fazerConta();
                }
            })
        },

        fazerConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta) // Tomar cuidado ao usar EVAL()

                if (!conta) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);

            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        cliqueBtn() {
            // this -> calculadora
            // Usando arrow function o THIS continua travado em quem criou ele (calculadora)
            document.addEventListener('click', e => { // Se usar o função anonima aqui, o THIS passa a representar o document e não a calculadora
                const el = e.target; // Qual botão foi clicado
                if (el.classList.contains('btn-num')) {
                    this.btnDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.fazerConta();
                }

                this.display.focus();
            }); // .bind(this) use o this da calculadora e não do document, caso use função anonima
        },
        btnDisplay(valor) {
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();