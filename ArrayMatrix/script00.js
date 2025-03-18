//declaração de um Array
let array = []; //aray dinâmico

let arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayTexto = ["Sapato", "Caixa", "Meia"];
let arraymisto = [1, "José", true];

//tamanho de um array
console.log(arrayNumeros.length); //9

//acessar um elemento do array (index)
console.log(arrayTexto[1]); // posição -1

//adicionar elemnetos no array
// no começo
arrayTexto.unshift("Tênis");
console.log(arrayTexto);
// no fim
arrayTexto.push("Chinelo"); 
console.log(arrayTexto);

//trocar valo 
arrayTexto[2] = "Sacola";
console.log(arrayTexto);

//remover elementos do array
// no começo (shift)
arrayTexto.shift();
console.log(arrayTexto);
// no final (pop)
arrayTexto.pop();
console.log(arrayTexto);

//percorrer um array (laço de repetição)
//percorrer o array de números 
for(let i =0;i<arrayNumeros.length;i++){
    console.log("índice["+i+"]="+[arrayNumeros[i]])
}

//forEach
arrayTexto.forEach(elemento => {
    console.log(elemento)
});

//Métodos útei

//IndexOf
console.log(arrayNumeros.indexOf(5)); //4
console.log(arrayNumeros.indexOf(10)); //-1 (elemento inesistente)

//Splice (remover elementos da posição)
arrayMisto.splice(2,1)
console.log(arrayMisto);

//Operações Avançadas de Arrays
// map - comparação
let valores = [10, 20, 30, 40, 50,];
let valoresDobro = valores.map(x => x*2);
console.log(valoresDobro);
// filter - comparação 
let valoresFilter = valoresFilter(x => x>25);
console.log(valoresFilter);

//Desafio (filtro x<35) && (x*3) = [30, 60, 90]
let valoresDesafio = valores.filter(x=>x<35).
map(x=>x*3); 

//reduce ([] -> let x)
let soma = valores.reduce((x,y) => x+y); 
console.log(soma);

//sort (organizar)
let aleatorio = [7, 4, 2, 9, 1, 5, 8, 3, 6];
console.log(aleatorio);
let ordenado = aleatório.sort();
console.log(ordenado);
