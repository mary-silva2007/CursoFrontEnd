//Script de Manipulação DOM 

//getElementById -> variável Simples
let titulo = document.getElementById("titulo");//html -> id
console.log(titulo);// mostra as informações do id
titulo.innerText = "Outro Titulo"; //modificar o conteudo da id

//getElementsByTagName -> variável Vetor(Array)
let paragrafo = document.getElementsByTagName("p"); //html -> p
paragrafo[0].innerText = "Exemplo de Parágrafo Modificado por DOM" //modificar o elemento
paragrafo[1].style.color = "red";

//getElementsByClassName -> variável  Vetor(Array)
let descricao = document.getElementsByClassName("descricao");
for(let i = 0; i<descricao.length; i++){
    descricao[i].style.color = "blue"
};

//querySelector -> variável Simples -> seleciona o primeiro 
let p = document.querySelector("p");
//modificação de font
p.style.fontWeight = "bold"; 

//querySelectorAll -> variavel Vetor(array) ->selecionar todos 
 let descricaoALL = document.querySelectorAll(".descricao");
 descricaoALL.forEach(element =>{
    element.style.fontWeight = "bold"
 });
 
 //eventos listener(ouvite)

 function MudarCorFundo(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "#dba3f7";
 }

 //chamento direto no script o ouvinte
 document.getElementById("btnColor").addEventListener(
    "click",OutraCor
 )

 function OutraCor(){
    let body = document.querySelector("body")
    body.style.backgroundColor = "pink";
 }