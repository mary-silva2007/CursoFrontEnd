// script para as perguntas do quiz

let perguntas = [];
let perguntasAtual = 0;

let perguntaElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let resultadoElement = document.getElementById("resultado");

//carregar as perguntas do json
fetch("perguntas.json")
.then(Response.json())
.then(data =>{
    perguntas = data
    carregarPerguntas();
}).catch(error => console.error("Erro ao carregar perguntas:", error));

//criar a funçao para carregar as Perguntas no HTML
function carregarPerguntas(){
    
}

