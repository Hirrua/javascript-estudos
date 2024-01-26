const inputTarefas = document.querySelector(".input-tarefa");
const tarefas = document.querySelector(".tarefas");
const btnTarefa = document.querySelector(".btn-add-tarefa");

document.addEventListener("click", function(event) {
    const el = event.target;

    if (el.classList.contains("apagar")) { // O pai do botão precisa ser apagado (li)

        el.parentElement.remove(); // .parentElement me diz quem é o pai do meu elemento clicado

        salvarTarefa();
    }
})

inputTarefas.addEventListener("keypress", function(event){ // Keypress para capturar qual tecla foi acionada

    if (event.keyCode === 13) { // Verificando se o keyCode é igual 13 (Key code do ENTER)

        if (!inputTarefas.value) return; // Verifica se o valor do input está vazio
        
        criarTarefa(inputTarefas.value);    
    }  
})

// IMPORTANTE: sempre separar/quebrar em outras funções e não sobrecarregar apenas UMA

function criarLista() { // Uma função apenas para criar li do HTML
    const li = document.createElement("li");
    return li;
}

function criarTarefa(tarefa) {
    const lista = criarLista(); 
    lista.innerHTML = tarefa;
    tarefas.appendChild(lista); // Adiciona no pai as tarefas criadas
    
    limpaInput(); // Apagar do input o que foi escrito
    
    botaoApagar(lista);
    salvarTarefa();
}

function botaoApagar(li) {
    li.innerText += ' '; // Só para dar um espaço entre o botão e a tarefa
    
    const btnApagar = document.createElement("button");
    
    btnApagar.innerText = 'Apagar Tarefa'; // Adicionando a escrita no botão
    
    // btnApagar.classList.add("apagar"); // Pode ser feito dessa forma
    
    btnApagar.setAttribute("class", "apagar") // setAttribute é importante, pois posso setar um href em um link por exemplo. Primeiro passo o atributo e depois o valor
    
    li.appendChild(btnApagar); 
}

function limpaInput() {
    inputTarefas.value = " ";
    inputTarefas.focus(); // Deixa o cursos piscando no input (volta o focos para o input)
}

btnTarefa.addEventListener("click", function() {
    if (!inputTarefas.value) return; // Verifica se o valor do input está vazio
    
    criarTarefa(inputTarefas.value);
});

function salvarTarefa() {
    const listaTarefas = tarefas.querySelectorAll("li"); // Seleciono somentes as li
    
    const arrayTarefas = [];

    for (let tf of listaTarefas) {
        let tarefaTexto = tf.innerText;

        tarefaTexto = tarefaTexto.replace("Apagar Tarefa", "").trim(); // Apagendo o texto do botão com o replace(texto a ser substituido, o que vai substituir). A outra função é para remover espaços sobrando das pontas. (ex: ["tarefa "] -> ["tarefa"])

        arrayTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(arrayTarefas); // Cria uma string do meu array convertido para JSON (em string). JSON -> usado para salvar dados entre sistemas

    localStorage.setItem("tarefas", tarefasJSON); // "mini base de dados" Um local do para salvar do próprio navegador. OBS: só pode salvar strings. setItem(nome_recuperação, valor)
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem("tarefas"); // buscando no localstorage as tarefas que estão salvas pelo nome de recuperação (key)

    const listaTarefas = JSON.parse(tarefas) // .parse converte novamente para um obj javascript

    for(let   tarefa of listaTarefas) {
        criarTarefa(tarefa)
    }
}

addTarefasSalvas();