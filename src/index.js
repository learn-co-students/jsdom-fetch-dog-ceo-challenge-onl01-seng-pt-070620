console.log('%c HI', 'color: firebrick')

function fetchDogPics() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(results => {
        results.message.forEach(image => renderDogPics(image))
    });
}

function renderDogPics(dogPicUrl) {
    const div = document.getElementById("dog-image-container");
    const img = document.createElement("img");
    img.src = dogPicUrl;
    div.appendChild(img);
}

let breeds = []

function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(results => {
        breeds = Object.keys(results.message);
        renderBreeds(breeds);
        selectBreedByAlphabet();
    });
}

function renderBreeds(breeds) {
    let ul = document.getElementById("dog-breeds");
    removeChildren(ul);
    breeds.forEach(breed => showBreed(breed));
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
}

function filterBreedsBy(letter) {
    renderBreeds(breeds.filter(breed => breed.startsWith(letter)));
}

function selectBreedByAlphabet() {
    const breedDropdown = document.getElementById("breed-dropdown");
    breedDropdown.addEventListener('change', function(event){
        filterBreedsBy(event.target.value);
    })
}

function showBreed(breed) {
    const ul = document.getElementById("dog-breeds");
    const li = document.createElement("li");
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener("click", changeColor);
}

function changeColor(event) {
    event.target.style.color = 'green';
}

document.addEventListener('DOMContentLoaded', function(){
    fetchDogPics();
    fetchBreeds();
})
    