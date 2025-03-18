// Manipulação de String (Cadeia de Caracteres)

let texto = "Aula de JavaScript";

//contar quantos caracteres tem essa variavel 
console.log(texto.length); // imprimir 18 caracteres 

// Maiusculas e Minusculas 
console.log(texto.toUpperCase()); //MAIÙSCULAS 
console.log(texto.toLowerCase()); //minúsculas

//partes da String 
console.log(texto.substring(0,4)); //aula  
console.log(texto.slice(-10)); //JavaScript

//Substituição de partes da String
let texto2 = texto.replace("Java", "Type"); //Aula de TypeScript  
console.log(texto2); 

//tesoura (trim)
let texto3 = "  JavaScript  ";
console.log(texto3); //"  JavaScript  "
console.log(texto3.trim()); //"JavaScript" 

//Separação de Textos

let linguagens = "JavaScript, Python, PHP, C++, Java"
let linguagensArray = linguagens.split(", "); 
console.log(linguagens);
console.log(linguagensArray); 

//desafio  
let desafio = "Bom Dia Com Muita Alegria"; //contar a quantidade de caracteres sem espaço
let solucaoDesafio = desafio.replaceAll(" ", " "); 
console.log(desafio);
console.log(solucaoDesafio);
console.log(desafio.length);
console.log(solucaoDesafio.length);
