"use strict";
const { body } = document;
function handleData({ nome, preco }) {
    nome.includes("book");
    preco?.toFixed;
}
handleData({
    nome: "Notebook",
    preco: 2000,
});
document.documentElement.addEventListener("click", handleClick);
function handleClick({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        console.log(currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`);
    }
    console.log(pageX);
}
function comparar(tipo, ...numeros) {
    if (tipo === "menor") {
        return Math.min(...numeros);
    }
    if (tipo === "maior") {
        return Math.max(...numeros);
    }
}
console.log(comparar("menor", 3, 4, 5, 6, 7, 10, 20, 30, 40, 50));
console.log(comparar("maior", 3, 4, 5, 6, 7, 10, 20, 30, 40, 50));
