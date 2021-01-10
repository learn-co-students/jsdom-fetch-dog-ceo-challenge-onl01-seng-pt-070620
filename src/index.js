console.log('%c HI', 'color: firebrick')

// challenge 1
function fetchImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
        .then(response => response.json())
        .then(json => addImages(json));
}

function addImages(json) {
    const body_div = document.getElementById('dog-image-container')
    json.forEach(image => {
        const img = document.createElement('img')
        img.setAttribute("src", "")
        img.setAttribute("alt", "dog_CEO")
        img.setAttribute("width", "100")
        img.setAttribute("height", "200")
        img.src = image.src
        body_div.appendChild(img)
    })
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImage()
  })

  // challenge 2
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(json => dogBreeds(json));

  function dogBreeds(json) {
      const breed = []
      const ul = document.getElementById("dog-breeds")
      json.forEach(breed => {
        const li = document.createElement("li")
        breed.push(breed)
      })
      ul.appendChild(li)
  }

  // challenge 3
  document.addEventListener('click', changeColor() {
      const color = document.querySelectorAll("li");
      color.style.font = "green";
  })

  //challenge 4
  