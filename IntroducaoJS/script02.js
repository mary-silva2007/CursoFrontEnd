// Estruturas de Dados

// Condicionais ( if  Else / Switch Case)

//if
var precoProduto = 150;
if (precoProduto >=100){
    console.log("Valor a Pagar: "+(precoProduto*0.9))
} else{
    console.log("Valor a Pagar: "+(precoProduto))
}

// switch case
var mes = 2;
switch (mes) {
    case 1:
     console.log("Janeiro");    
     break; //sempre colocar o break
    case 2:
     console.log("Fevereiro");    
     break;
    case 3:
     console.log("Março");    
     break;
     
    default:
        console.log("Outro Mês");
        break;
}
//Estrutura de Repetição

// For (Contáveis)

for(let i = 0; i<=100; i++){
    console.log(i);
}

// whilw (Incontáveis)

var continuar = true; //condição de parada
var numeroEscolhido = 3;
var contador = 0;
while(continuar){ //a parada acontece quando continuar for false
    contador++;
    let numeroSorteado = Math.round(Math.random()*10);
    if(numeroEscolhido==numeroSorteado){
        continuar = false;
        console.log("Acertou miseravi")
    }
    console.log("Tentativas: ",+contador)
}

//Funções (Ação Específica) podendo ser chamada a qualquer momento dentro do código

function ola (nome){ //function return
    return "Olá, "+nome;
}

function hello (nome){ //function void
    console.log("Hello, "+nome);
}
console.log(ola("Maria"));

hello("Maria");