"use strict";
// type Produto = {
//   preco: number,
// }
function handleProdutoCarro(dados) {
    dados.rodas;
    dados.portas;
    dados.preco;
}
window.userId = 100;
console.log(window.userId);
function isUserData(obj) {
    if (obj && typeof obj === "object" && ("nome" in obj || "email" in obj || "cpf" in obj)) {
        return true;
    }
    else {
        return false;
    }
}
function validJson(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
}
function retrieveLocalStorage() {
    const localUserData = localStorage.getItem("user");
    if (localUserData && validJson(localUserData)) {
        const userData = JSON.parse(localUserData);
        if (isUserData(userData)) {
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.querySelector(`#${key}`);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    // window.userData[key] = value;
                }
            });
        }
    }
}
retrieveLocalStorage();
window.userData = {};
const form = document.querySelector("#form");
form?.addEventListener("keyup", handleInput);
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.userData[target.id] = target.value;
    }
    localStorage.setItem("user", JSON.stringify(window.userData));
}
