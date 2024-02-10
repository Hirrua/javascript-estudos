(function (idade, altura, peso) {
    const sobrenome = 'Silva';
    function criaNome(nome) {
        return `${nome} ${sobrenome}`;
    }

    function falaNome() {
        console.log(criaNome('Hirruá'));
    }

    console.log(altura, peso, idade);
    falaNome();

}) (21, 1.73, 60);