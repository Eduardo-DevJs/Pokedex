const btn = document.querySelector("button")
const input = document.querySelector("input")
const img = document.querySelector("img")
const nome = document.querySelector(".name")

function handleClick(e){
  e.preventDefault()
  const inputUser = input.value
  showPokemon(inputUser)
}

async function showPokemon(person){
  const url = `https://pokeapi.co/api/v2/pokemon/${person}`
  const responseDados = await fetch(url)
  const dadosJson = await responseDados.json()

  nome.innerText = dadosJson.name
  img.src = dadosJson.sprites.other.dream_world.front_default

}

btn.addEventListener("click", handleClick)