console.log('%c HI', 'color: firebrick')

let breeds = [];

document.addEventListener('DOMContentLoaded', function() {
    findImage();
    findBreed();
})

function findImage() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => json.message.forEach(image => showImage(image)))
};

function showImage(dogImage) {
    const image = document.createElement("img")
    image.src = dogImage
    document.querySelector("#dog-image-container").appendChild(image)
};

function findBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breeds = Object.keys(json.message);
            updateList(breeds)
            filterResults();
        });
};

function addBreed(breed) {
    let container = document.querySelector("#dog-breeds")
    let list = document.createElement("li")
    list.innerHTML = breed
    container.appendChild(list)
    list.addEventListener('click', newColor);
}

function newColor(event) {
    event.target.style.color = 'blue';
}

function clearList(element) {
    element.innerHTML = '';
}

function updateList(breeds) {
    let ul = document.querySelector("#dog-breeds")
    clearList(ul)
    breeds.forEach(breed => addBreed(breed))
}

function filterResults() {
    let dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener('change', function(event) {
        updateList(breeds.filter((breed) => breed.startsWith(dropdown.value)))
    })
}