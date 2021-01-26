console.log('%c HI', 'color: firebrick')

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
    const contain = document.getElementById('dog-breeds');
    cconst keys = Object.keys(breed.message)
    keys.forEach(r => {
    const li = document.createElement('li')
    li.innerHTML = r
    contain.appendChild(li)
    })

}
