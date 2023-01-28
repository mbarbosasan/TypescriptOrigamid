async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json')
  const json = await response.json();
  handleCursos(json)
}

fetchCursos()


function handleCursos(json: unknown) {
  if (json instanceof Array) {
    json.forEach((item) => item)
    console.log("É uma instãncia de array")
  }
  if (Array.isArray(json)) {
    json.forEach((item) => item)
    console.log("É uma array")
  }
}

function isString(value: unknown): value is string {
  return typeof value === "number"
}

function handleData(data: unknown) {
  if (isString(data)) {
    data.toLowerCase();
  }
}

console.log(handleData(20202))