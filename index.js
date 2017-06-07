const chickenForm = document.querySelector('.newChicken')
const chickenList = [{breed: 'Huttegem', country: 'Belgium'}, {breed: 'Norfolk Grey', country: 'United Kingdom'}, {breed: 'Chios Fighting Chicken', country: 'Greece'}]
const listBox = document.querySelector('.chickenList')

function renderListItem(chicken, list) {
    const button = document.createElement('button')
    const li = document.createElement('li')
    li.innerHTML = `${chicken.breed}, ${chicken.country}`
    button.classList.add('star')
    button.textContent = 'Favorite'
    li.appendChild(button)
    listBox.insertBefore(li, list.firstChild)
}

function renderList() {
  list = document.querySelector('.chickenList')
  for(var i = 0; i < chickenList.length; i++) {
    renderListItem(chickenList[i], list)
  }
}

function onSubmit(ev) {
  ev.preventDefault()
  const form = ev.target

  const newChicken = {
    breed: form.chickenBreed.value,
    country: form.country.value,
  }

  chickenList.push(newChicken)
  list = document.querySelector('.chickenList')

  renderListItem(newChicken, list)
}

document.addEventListener("DOMContentLoaded", function(event) {
  renderList()
  chickenForm.addEventListener('submit', onSubmit)vc
});
