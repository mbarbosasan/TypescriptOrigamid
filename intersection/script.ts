// type Produto = {
//   preco: number,
// }

type Carro = {
  rodas: number,
  portas: number
}

type Livro = {
  paginas: number
}

function handleProdutoCarro(dados: Produto & Carro) {
  dados.rodas
  dados.portas
  dados.preco
}

// console.log(handleProdutoCarro({rodas: 4, portas: 5, preco: 30000}))


type TipoCarro = {
  rodas: number,
  portas: number,
}

type tipoCarroComPreco = TipoCarro & {
  preco: number
}

interface Window {
  userId: number
}

window.userId = 100

console.log(window.userId)