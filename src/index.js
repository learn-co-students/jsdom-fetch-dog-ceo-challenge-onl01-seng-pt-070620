console.log('%c HI', 'color: firebrick')

function fetchImg() {
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
return fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderImg(json));
}

function renderImg(images) {
  const contain = document.getElementById('dog-image-container');
  const newImage = document.createElement('img');
  images.message.forEach(element => newImage.src = element);
  contain.appendChild(newImage);
}

function fetchBreed() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  return fetch(breedUrl)
  .then(resp => resp.json())
  .then(breed => renderBreed(breed));
}

function renderBreed(breed) {
  const contain = document.getElementById('dog-breeds');
  const keys = Object.keys(breed.message)
  keys.forEach(r => {
  const li = document.createElement('li')
  li.innerHTML = r
  contain.appendChild(li)
  })
  //contain.innerHTML = breed
}

document.addEventListener('DOMContentLoaded', function() {
  fetchImg(); fetchBreed();
})
