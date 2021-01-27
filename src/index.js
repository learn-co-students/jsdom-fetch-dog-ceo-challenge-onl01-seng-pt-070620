console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener("DOMContentLoaded", function(){
    loadImage(); fetchBreed();
});


function loadImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(results => {
        results.message.forEach(image => addImage(image))
        });
}

function addImage(newImgUrl) {
    let container = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = newImgUrl;
    container.appendChild(newImage);
}

function fetchBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breed => addBreed(breed)); 
}

function addBreed(breed) {
    const ul = document.getElementById('dog-breeds');
    const keys = Object.keys(breed.message)
    keys.forEach(breed => {
        const li = document.createElement('li')
        li.innerHTML = breed
        ul.appendChild(li)
        li.addEventListener('click', breedColor);
    }) 
}

function breedColor(event) {
    event.target.style.color = 'green';
}

//Challenge #4 Incomplete

function refreshList(element) {
    element.innerHTML = '';
}

function updateList(breeds) {
    let ul = document.querySelector("#dog-breeds")
    refreshList(ul)
    breeds.forEach(breed => addBreed(breed))
}

function filterBreeds(){
    let dropdown =  document.querySelector("#breed-dropdown")
    dropdown.addEventListener('change', function(event){
    updateList(breeds.filter((breed) => breed.startsWith(dropdown.value)))
    })
}