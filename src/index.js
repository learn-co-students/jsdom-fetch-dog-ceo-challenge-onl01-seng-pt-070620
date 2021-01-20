console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breeds = []

function fetchDogs() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        data.message.forEach(dogImage => {
        const imageContainer = document.querySelector('#dog-image-container')
        const img = document.createElement('img')
        img.src = dogImage
        imageContainer.appendChild(img)
        })
    })
}

// function fetchBreeds(data) {
//     fetch(breedUrl)
//     .then(resp => resp.json())
//     .then(data => {
//         breeds = Object.keys(data.message);
//         breeds.forEach(function(name) {
//         let ul = document.querySelector('#dog-breeds');
//         let li = document.createElement('li')
//         li.innerHTML = name
//         ul.appendChild(li)
//         updateList(breeds)
//         breedListener()
//         })
//     })
// }



function fetchBreeds() {
    fetch(breedUrl);
    .then(resp => resp.json());
    .then(data => {

    breeds = Object.keys(data.message);
    updateList(breeds);
    breedListener();
    })
}

function updateList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeBreeds(ul);
    breeds.forEach(breed => clickBreed(breed));
}

function removeBreeds(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }

function breedsStartingWith(letter) {
    updateList(breeds.filter(breed => breed.startsWith(letter)));
}

function breedListener () {
    const dropDown = document.querySelector('#breed-dropdown');
    dropDown.addEventListener('change', function(e) {
    breedsStartingWith(e.target.value);
    })
}

function clickBreed(breed) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('click', updateColor);
  }

function updateColor(event) {
    event.target.style.color = 'firebrick';
}
  

document.addEventListener('DOMContentLoaded', function() {
    fetchDogs();
    fetchBreeds();
})