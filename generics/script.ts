export {}

// function retorno<variavel>(a: variavel): variavel {
//   return a
// }

// console.log(retorno("A game"))
// console.log(retorno(200))
// console.log(retorno(true))

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const frutas = ["Banana", "Maçã", "Uva", "Laranja", "Limão", "Pêra"]

// function firstFive<T>(lista: T[]): T[] {
//   return lista.slice(0, 5)
// }

// console.log(firstFive(numeros))
// console.log(firstFive(frutas))

// function notNull<T>(arg: T) {
//   if (arg !== null) return arg
//   else return null
// }

// notNull("Moises")?.toLocaleLowerCase()
// notNull(200)?.toFixed()

// function tipoDado<T>(a: T): {dado: T, tipo: string} {
//   const resultado = {
//     dado: a,
//     tipo: typeof a
//   }
//   console.log(resultado)
//   return resultado;
// }

// tipoDado(200).tipo


//Dessa forma a função perde a referência ao acessar o objeto posteriormente.
// function extractText(el: HTMLElement) {
//   return {
//     texto: el.innerText,
//     el,
//   }
// }


// function extractText<T extends HTMLElement>(el: T) {
//   return {
//     texto: el.innerText,
//     el,
//   }
// }

// const link = document.querySelector("a")

// if (link) {
//   console.log(extractText(link).el.href)
// }

//Recriando a forma de seleção de elementos do JQuery

// function $<T extends Element>(selector: string): T | null {
//   return document.querySelector(selector)
// }

// const link = $<HTMLAnchorElement>("a")?.href

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string,
  preco: number
}

async function handleData() {
  const notebook = await getData<Notebook>("https://api.origamid.dev/json/notebook.json")
  console.log(notebook.nome)
}


handleData();