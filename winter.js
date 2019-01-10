function fetchBooks() {
  //write fetch request to the Game of Thrones API
var json = fetch("http://api.open-notify.org/astros.json")
.then(response => response.json())
.then(json => console.log(json));
return json;
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(people => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${people}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

renderBooks();