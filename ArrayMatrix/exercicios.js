// 1. Criando e Manipulando Arrays

// Criação de Array Frutas 
let frutas = ["maça", "banana", "laranja", "uva"];

// a. Exibe o segundo elemneto do Array 
 console.log(frutas[1]); // "banana"

 // b. Adiciona a fruta "melancia" no final do Array 
frutas.push("melancia");

// c. Remove o primeiro elemento do Array
frutas.shift();

// d. Exibe o comprimento do Array atualizado 
console.log(frutas.length); // O comprimento final do Array 


// 2. Iterando sobre Arrays

// Criando um Array com os números de 1 a 10
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// a. Percorre o array e exibe todos os números no console usando um loop for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// b. Usa o método forEach para exibir os números 
numeros.forEach(function(numero) {
    console.log(numero);
})


// 3. Manipulação de Strings com Arrays

// Criação do Array com as palavras
const palavras = ["JavaScript", "é", "uma", "linguagem", "poderosa"];

// a. Usando o método join para transformar o array em uma frase 
const frase = palavras.join(" ");
console.log("Frase com join: " + frase);

// b. Usando o método splice para adicionar a palavra "muito"
palavras.splice(2, 0, "muito"); // Adicionar a palavra "muito" na posição 2
const novaFrase = palavras.join(" ");
console.log("Frase após splice: " + novaFrase);


// 4. Utilizando Métodos Avançados (Dado o array:)

let numeros = [15, 8, 22, 5, 19, 30];

// a. Ordenando o array em ordem crescente
let numerosOrdenados = [...numeros].sort((a, b) => a - b);
console.log("Array ordenado em ordem crescente:", numerosOrdenados);

// b. Filtrando os números maiores que 10 e armazenando-os em um novo array
let numerosMaioresQueDez = numeros.filter(numero => numero > 10);
console.log("Números maiores que 10:", numerosMaioresQueDez);

// c. Somando todos os valores do array usando o método reduce
let somaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log("Soma total dos números:", somaTotal);


// 5. Procurando Elementos

// Criação do array com os elementos
let veiculos = ["carro", "moto", "bicicleta", "avião", "barco"];

// a. Verificando se o elemento "moto" está presente no array usando o método includes
let temMoto = veiculos.includes("moto");
console.log("O elemento 'moto' está presente no array?", temMoto);

// b. Usando o método indexOf para encontrar a posição de "avião" no array
let posicaoAviao = veiculos.indexOf("avião");
console.log("A posição de 'avião' no array é:", posicaoAviao);
