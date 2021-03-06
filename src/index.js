console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener('DOMContentLoaded', function() {
    fetchImages()
    fetchBreeds()
})

function fetchImages() {
  fetch(imgUrl)
  .then(res => res.json())
  .then(json => json.message.forEach(image => createDogImages(image)))
}

function createDogImages(image){
  let dogsContainer = document.querySelector('#dog-image-container')
  let img = document.createElement('img')
  img.src = image
  dogsContainer.appendChild(img)
}

function fetchBreeds(){
   fetch(breedUrl)
  .then(res => res.json())
  .then(json =>  {
      breeds = Object.keys(json.message)
      console.log(breeds)
      updateBreedList(breeds)
      addBreedSelectListener()
  })
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => createBreeds(breed));
  }

  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

function createBreeds(breed) {
   let dogBreeds = document.getElementById('dog-breeds')
   let li = document.createElement('li')
   li.innerText = breed
   li.style.cursor = 'pointer'
   dogBreeds.appendChild(li)
   li.addEventListener('click', updateColor);

}

function addBreedSelectListener() {
    let breedDropdown = document.querySelector('#breed-dropdown');
    breedDropdown.addEventListener('change', function (event) {
      selectBreedsStartingWith(event.target.value);
    });
  }

  function selectBreedsStartingWith(letter) {
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }

function updateColor(event) {
    event.target.style.color = 'palevioletred';
  }