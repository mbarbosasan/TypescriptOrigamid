"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(somar(10, 20));
console.log(somar(1, 2, 3));
const subtrair = (a, b) => a - b;
console.log(subtrair(5, 3));
function pintarTela(cor) {
    document.body.style.background = cor;
}
const btn = document.querySelector("button");
function isString(value) {
    if (typeof value === "string") {
        return true;
    }
}
console.log(isString("teste"));
console.log(isString(200));
function terminate(mensagem) {
    throw new Error(mensagem);
}
function calcular(forma) {
    forma.perimetro(forma.lado);
}
function normalizar(valor) {
    if (typeof valor === "string") {
        return valor.trim().toLowerCase();
    }
    else {
        return valor.map((item) => item.trim().toLowerCase());
    }
}
console.log(normalizar(" Produto ").toUpperCase());
console.log(normalizar([" Banana", " Maçã ", "   Pêra"]).reverse());
function $(seletor) {
    return document.querySelector(seletor);
}
$("a");
$("video")?.volume;
function roundedNumbers(value) {
    if (typeof value === "number") {
        return Math.ceil(value);
    }
    else {
        return Math.ceil(Number(value));
    }
}
console.log(roundedNumbers(200.32));
console.log(roundedNumbers("200.32"));
