"use strict";
// async function fetchCursos() {
//   const response = await fetch('https://api.origamid.dev/json/cursos.json')
//   const json = await response.json();
//   handleCursos(json)
// }
// fetchCursos()
// function handleCursos(json: unknown) {
//   if (json instanceof Array) {
//     json.forEach((item) => item)
//     console.log("É uma instância de array")
//   }
//   if (Array.isArray(json)) {
//     json.forEach((item) => item)
//     console.log("É uma array")
//   }
// }
// function isString(value: unknown): value is string {
//   return typeof value === "number"
// }
// function handleData(data: unknown) {
//   if (isString(data)) {
//     data.toLowerCase();
//   }
// }
// // console.log(handleData(20202))
// async function fetchProduto() {
//   const response = await fetch('https://api.origamid.dev/json/notebook.json')
//   const json = await response.json();
//   handleProduto(json)
// }
// fetchProduto();
// interface Produto {
//   nome: string;
//   preco: number;
// }
// function isProduto(value: unknown): value is Produto {
//   if (value && typeof value === "object" &&
//    'nome' in value &&
//    'preco' in value
//    ) {
//     return true
//   } else {
//     return false
//   }
// }
// function handleProduto(data: unknown) {
//   if (isProduto(data)) {
//     console.log(data.nome)
//   }
// }
//EXERCISE TIME
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const json = await response.json();
    handleCursos(json);
}
fetchCursos();
function isCurso(value) {
    if (value && typeof value === "object" && "nome" in value && "tags" in value && "horas" in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
      <div>
        <h2>${item.nome}</h2>
        <p> ${item.horas}</p>    
        <p> ${item.tags.join(", ")}</p>
      </div>  
      `;
        });
    }
}
