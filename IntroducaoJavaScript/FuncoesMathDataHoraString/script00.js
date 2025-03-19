//funcoes matemáticas

//SQRT e POW (quadrado e a potencia)

//calcular a raiz quadrada de 25
console.log(Math.sqrt(25)); //5

//calcular a potencia de um nº pro outro
console.log(Math.pow(7,2)); //7² = 49
console.log(Math.pow(4,3)); //4³= 64
console.log(Math.pow(27,1/3)) // ³√27 = 3

//funçoes de arredondamento (round, ceil, floor)
console.log(Math.round(4.7)); // Retorna 5 (arredondamento para o inteiro mais próximo)
console.log(Math.round(4.4));// 5
console.log(Math.ceil(4.1)); // Retorna 5 (arredonda para cima)
console.log(Math.floor(4.9)); // Retorna 4 (arredonda para baixo)

//Números Aleatórios (Math.random)
console.log(Math.random()); // Retorna um número decimal entre 0,1
console.log(Math.random() * 1000) //numero entre 0 e 999,99

//valor absoluto, mínimo e máximo

//Valor Absoluto
console.log(Math.abs(-10)); //10

//minimos e máximos
console.log(Math.min(1,2,3,4,5,6,7,8,9)); //1
console.log(Math.max(1,2,3,4,5,6,7,8,9)); //9 