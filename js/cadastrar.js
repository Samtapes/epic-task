document
    .querySelector('#botao-cadastrar')
    .addEventListener("click", (e) => {
        e.preventDefault();
    
        const form = document.querySelector("form");

        const tarefa = {
            id: new Date().getTime(),
            titulo: form.titulo.value,
            descricao: form.descricao.value,
            pontos: form.pontos.value
        }

        salvar(tarefa);
    });


function salvar(tarefa) {
    var tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    window.location = "index.html";
}   