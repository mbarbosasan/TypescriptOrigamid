export {}

function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0);
}

console.log(somar(10, 20))
console.log(somar(1, 2, 3))

const subtrair = (a: number, b: number) => a - b;

console.log(subtrair(5, 3))

type Callback = (event: MouseEvent) => void;

function pintarTela(cor: string) {
  document.body.style.background = cor
}

const btn = document.querySelector("button");

function isString(value: any) {
  if (typeof value === "string") {
    return true;
  }
}

console.log(isString("teste"))
console.log(isString(200))

function terminate(mensagem: string): never {
  throw new Error(mensagem)
}

// terminate("Um erro inesperado ocorreu.")
// console.log("Tente novamente")

interface Quadrado {
  lado: number,
  perimetro(lado: number): number,
}

function calcular(forma: Quadrado) {
  forma.perimetro(forma.lado);
}


function normalizar(valor: string): string;
function normalizar(valor: string[]): string[]
function normalizar(valor: string | string[]): string | string[] { 
  if (typeof valor === "string") {
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase())
  }
}

console.log(normalizar(" Produto ").toUpperCase())
console.log(normalizar([" Banana", " Maçã ", "   Pêra"]).reverse())


function $(seletor: 'a'): HTMLAnchorElement | null;
function $(seletor: 'video'): HTMLVideoElement | null
function $(seletor: string): Element | null
function $(seletor: string): Element | null {
  return document.querySelector(seletor)
}

$("a")
$("video")?.volume

//EXERCICIO 
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function roundedNumbers(value: string): string
function roundedNumbers(value: number): number
function roundedNumbers(value: string | number): number | string {
  if (typeof value === "number") {
    return Math.ceil(value)
  } else {
    return Math.ceil(Number(value))
  }
}

console.log(roundedNumbers(200.32))
console.log(roundedNumbers("200.32"))