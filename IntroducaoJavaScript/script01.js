// Tipos de Operações 

//Operadores Aritméticos (+,-,*,/,%)
var a = 10;
var b = 3;

console.log("Soma:"+ (a+b)); //13
console.log("Subtração:"+ (a-b)); //7
console.log("Multiplicação:"+ (a*b)); //30
console.log("Divisão:"+ (a/b)); //3.333
console.log("Resto:"+(a%b)); //1

//Operadores Relacionais (>,>=,<,<=,==,===)
//true or false
var a = 10;
var b = 20; 
var c = "10";

console.log("Relacionais: "+(a>b)); // False
console.log("Igualdade Simples: "+(a==c)); // True
console.log("Igualdade Estrita: "+(a===c)); // False

//Operadores Lógicos (&& - E, || - OU, ! - Não)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: "+nota1>7 && nota2>7); // False 
console.log("Aprovação: "+nota1>7 || nota2>7); // True
console.log(!false); // True 