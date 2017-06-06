const chickenForm = document.querySelector('.newChicken')
const chickens = []


function renderList() {
  
}

function onSubmit(ev) {
  ev.preventDefault()
  const form = ev.target
  const listBox = document.querySelector('.chickenList')

  const newChicken = {
    breed: form.chickenBreed.value,
    country: form.country.value,
  }

  chickens.push(newChicken)

  listBox.appendChild(renderList())
}

chickenForm.addEventListener('submit', onSubmit)
