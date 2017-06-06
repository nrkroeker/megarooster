const chickenForm = document.querySelector('.newChicken')
const chickenList = [{breed: 'Buckeye', country: 'United States'}, {breed: 'Norfolk Grey', country: 'United Kingdom'}, {breed: 'Chios Fighting Chicken', country: 'Greece'}]
const listBox = document.querySelector('.chickenList')


function renderListItem(chicken) {
    const li = document.createElement('li')
    li.innerHTML = `${chicken.breed}, ${chicken.country}`
    listBox.appendChild(li)
}

function renderList() {
  for(var i = 0; i < chickenList.length; i++) {
    renderListItem(chickenList[i])
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

  renderListItem(newChicken)
}

document.addEventListener("DOMContentLoaded", function(event) {
  renderList()
  chickenForm.addEventListener('submit', onSubmit)
});
