function typeGuard(value: any) {
  if (typeof value === "string") {
    return value.toLowerCase();
  }
  if (typeof value === "number") {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

// console.log(typeGuard(200))
// console.log(typeGuard("TexTo"))
// console.log(typeGuard(document.body))


const obj = {
  nome: 'Origamid',
  preco: "200"
}

if (("preco") in obj) {
  console.log("Sim")
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json')
  const json = await response.json();
  handleProduto(json)
}

interface Produto {
  nome: string;
  preco: number;
}

function handleProduto(data: Produto) {
  console.log(data);
  if ("preco" in data) {
    document.body.innerHTML += `
    <p> Nome: ${data.nome}</p>
    <p> Preço: ${data.preco + 100}</p>`
  }
}

fetchProduto();
