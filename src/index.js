console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener("DOMContentLoaded", function(){
    loadImage(); fetchBreed(); breedSelector();
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
    .then(data => {
        breeds = Object.keys(data.message)
        addBreed(breeds)
    }); 
    
}

function addBreed(breeds) {

    const ul = document.getElementById('dog-breeds');
    //const keys = breeds.message
    breeds.forEach(breed => {
        const li = document.createElement('li')
        li.innerHTML = breed
        ul.appendChild(li)
        li.addEventListener('click', breedColor);
    }) 
}

function breedColor(event) {
    event.target.style.color = 'green';
}


function breedList(breeds){
    let ul = document.querySelector('#dog-breeds')
    ul.innerHTML = ''
    addBreed(breeds)
}


function filterBreed(l){
    breedList(breeds.filter(breed => breed.startsWith(l)))
}

function breedSelector(){
    let dropdown = document.querySelector("#breed-dropdown")
    dropdown.addEventListener('change',function(e){
        filterBreed(e.target.value)

    })
}
