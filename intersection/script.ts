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


//EXERCICIO 
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData


interface UserData {
  nome?: string,
  email?: string,
  cpf?: string;
}

function isUserData(obj: unknown): obj is UserData {
  if (obj && typeof obj === "object" && (
    "nome" in obj || "email" in obj || "cpf" in obj
  )) {
    return true;
  } else {
    return false;
  }
}

function validJson(str: string) {
  try {
    JSON.parse(str)
    return true;
  } catch (e) {
    return false;
  }
}

function retrieveLocalStorage() {
  const localUserData = localStorage.getItem("user")
  if (localUserData && validJson(localUserData)) {
    const userData = JSON.parse(localUserData)
    if (isUserData(userData)) {
      Object.entries(userData).forEach(([key, value]) => {
        const input = document.querySelector(`#${key}`);
        if (input instanceof HTMLInputElement) {
          input.value = value;
          // window.userData[key] = value;
        }
      })
    }
  }
}

retrieveLocalStorage()

interface Window {
  userData: any
}

window.userData = {}

const form = document.querySelector<HTMLFormElement>("#form")

form?.addEventListener("keyup", handleInput)

function handleInput({target}: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.userData[target.id] = target.value;
  }
  localStorage.setItem("user", JSON.stringify(window.userData))
}
