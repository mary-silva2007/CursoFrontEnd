//adicionar elementos avançados com o DOM
//CONSTRUIR UM CABEÇARIO COM DOM (Header)

let header = document.createElement("header");
header.style.backgroundColor = "black";
header.style.height = "8vh"
document.body.appendChild(header); // adc o header como elementos
document.body.style.margin = 0; // retirando a margun do body

//adicionando elementos no header
let divNav = document.createElement("div");
divNav.style.display = "flex";
divNav.style.justifyContent = "space-around";
divNav.style.color = "aliceblue";
divNav.style.height = "100%";
divNav.style.alignItems = "center";
divNav.style.fontSize = "Svh";
divNav.style.fontFamily = "Comic Sans MS"

header.appendChild(divNav);

let itensNav = ["Home", "Produtos", "Contatos"];
//adicionar itens da Nav
itensNav.forEach(element => {
    let item = document.createElement("a");
    item.innerText = element;
    divNav.appendChild(item);
});