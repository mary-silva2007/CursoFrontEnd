// Script Para Lista Tarefas -> DOM

document.body.style.backgroundColor = "gray";
document.body.style.textAlign = "center";
document.body.style.fontFamily = "Arial";
let container = document.querySelector(".container")
container.style.width = "50%";
container.style.backgroundColor = "lightblue";
container.style.margin = "auto";
container.style.padding = "30px";
container.style.borderRadius = "15px";
let tarefa = document.getElementById("tarefa"); //input
tarefa.style.width = "50%";
tarefa.style.padding = "5px";
tarefa.style.borderRadius = "5px";
let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.style.padding = "6px 10px";
btnEnviar.style.border = "none";
btnEnviar.style.brackground = "green";
btnEnviar.style.color = "black";
btnEnviar.style.borderRadius = "5px";
btnEnviar.style.cursor = "pointer";

//Lógica de Funcionamento da Lista de Tarefas

//criar o ouvinnte para a tarefa
btnEnviar.addEventListener(
    "click", criarTarefa
);

function criarTarefa(){
    let texto = tarefa.value.trim();
    if(texto === ""){
        return;
    }
    //se não estiver vazio
    let li = document.createElement("li");
    li.innerHTML = texto+'<button onclick="removeTarefa()" class="btnRemover">Remover</button>';
    //adicionar li -> ul
    let ul = document.getElementById("ListaTarefas");
    ul.appendChild(li);
    //apaga o campo do input
    tarefa.value = "";
}

//function Remover
function removeTarefa(botao){
    botao.parentElement.remove();
}
btnCor.addEventListener(
    "click", mudarCor
)

function mudarCor(){
    let cores = ["lightblue", "green", "aliceblue", "purple", "orange"];
    document.body.style.backgroundColor = cores[Math.floor(Math.random() * cores.length)];
}
