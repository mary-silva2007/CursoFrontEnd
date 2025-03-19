// Introdução JavaScript

// Tipo de Dados (escopo, tipagem)

// TIPO - STRING - TEXT
var nome ="João"; // Variável de escopo global
nome="José"; // redefinir o valor
var nome="Pedro"; // redeclaração do valor

//TIPO - NUMBER
let idade =25; // variável de escopo local                      
idade =26; //redefinir valor -ok
// let idade =30; (erro declarar)

//TIPO - NUMBER
const PI = 3.1415; // constante 
// PI = 3.9076 ; // ERRO - não pode redefinir
// const PI = 4.9088 ; // NÃO PODE REDECLARAR 

console.log("Nome: "+nome); // imprimir no terminal
console.log("Idade: "+idade); // number
console.log("PI: "+PI); // number
console.log("Aprovação: "+aprovado); // Boolean
console.log("Média: "+media); // undefined
console.log("Informações: "+info); // null

// TIPO BOOLEAN
var aprovado = true;

// TIPO UNDEFINED
var media;

// TIPO null - vazio
var info = null;